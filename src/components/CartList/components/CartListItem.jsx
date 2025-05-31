import React, { useEffect, useState } from "react";
import { CartItemLength } from "./CartItemLength";
import { useDispatch, useSelector } from "react-redux";
import { removeBasketItem } from "../../../redux/toolkitSlice";
import axios from "axios";
import getCookies from "../../../functions/getCookies";
import { getApiLink } from "../../../api/getApiLink";
import { GetApiHeaders } from "../../../functions/getApiHeaders";
import photoPlaceholder from "../../../assets/img/null-card-image.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CartListItem = ({ productInfo, setTotalAmount, products }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.toolkit.basket);
  const basketItem = basketList.filter(
    (item) => item.product_id === productInfo.id
  )[0];

  const [productCount, setProductCount] = useState(basketItem.product_amount);
  const [productPrice, setProductPrice] = useState(0);

  const handleDeleteItem = () => {
    // setTotalAmount((prev) => prev - productPrice * productCount);
    dispatch(removeBasketItem(productInfo.id));

    if (!getCookies("cookieToken")) return;

    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;
    axios.post(
      getApiLink("/api/bucket/remove"),
      {
        product_id: productInfo.id,
        product_amount: productCount,
      },
      { headers: GetApiHeaders() }
    );
  };

  useEffect(() => {  
    setProductPrice(productInfo?.sale_price ?? productInfo?.price)
    setProductCount(basketItem.product_amount);
  }, [basketItem]);

  

  return (
    <li className="cart__item">
      <div className="cart__item_body">
        <div className="cart__item_info">
          <NavLink
            to={`/product/${productInfo.id}`}
            className="cart__item_image"
          >
            <img
              src={productInfo.files[0]?.web_path ?? photoPlaceholder}
              alt=""
              width="130"
              height="130"
              loading="lazy"
            />
          </NavLink>
          <h3>
            <NavLink to={`/product/${productInfo.id}`}>
              {productInfo.name}
            </NavLink>
          </h3>
          <span>{t('articul')} {productInfo.article}</span>
        </div>
        <div className="cart__item_price">
          <span>
            {t('price')}
          </span>
          {<b>{productInfo?.sale_price ?? productInfo?.price} ₴</b>}
          {productInfo?.sale_price ? <strike>{productInfo?.price} ₴</strike> : productInfo?.sale_price}
        </div>
        <div className="cart__item_length">
          <span>
            {t('amount')}
          </span>

          <CartItemLength
            products={products}
            setTotalAmount={setTotalAmount}
            productInfo={productInfo}
            setProductCount={setProductCount}
            productCount={productCount}
          />
        </div>
        <div className="cart__item_total">
          <span>
            {t('summa')}
          </span>
          <b data-price-currency="₴">
            {productPrice * productCount}
          </b>
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
