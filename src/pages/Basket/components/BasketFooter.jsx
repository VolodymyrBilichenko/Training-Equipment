import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { PopupContext } from "../../../App";
import { setBasketComment, setIsUseBonuses } from "../../../redux/toolkitSlice";

export const BasketFooter = () => {
  const { t } = useTranslation();
  const setModal = useContext(PopupContext);
  const dispatch = useDispatch();

  const settings = useSelector((state) => state.toolkit.settings);
  const basketList = useSelector((state) => state.toolkit.basket);
  const user = useSelector((state) => state.toolkit.user);

  const [minOrderPrice, setMinOrderPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [preAmount, setPreAmount] = useState(0);
  const [comment, setComment] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [_isUseBonuses, _setIsUseBonuses] = useState(false);

  const handleOrder = () => {
    dispatch(setBasketComment(comment));
    dispatch(setIsUseBonuses(_isUseBonuses));
    setModal("order");
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    setTotalAmount(0)
    setPreAmount(0)

    for(let i = 0; i < basketList.length; i++) {
      setTotalAmount(prev => prev + (basketList[i].amount * (basketList[i]?.sale_price ?? basketList[i].price)))
      setPreAmount(prev => prev + (basketList[i].amount * (basketList[i]?.price)))
    }


    // discount amount
    setDiscountAmount(
      basketList.reduce((acc, item) => {
        if (item.sale_price) {
          return acc + item.amount * (item.price - item.sale_price);
        }
        return acc;
      }, 0)
    );
  }, [basketList]);

  useEffect(() => {
    if (!!settings.length) {
      setMinOrderPrice(
        settings?.find((item) => item.key === "min_order_price")?.value ?? 0
      );
    }
  }, [settings]);

  useEffect(() => {
    if (user?.discount?.bonuses_sum) {
      setBonus(user?.discount?.bonuses_sum);
    }
  }, [user]);

  return (
    <div className="cart__footer">
      <div className="cart__footer_col">
        <div className="cart__message">
          <label htmlFor="order-message">{t("comment_to_order")}</label>
          <p>
            <textarea
              name="order-message"
              value={comment}
              onChange={handleComment}
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
              <td>{minOrderPrice}.00 ₴</td>
            </tr>
            <tr className="">
              <td>{t("common_total")}</td>
              <td>{preAmount?.toFixed(2)} ₴</td>
            </tr>
            <tr>
              <td>{t("discount")}</td>
              <td>{discountAmount.toFixed(2)} ₴</td>
            </tr>
            {bonus > 0 && (
              <tr>
                <td>{t("bonuses")}</td>
                <td className="bonuses-row">
                  <span>{bonus} ₴</span>
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="bonuses-input"
                    disabled={totalAmount < minOrderPrice}
                    checked={_isUseBonuses}
                    onChange={() => _setIsUseBonuses(!_isUseBonuses)}
                  />
                  <label htmlFor="bonuses-input" className="checkbox-element">
                    <svg width="17" height="17" viewBox="0 0 17 17">
                      <use xlinkHref="#check"></use>
                    </svg>
                    <span>{t("use_bonuses")}</span>
                  </label>
                </td>
              </tr>
            )}
            <tr className="add-hr">
              <td>
                <b>{t("total")}</b>
              </td>
              <td>
                <strong>
                  {_isUseBonuses
                    ? (totalAmount - bonus).toFixed(2)
                    : totalAmount.toFixed(2)}{" "}
                  ₴
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <label className="cart__checkbox checkbox">
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
        </label> */}

        <button
          onClick={handleOrder}
          className="cart__submit button is-mode-1 open-popup"
          type="button"
          aria-label={t("make_order")}
          disabled={totalAmount < minOrderPrice}
        >
          <svg width="24" height="24" viewBox="0 0 48 48">
            <use xlinkHref="#cart"></use>
          </svg>
          <span>{t("make_order")}</span>
        </button>
      </div>
    </div>
  );
};
