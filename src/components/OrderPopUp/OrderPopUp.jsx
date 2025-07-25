import React, { useContext, useEffect, useState } from "react";
import { PopupContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink";
import { GetApiHeaders } from "../../functions/getApiHeaders";
import getCookies from "../../functions/getCookies";
import setCookie from "../../functions/setCookie";
import { toast } from "react-toastify";
import { setBasket, setBasketComment } from "../../redux/toolkitSlice";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { clearProducts } from "../../utils/db";
import InputMask from "react-input-mask";

export const OrderPopUp = ({ handleClosePopUp }) => {
  const { t, i18n } = useTranslation();

  const SetPopContext = useContext(PopupContext);
  const basketList = useSelector((state) => state.toolkit.basket);
  const basketComment = useSelector((state) => state.toolkit.basketComment);
  const user = useSelector((state) => state.toolkit.user);
  const isUseBonuses = useSelector((state) => state.toolkit.isUseBonuses);

  const navigate = useNavigate();

  const [email, setEmail] = useState(user?.email ?? "");
  const [phone, setPhone] = useState(user?.phone_number ?? "");
  const [checkedBill, setCheckedBill] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setEmail(user?.email);
    setPhone(user?.phone_number);
  }, [user]);

  const handleNavPopupThx = () => {
    SetPopContext("thx");
  };

  const handleNavPopupLogin = () => {
    SetPopContext("login");
  };

  const handleNavPopupRegister = () => {
    SetPopContext("register");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const products = basketList.map((item) => ({
      product_id: item.id,
      product_amount: item.amount,
    }));

    const dataToSend = {
      products,
      note: basketComment,
      email_not_auth_user: email,
      phone_not_auth_user: phone,
      is_get_example: checkedBill,
      is_use_bonuses: isUseBonuses,
    };

    const apiString = getCookies("cookieToken")
      ? "/api/orders/createFromAuthUser"
      : "/api/order/create";

    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;
    axios
      .post(getApiLink(apiString), dataToSend, {
        headers: {
          Authorization: `Bearer ${getCookies("cookieToken")}`,
          "Accept-Language": i18n.language || "en", // или указать вручную "ru" / "en"
        },
      })
      .then(({ data }) => {
        handleNavPopupThx();

        setCookie("basket", "");
        dispatch(setBasket([]));
        dispatch(setBasketComment(""));
        dispatch(setBasket([]));

        // clear basket from db
        clearProducts();

        navigate("/");
      })
      .catch((error) => {
        if (
          error.response.data?.error?.message?.some(
            (mes) =>
              mes === "Not enough amount of product in store to add into basket"
          )
        )
          return toast.error(t("product_dont_enough"));

        return toast.error(t("something_was_happen"));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="popup-wrapper">
      <div onClick={handleClosePopUp} className="popup-bg popup-close"></div>
      <div className="popup-body">
        <button
          onClick={handleClosePopUp}
          type="button"
          className="popup-close-btn popup-close"
          title="Закрити"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="#close-3"></use>
          </svg>
        </button>
        <div className="popup-container">
          <h2 className="popup-title title">{t("checkout_order")}</h2>
          {!user?.id && (
            <div className="popup-text">
              <p>
                <Trans
                  i18nKey="want_discount_register"
                  components={{
                    register: (
                      <button
                        onClick={handleNavPopupRegister}
                        className="open-popup"
                      />
                    ),
                    login: (
                      <button
                        onClick={handleNavPopupLogin}
                        className="open-popup"
                      />
                    ),
                  }}
                />
              </p>
            </div>
          )}
          <form
            method="post"
            onSubmit={handleFormSubmit}
            className="popup-form"
          >
            <label className="popup-form__item">
              <span className="is-required">E-mail</span>
              <span className="input-label">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  required
                  placeholder={t("enter_your_email")}
                  className="input"
                />
              </span>
            </label>
            <label className="popup-form__item">
              <span className="is-required">{t("phone_title")}</span>
              <span className="input-label">
                <InputMask
                  mask="+380 (99) 999 99 99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("enter_phone")}
                >
                  {(inputProps) => (
                    <input
                      {...inputProps}
                      type="tel"
                      name="phone"
                      required
                      className="input"
                    />
                  )}
                </InputMask>
              </span>
            </label>
            <label className="popup-form__checkbox checkbox">
              <input
                type="checkbox"
                checked={checkedBill}
                onChange={(e) => setCheckedBill(e.target.checked)}
                name="receive-email"
                className="checkbox-input"
              />
              <span className="checkbox-element">
                <svg width="17" height="17" viewBox="0 0 17 17">
                  <use xlinkHref="#check"></use>
                </svg>
              </span>
              <span className="checkbox-text">{t("want_to_get")}</span>
            </label>
            <button
              disabled={isLoading}
              className="popup-form__submit button is-mode-1"
              type="submit"
            >
              {t("make_order")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
