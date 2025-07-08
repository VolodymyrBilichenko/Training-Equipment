import React, { useEffect, useState } from "react";
import { BackGroundDecor } from "../../components/BackGroundDecor/BackGroundDecor";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { CartItemLength } from "../../components/CartList/components/CartItemLength";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink";
import { useParams } from "react-router-dom";
import {
  addBasketItem,
  addFavorite,
  removeFavorite,
} from "../../redux/toolkitSlice";
import { useDispatch, useSelector } from "react-redux";
import { GetApiHeaders } from "../../functions/getApiHeaders";
import CreditCard from "../../assets/img/product/credit_card.svg";
import AccBalance from "../../assets/img/product/account_balance_wallet.svg";
import Assigment from "../../assets/img/product/assignment.svg";
import getCookies from "../../functions/getCookies";
import { ProductSwiper } from "./ProductSwiper/ProductSwiper";
import { toast } from "react-toastify";
import HTMLReactParser from "html-react-parser";
import { Preloader } from "../../components/Preloader/Preloader";
import { errorTypes } from "../../constants";
import i18next from "i18next";
import DocumentMeta from "react-document-meta";
import { useTranslation } from "react-i18next";

export const ProductCard = () => {
  const { t, i18n } = useTranslation();

  const { id } = useParams();
  const dispatch = useDispatch();

  const statuses = [
    {
      ua: "Немає у наявності",
      ru: "Нет в наличии",
      en: "None of stock",
    },
    {
      ua: "У наявності",
      ru: "В наличии",
      en: "In stock",
    },
    {
      ua: "Очікується протягом кількох днів",
      ru: "Ожидается",
      en: "Wating",
    },
    {
      ua: "Видален з прайса",
      ru: "Удален из прайса",
      en: "Deleted from list",
    },
  ];

  const favorites = useSelector((state) => state.toolkit.favorites);

  const [dataCard, setDataCard] = useState({});
  const [productCount, setProductCount] = useState(1);
  const [isAddedBasket, setIsAddedBasket] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState();

  const lang = i18next.language ?? "";

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(getApiLink(`/api/products/${id}`), { headers: GetApiHeaders() })
      .then(({ data }) => {
        let item = data.data;

        if (item.amount_in_store === 0) {
          item = {
            ...item,
            status: {
              id: 1,
            },
          };
        }

        setDataCard(item);
      })
      .catch((error) => {
        toast.error("Возникла неизведанная ошибка");
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1300);
      });
  }, [id]);

  const meta = {
    title: dataCard?.meta_title ?? dataCard["name_" + lang] ?? dataCard?.name,
    description:
      (dataCard?.meta_description ??
        dataCard["description_" + lang] ??
        dataCard?.description) + " | Ukraine Facility",
    meta: {
      charset: "utf-8",
    },
  };

  useEffect(() => {
    setIsFavorite(favorites.some((item) => item.id === dataCard?.id));
  }, [favorites, dataCard]);

  if (isLoading) {
    return <Preloader />;
  }

  const handleAddCart = async () => {
    
    const dataItem = {
      id: dataCard?.id,
      photo: dataCard?.files[0]?.web_path,
      articul: dataCard?.article,
      price: dataCard?.price,
      sale_price: dataCard?.sale_price,
      amount: productCount,
      name: dataCard?.name,
    };

    if (getCookies("cookieToken")) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
        "cookieToken"
      )}`;
      axios
        .post(getApiLink("/api/bucket/add"), dataItem, {
          headers: GetApiHeaders(),
        })
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            toast.success(t("success_added_to_cart"));
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            t(
              errorTypes[
                err?.response?.data?.error?.message &&
                  err?.response?.data?.error?.message[0]
              ]
            )
          );
        });
    } else {
      dispatch(addBasketItem(dataItem));
      toast.success(t("success_added_to_cart"));
    }
  };

  const handleFavorite = () => {
    const halfInfoProduct = {
      id: dataCard?.id,
      name: dataCard?.name,
      files: [
        {
          web_path: dataCard?.files[0]?.web_path,
        },
      ],
      original_price: dataCard?.price,
      price: dataCard?.sale_price,
    };

    if (!isFavorite) {
      dispatch(addFavorite(halfInfoProduct));
      setIsFavorite(true);
      toast.success(t("success_added_to_fav"));

      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
        "cookieToken"
      )}`;
      axios
        .post(getApiLink(`/api/favorites/add/${dataCard?.id}`), {
          headers: GetApiHeaders(),
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      dispatch(removeFavorite(halfInfoProduct));
      setIsFavorite(false);

      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
        "cookieToken"
      )}`;
      axios
        .post(getApiLink(`/api/favorites/remove/${dataCard?.id}`), {
          headers: GetApiHeaders(),
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <DocumentMeta {...meta}>
      {/* <BackGroundDecor /> */}

      <BreadCrumbs
        pages={[
          {
            route: "/catalog",
            page: t("menu_point_2"),
          },
          {
            page: dataCard?.name,
          },
        ]}
      />

      {!!dataCard && !!Object.keys(dataCard)?.length && (
        <section className="product container">
          <ProductSwiper dataCard={dataCard} />

          <div className="product__col">
            <div className="title-fav">
              <h2 className="product__title title">
                {dataCard["name_" + lang] ?? dataCard?.name}
              </h2>
              <button onClick={handleFavorite}>
                <svg width="26" height="26" viewBox="0 0 48 48">
                  <use
                    xlinkHref={isFavorite ? "#favorited" : "#favorite"}
                  ></use>
                </svg>
              </button>
            </div>
            <span className="product__article-number">
              {t("articul")}: {dataCard?.article}
            </span>
            {/* <span className="product__article-number">
              Осталось на складе: {dataCard?.amount_in_store}
            </span> */}

            <span
              className={
                "product__status" +
                (dataCard.status.id === 2 ? " in-stock" : "")
              }
            >
              {statuses[dataCard.status.id - 1][i18n.language]}
            </span>
            <div className="product__info">
              <div className="product__info_col">
                <div className="product__price">
                  <ins>
                    {(dataCard?.sale_price ?? dataCard?.price) * productCount} ₴
                  </ins>
                  {dataCard?.sale_price && (
                    <del>{dataCard?.price * productCount} ₴</del>
                  )}
                </div>

                <CartItemLength
                  productInfo={dataCard}
                  setProductCount={setProductCount}
                  productCount={productCount}
                />
              </div>
              <div className="product__info_col">
                <button
                  disabled={
                    dataCard.status.id !== 2 || !dataCard.amount_in_store
                  }
                  onClick={handleAddCart}
                  className="product__add-to-cart button"
                  type="button"
                  aria-label={t("add_to_cart")}
                >
                  <svg width="20" height="20" viewBox="0 0 48 48">
                    <use xlinkHref="#cart"></use>
                  </svg>
                  <span>{t("add_to_cart")}</span>
                </button>
              </div>
            </div>
            <div className="product__info product__info_border">
              <div className="product__info_col">
                <table className="product__characteristics">
                  <caption>{t("characteristics")}</caption>
                  <tbody>
                    {dataCard?.condition && (
                      <tr>
                        <td>{t("condition")}</td>
                        <td>{dataCard?.condition}</td>
                      </tr>
                    )}
                    {dataCard?.producer && (
                      <tr>
                        <td>{t("manufacturer")}</td>
                        <td>{dataCard?.producer}</td>
                      </tr>
                    )}
                    {dataCard?.weight && (
                      <tr>
                        <td>{t("weight")}</td>
                        <td>{dataCard?.weight} гр</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="product__info_col">
                <ul className="product__paymethods">
                  <li>
                    <i>
                      <img
                        src={CreditCard}
                        width="40"
                        height="40"
                        loading="lazy"
                        alt=""
                      />
                    </i>
                    <span>{t("nocash")}</span>
                  </li>
                  <li>
                    <i>
                      <img
                        src={AccBalance}
                        width="40"
                        height="40"
                        loading="lazy"
                        alt=""
                      />
                    </i>
                    <span>{t("cash_on_delivery")}</span>
                  </li>
                  <li>
                    <i>
                      <img
                        src={Assigment}
                        width="40"
                        height="40"
                        loading="lazy"
                        alt=""
                      />
                    </i>
                    <span>{t("under_supply_contract")}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <div className="product__description">
                <h3>{t("description")}</h3>
                {HTMLReactParser(
                  dataCard["name_" + lang] ?? dataCard?.description ?? ""
                )}
              </div>
            </div>
          </div>

          <div className="product__col"></div>
        </section>
      )}

      {!!dataCard?.recommended_products?.length && (
        <section className="recommended container">
          <div className="recommended__decor" aria-hidden="true">
            <picture>
              <img
                src="img/decor-element.png"
                alt=""
                width="0"
                height="0"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="recommended__container">
            <h2 className="recommended__title title">{t("recommendation")}</h2>

            <ProductsList
              isLoading={isLoading}
              list={dataCard?.recommended_products}
              ClassNameList={"recommended__list"}
            />
          </div>
        </section>
      )}
    </DocumentMeta>
  );
};
