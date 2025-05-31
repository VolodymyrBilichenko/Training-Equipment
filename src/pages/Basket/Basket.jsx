import React, { useContext, useEffect, useState } from "react";
import { BackGroundDecor } from "../../components/BackGroundDecor/BackGroundDecor";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { CartList } from "../../components/CartList/CartList";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { PopupContext } from "../../App";
import getCookies from "../../functions/getCookies";
import { setBasketComment } from "../../redux/toolkitSlice";
import { toast } from "react-toastify";
import { Trans, useTranslation } from "react-i18next";

export const Basket = () => {
  const { t } = useTranslation();

  const setModal = useContext(PopupContext);
  const [orderComment, setOrderComment] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [minOrderAmount, setMinOrderAmount] = useState(0);
  const dispatch = useDispatch();

  const basketList = useSelector((state) => state.toolkit.basket);
  const allProducts = useSelector((state) => state.toolkit.allProducts);
  const usersData = useSelector((state) => state.toolkit.user);
  const minOrder = useSelector((state) => state.toolkit.settings);

  const handleOpenModal = (type) => {
    setModal(`${type}`);
  };

  useEffect(() => {
    if (!Object.keys(minOrder).length) return;

    setMinOrderAmount(
      minOrder?.find((item) => item.key === "min_order_price").value
    );
  }, [minOrder]);

  const handleOrder = () => {
    if (!basketList.length) {
      return toast.error(t("you_have_empty_cart"));
    } else if (minOrderAmount > totalAmount) {
      return toast.error(
        t("minimum_order_price") + " " + minOrderAmount + " грн"
      );
    }

    handleOpenModal("order");
  };

  const handleCommentChange = (e) => {
    setOrderComment(e.target.value);

    dispatch(setBasketComment(orderComment));
  };

  const discountPercent = usersData.discount ? usersData.discount.percent : 0;
  const discountBonuses = usersData.discount
    ? usersData.discount.bonuses_sum
    : 0;
  const discountAmount = (totalAmount * discountPercent) / 100;
  const discountTotalSum = totalAmount - discountAmount - discountBonuses;

  useEffect(() => {
    !basketList.length && setTotalAmount(0);
    !basketList.length && setOrderComment("");
  }, [basketList]);

  return (
    <>
      {/* <BackGroundDecor /> */}

      <BreadCrumbs pages={[{ page: t("cart") }]} />

      <section className="cart container">
        <SectionTitle title={t("cart")} />

        {!getCookies("cookieToken") && (
          <div className="cart__note">
            <p>
              <Trans
                i18nKey="want_discount_register"
                components={{
                  register: (
                    <button
                      onClick={() => handleOpenModal("register")}
                      className="open-popup"
                    />
                  ),
                  login: (
                    <button
                      onClick={() => handleOpenModal("login")}
                      className="open-popup"
                    />
                  ),
                }}
              />
            </p>
          </div>
        )}

        <CartList setTotalAmount={setTotalAmount} products={allProducts} />

        <div className="cart__footer">
          <div className="cart__footer_col">
            <div className="cart__message">
              <label htmlFor="order-message">{t("comment_to_order")}</label>
              <p>
                <textarea
                  name="order-message"
                  value={orderComment}
                  onChange={handleCommentChange}
                  placeholder={t("enter_text")}
                  id="order-message"
                ></textarea>
              </p>
            </div>
          </div>
          <div className="cart__footer_col">
            <table className="cart__total">
              <tbody>
                <tr className="">
                  <td>{t("minimum_order_price")}</td>
                  <td>{minOrderAmount} ₴</td>
                </tr>
                <tr className="">
                  <td>{t("common_total")}</td>
                  <td>{totalAmount} ₴</td>
                </tr>
                <tr>
                  <td>{t("discount")}</td>
                  <td>{discountAmount} ₴</td>
                </tr>
                <tr>
                  <td>{t("bonuses")}</td>
                  <td>{discountBonuses} ₴</td>
                </tr>
                <tr className="add-hr">
                  <td>
                    <b>{t("total")}</b>
                  </td>
                  <td>
                    <strong
                      data-price-sum-result="cart-list"
                      data-price-discount="500"
                      data-price-currency="₴"
                    >
                      {discountPercent && !basketList.length
                        ? totalAmount < 0
                          ? 0
                          : totalAmount.toFixed(2)
                        : discountTotalSum < 0
                        ? 0
                        : discountTotalSum.toFixed(2)}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <label className="cart__checkbox checkbox">
              <input
                type="checkbox"
                name="receive-docs"
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
              onClick={handleOrder}
              className="cart__submit button is-mode-1 open-popup"
              data-href="#order-popup"
              type="button"
              aria-label={t("make_order")}
            >
              <svg width="24" height="24" viewBox="0 0 48 48">
                <use xlinkHref="#cart"></use>
              </svg>
              <span>{t("make_order")}</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
