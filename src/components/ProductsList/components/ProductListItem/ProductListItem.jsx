import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBasketItem,
  addFavorite,
  removeFavorite,
} from "../../../../redux/toolkitSlice";
import { NavLink } from "react-router-dom";
import photoPlaceholder from "./../../../../assets/img/null-card-image.png";
import axios from "axios";
import { getApiLink } from "../../../../api/getApiLink";
import { GetApiHeaders } from "../../../../functions/getApiHeaders";
import getCookies from "../../../../functions/getCookies";
import { toast } from "react-toastify";

export const ProductListItem = ({ data }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.toolkit.favorites);
  const basket = useSelector((state) => state.toolkit.basket);

  const [isFavorite, setIsFavorite] = useState(
    favorites.some((item) => item.id === data.id)
  );
  const [isAddedBasket, setIsAddedBasket] = useState(
    basket.some((item) => item.product_id === data.id)
  );

  const handleAddBasket = () => {
    dispatch(
      addBasketItem({
        product_id: data.id,
        product_amount: 1,
      })
    );

    setIsAddedBasket((prev) => !prev);

    if (!getCookies("cookieToken"))
      return toast.success("Товар успешно добавлен в корзину");

    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;
    axios
      .post(
        getApiLink("/api/bucket/add"),
        {
          product_id: data.id,
          product_amount: 1,
        },
        { headers: GetApiHeaders() }
      )
      .then((res) => {
        toast.success("Товар успешно добавлен в корзину");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFavorite = () => {
    const halfInfoProduct = {
      id: data.id,
      name: data.name,
      files: [
        {
          web_path: data?.files[0]?.web_path,
        },
      ],
      original_price: data.original_price,
      price: data.price,
    };
    if (!isFavorite) {
      dispatch(addFavorite(halfInfoProduct));
      setIsFavorite(true);
      toast.success("Товар успішно додано до обраних");

      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
        "cookieToken"
      )}`;
      axios
        .post(getApiLink(`/api/favorites/add/${data.id}`), {
          headers: GetApiHeaders(),
        })
        .then(({ data }) => {})
        .catch((error) => {
          console.error(error);
        });
    } else {
      dispatch(removeFavorite(halfInfoProduct));
      // setIsFavorite(prev => !prev)
      setIsFavorite(false);

      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
        "cookieToken"
      )}`;
      axios
        .post(getApiLink(`/api/favorites/remove/${data.id}`), {
          headers: GetApiHeaders(),
        })
        .then(({ data }) => {})
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <li className="product-card">
      <button
        title="Обране"
        onClick={handleFavorite}
        className={`product-card-fav`}
        aria-current="page"
      >
        <svg width="26" height="26" viewBox="0 0 48 48">
          <use xlinkHref={isFavorite ? "#favorited" : "#favorite"}></use>
        </svg>
      </button>
      <NavLink
        to={`/product/${data.id}`}
        className="product-card__image image-aspect-ratio"
        aria-label="Глобус-модель 'Будова Сонця'"
      >
        <picture>
          <img
            src={data.files[0]?.web_path ?? photoPlaceholder}
            alt="ProductCardImg"
            width="300"
            height="300"
            loading="lazy"
          />
        </picture>
      </NavLink>
      <h3 className="product-card__title">
        <NavLink to={`/product/${data.id}`}>{data.name}</NavLink>
      </h3>
      <div className="product-card__price">
        <ins>{`${data.original_price} ₴`}</ins>
        <del>{`${data.price === null ? "" : data.price + " ₴"}`}</del>
      </div>
      {/*style={{background: isAddedBasket ? "#9C50B8" : ""}}*/}
      <button
        onClick={handleAddBasket}
        className="product-card__add-cart button is-min-on-mob"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 48 48">
          <use xlinkHref="#cart"></use>
        </svg>
        <span>Додати до кошика</span>
      </button>
    </li>
  );
};
