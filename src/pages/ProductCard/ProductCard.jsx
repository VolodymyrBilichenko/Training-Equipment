import React, { useEffect, useState } from "react";
import { BackGroundDecor } from "../../components/BackGroundDecor/BackGroundDecor";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { CartItemLength } from "../../components/CartList/components/CartItemLength";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink";
import { useParams } from "react-router-dom";
import { addBasketItem } from "../../redux/toolkitSlice";
import { useDispatch } from "react-redux";
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

export const ProductCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [dataCard, setDataCard] = useState({});
  const [productCount, setProductCount] = useState(1);
  const [isAddedBasket, setIsAddedBasket] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(getApiLink(`/api/products/${id}`), { headers: GetApiHeaders() })
      .then(({ data }) => {
        setDataCard(data.data);
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

  if (isLoading) {
    return <Preloader />;
  }

  const handleAddCart = () => {
    const dataItem = {
      product_id: dataCard?.id,
      product_amount: productCount,
    };

    setIsAddedBasket((prev) => !prev);
    dispatch(addBasketItem(dataItem));

    if (!getCookies("cookieToken")) return;

    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;
    axios
      .post(getApiLink("/api/bucket/add"), dataItem, {
        headers: GetApiHeaders(),
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success("Товар успешно добавлен в корзину");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(errorTypes[err?.response?.data?.error?.message && err?.response?.data?.error?.message[0]]);
      });
  };

  return (
    <>
      {/* <BackGroundDecor /> */}

      <BreadCrumbs
        pages={[
          {
            route: "/catalog",
            page: "Каталог",
          },
          {
            page: "Демонстраційна модель «Мозок. Анатомія людини» Learning resources",
          },
        ]}
      />

      {!!Object.keys(dataCard).length && (
        <section className="product container">
          <ProductSwiper dataCard={dataCard?.files} />

          <div className="product__col">
            <h2 className="product__title title">{dataCard?.name}</h2>
            <span className="product__article-number">{dataCard?.article}</span>
            {/* <span className="product__article-number">
              Осталось на складе: {dataCard?.amount_in_store}
            </span> */}
            <span className="product__status in-stock">В наличии</span>
            <div className="product__info">
              <div className="product__info_col">
                <div className="product__price">
                  <ins>
                    {(dataCard?.price ?? dataCard?.original_price) *
                      productCount}{" "}
                    ₴
                  </ins>
                  {dataCard?.price && (
                    <del>{dataCard?.original_price * productCount} ₴</del>
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
                  onClick={handleAddCart}
                  className="product__add-to-cart button"
                  type="button"
                  aria-label="Додати до кошика"
                >
                  <svg width="20" height="20" viewBox="0 0 48 48">
                    <use xlinkHref="#cart"></use>
                  </svg>
                  <span>Додати до кошика</span>
                </button>
              </div>
            </div>
            <div className="product__info product__info_border">
              <div className="product__info_col">
                <table className="product__characteristics">
                  <caption>Характеристики</caption>
                  <tbody>
                    {dataCard?.condition && (
                      <tr>
                        <td>Стан</td>
                        <td>{dataCard?.condition}</td>
                      </tr>
                    )}
                    {dataCard?.producer && (
                      <tr>
                        <td>Виробник</td>
                        <td>{dataCard?.producer}</td>
                      </tr>
                    )}
                    {dataCard?.weight && (
                      <tr>
                        <td>Вага</td>
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
                    <span>Безнал</span>
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
                    <span>Наложенный платёж</span>
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
                    <span>По договору поставки</span>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <div className="product__description">
                <h3>Опис</h3>
                {HTMLReactParser(dataCard?.description ?? "")}
              </div>
            </div>
          </div>

          <div className="product__col">
            {dataCard?.precepts && (
              <ul className="product__orders">
                {dataCard?.precepts?.map((precept) => (
                  <li key={precept.id}>
                    <h3>Відповідає Наказу </h3>
                    <strong>{precept.number}</strong>
                    <p>{precept.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
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
            <h2 className="recommended__title title">Рекомендованные</h2>

            <ProductsList
              isLoading={isLoading}
              list={dataCard?.recommended_products}
              ClassNameList={"recommended__list"}
            />
          </div>
        </section>
      )}
    </>
  );
};
