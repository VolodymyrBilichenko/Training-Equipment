import React, { useEffect, useState } from "react";
import { CartItemLength } from "./CartItemLength";
import { useDispatch, useSelector } from "react-redux";
import { removeBasketItem, updateBasketItem } from "../../../redux/toolkitSlice";
import axios from "axios";
import getCookies from "../../../functions/getCookies";
import { getApiLink } from "../../../api/getApiLink";
import { GetApiHeaders } from "../../../functions/getApiHeaders";
import photoPlaceholder from "../../../assets/img/null-card-image.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { removeProduct, updateProduct } from "../../../utils/db";

export const CartListItem = ({ productInfo }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [productCount, setProductCount] = useState(productInfo?.amount ?? 1);

  const handleDeleteItem = () => {
    removeProduct(productInfo?.id);
    dispatch(removeBasketItem(productInfo?.id));
  };

  const handleIncrement = async () => {
    setProductCount((prev) => prev + 1);
  };

  const handleDecrement = async () => {
    if (productCount > 1) setProductCount((prev) => prev - 1);
  };
  
  useEffect(() => {
    if (productCount !== productInfo?.amount) {
      dispatch(updateBasketItem({ ...productInfo, amount: productCount }));
    }
  }, [productCount]);

  return (
    <li className="cart__item">
      <div className="cart__item_body">
        <div className="cart__item_info">
          <NavLink
            to={`/product/${productInfo.id}`}
            className="cart__item_image"
          >
            <img
              src={productInfo?.photo ?? photoPlaceholder}
              alt=""
              width="130"
              height="130"
              loading="lazy"
            />
          </NavLink>
          <h3>
            <NavLink to={`/product/${productInfo.id}`}>
              {productInfo?.name}
            </NavLink>
          </h3>
          <span>
            {t("articul")} {productInfo?.articul}
          </span>
        </div>
        <div className="cart__item_price">
          <span>{t("price")}</span>
          {<b>{productInfo?.sale_price ?? productInfo?.price} ₴</b>}
          {productInfo?.sale_price ? (
            <strike>{productInfo?.price} ₴</strike>
          ) : (
            productInfo?.sale_price
          )}
        </div>
        <div className="cart__item_length">
          <span>{t("amount")}</span>

          <div className="product__length">
            <button
              className="product__length_minus"
              type="button"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="number"
              name="product-length"
              placeholder=""
              value={productCount}
              max="100"
              min="1"
              data-price-value="200"
              required
              className="product__length_value"
              readOnly
            />
            <button
              className="product__length_plus"
              type="button"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        <div className="cart__item_total">
          <span>{t("summa")}</span>
          <b data-price-currency="₴">{(productInfo?.sale_price ?? productInfo?.price) * productCount}</b>
        </div>
        <button
          onClick={handleDeleteItem}
          className="cart__item_remove"
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <use xlinkHref="#trash"></use>
          </svg>
        </button>
      </div>
    </li>
  );
};
