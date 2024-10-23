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

export const OrderPopUp = ({ handleClosePopUp }) => {
  const SetPopContext = useContext(PopupContext);
  const basketItems = useSelector((state) => state.toolkit.basket);
  const basketComment = useSelector((state) => state.toolkit.basketComment);
  const user = useSelector((state) => state.toolkit.user);

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

    const dataToSend = {
      products: basketItems,
      note: basketComment,
      email_not_auth_user: email,
      phone_not_auth_user: phone,
    };
    

    const apiString = getCookies("cookieToken")
      ? "/api/orders/createFromAuthUser"
      : "/api/order/create";

    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;
    axios
      .post(getApiLink(apiString), dataToSend, { headers: GetApiHeaders() })
      .then(({ data }) => {
        handleNavPopupThx();

        setCookie("basket", "");
        dispatch(setBasket([]));
        dispatch(setBasketComment(""));
      })
      .catch((error) => {
        console.error("Error:", error);

        if (
          error.response.data?.error?.message?.some(
            (mes) =>
              mes === "Not enough amount of product in store to add into basket"
          )
        )
          return toast.error(
            "У одного из товаров не достаточное количество для заказа"
          );
      }).finally(() => {
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
          <h2 className="popup-title title">Оформление заказа</h2>
          {!user?.id && <div className="popup-text">
            <p>
              Если Вы хотите получить персональную скидку или стать участником
              бонусной системы -
              <button
                onClick={handleNavPopupRegister}
                className="open-popup popup-close"
              >
                &nbsp;Зарегистрируйтесь
              </button>{" "}
              или
              <button
                onClick={handleNavPopupLogin}
                className="open-popup popup-close"
              >
                &nbsp;Авторизуйтесь
              </button>
              в личном кабинете, прежде чем оформить этот заказ
            </p>
          </div>}
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
                  placeholder="Введите свой email"
                  className="input"
                />
              </span>
            </label>
            <label className="popup-form__item">
              <span className="is-required">Телефон</span>
              <span className="input-label">
                <input
                  type="tel"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  name="phone"
                  required
                  placeholder="Введите номер телефона"
                  className="input"
                />
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
              <span className="checkbox-text">
                Бажаю отримати на адресу електронної пошти примірник Договору
                поставки та Рахунок
              </span>
            </label>
            <button
              disabled={isLoading}
              className="popup-form__submit button is-mode-1"
              type="submit"
            >
              Оформити замовлення
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
