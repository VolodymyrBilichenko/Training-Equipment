import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import photoPlaceholder from "../assets/img/null-card-image.png";
import axios from "axios";
import { getApiLink } from "../api/getApiLink";
import { GetApiHeaders } from "../functions/getApiHeaders";
import getCookies from "../functions/getCookies";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { saveFavoriteProduct } from "../utils/db";
import {
  addBasketItem,
  addFavorite,
  removeFavorite,
} from "../redux/toolkitSlice";

export const ProductItem = ({ data }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const favorites = useSelector((state) => state.toolkit.favorites);
  const basket = useSelector((state) => state.toolkit.basket);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddBasket = async () => {
    if (
      basket.some(
        (item) => data.id === item.id && item.amount >= item.amount_in_store
      )
    ) {
      return toast.error(
        t("not_enough_amount_of_product_in_store_to_add_into_basket")
      );
    }

    const dataItem = {
      id: data?.id,
      photo: data?.files[0]?.web_path,
      articul: data?.article,
      price: data?.price,
      sale_price: data?.sale_price,
      amount: 1,
      name: data?.name,
      name_ua: data?.name_ua,
      name_ru: data?.name_ru,
      name_en: data?.name_en,
      amount_in_store: data?.amount_in_store,
    };

    dispatch(addBasketItem(dataItem));

    if (!getCookies("cookieToken"))
      return toast.success(t("success_added_to_cart"));

    // request to server
    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;

    const body = {
      product_id: data.id,
      product_amount: 1,
    };
    axios
      .post(getApiLink("/api/bucket/add"), body, { headers: GetApiHeaders() })
      .then((_) => toast.success(t("success_added_to_cart")))
      .catch((err) => console.log(err));
  };

  const handleFavorite = () => {
    const favoriteProduct = {
      id: data.id,
      name: data.name,
      name_ua: data?.name_ua,
      name_ru: data?.name_ru,
      name_en: data?.name_en,
      price: data.price,
      sale_price: data.sale_price,
      amount_in_store: data.amount_in_store,
      article: data.article,
      files: [
        {
          web_path: data?.files[0]?.web_path,
        },
      ],
    };

    if (isFavorite) {
      handleRemoveFavorite();
    } else {
      handleAddFavorite();
    }

    function handleRemoveFavorite() {
      dispatch(removeFavorite(favoriteProduct));
      toast.success(t("success_removed_from_favorites"));
      handleFavoriteToServer(`/api/favorites/remove/${data.id}`);
    }

    function handleAddFavorite() {
      dispatch(addFavorite(favoriteProduct));
      toast.success(t("success_added_to_favorites"));
      handleFavoriteToServer(`/api/favorites/add/${data.id}`);
    }

    function handleFavoriteToServer(link) {
      if (!getCookies("cookieToken")) return;
      axios
        .post(
          getApiLink(link),
          {},
          {
            headers: {
              ...GetApiHeaders(),
              Authorization: `Bearer ${getCookies("cookieToken")}`,
            },
          }
        )
        .then(({ data }) => {})
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    setIsFavorite(favorites.some((item) => item.id === data.id));
  }, [favorites]);

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
        // target="_blank"
        to={`/product/${data.id}`}
        className="product-card__image image-aspect-ratio"
        aria-label="Глобус-модель 'Будова Сонця'"
      >
        <picture>
          <img
            src={data.files[0]?.web_path ?? photoPlaceholder}
            alt={data?.[`name_${i18n.language}`] ?? data?.name}
            width="300"
            height="300"
            loading="lazy"
          />
        </picture>
      </NavLink>
      <h3 className="product-card__title">
        <NavLink to={`/product/${data.id}`}>
          {data?.[`name_${i18n.language}`] ?? data?.name}
        </NavLink>
      </h3>

      {!data.amount_in_store && (
        <p className="not_in_stock">{t("not_in_stock")}</p>
      )}

      <div className="button-row">
        <div className="product-card__price">
          <ins>{`${data.sale_price ?? data.price} ₴`}</ins>
          {data.sale_price && <del>{data.price + " ₴"}</del>}
        </div>

        <button
          disabled={!data.amount_in_store}
          onClick={handleAddBasket}
          className="product-card__add-cart button is-min-on-mob"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 48 48">
            <use xlinkHref="#cart"></use>
          </svg>
          <span>{t("add_to_cart")}</span>
        </button>
      </div>
    </li>
  );
};
