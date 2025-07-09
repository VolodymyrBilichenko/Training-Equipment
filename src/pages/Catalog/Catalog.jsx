import React, { useContext, useEffect, useState } from "react";
import { BackGroundDecor } from "../../components/BackGroundDecor/BackGroundDecor";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CatalogCategories } from "./components/CatalogCategories";
import { GetApiHeaders } from "../../functions/getApiHeaders";
import { PaginationProducts } from "../../components/PaginationProducts/PaginationProducts";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import getCookies from "../../functions/getCookies";
import setCookie from "../../functions/setCookie";
import { PopupContext } from "../../App";
import { useTranslation } from "react-i18next";

export const Catalog = () => {
  const { category_id, subcategory_id, search } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const allCategories = useSelector((state) => state.toolkit.allCategories);
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [metaProduct, setMetaProduct] = useState({});
  const [searchQuery, setSearchQuery] = useState(search);
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!searchQuery) return;

    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery.length === 0) {
      toast.error("Пошуковий запит не може бути порожнім");
      return;
    }

    const forbiddenChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (forbiddenChars.test(searchQuery)) {
      toast.error("Пошуковий запит містить неприпустимі символи");
      return;
    }

    navigate(`/search/${searchQuery}`);
  };

  const [isLoading, setIsLoading] = useState(true);
  const handlePage = (paginationItem) => {

    const utmParams = {};
    if (paginationItem.url) {
      const urlObj = new URL(paginationItem.url);
      const params = new URLSearchParams(urlObj.search);
      // Получить все utm-метки
      for (const [key, value] of params.entries()) {
        utmParams[key] = value;
      }
    }
    
    navigate(`${location.pathname}?${new URLSearchParams(utmParams).toString()}`);

    setIsLoading(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setIsLoading(true);

    let category = "";

    if (!!subcategory_id) {
      category = `&category_id=${subcategory_id}`;
    } else if (!!category_id) {
      category = `&category_id=${category_id}`;
    } else {
      category = "";
    }

    const params = new URLSearchParams(location.search);
    const page = params.get("page");

    axios
      .get(getApiLink(`/api/products/get?active=1&page=${page ?? 1}` + category), {
        headers: GetApiHeaders(),
      })
      .then(({ data }) => {
        setIsLoading(false);
        setProducts(data.data);
        setMetaProduct(data);
      })
      .catch((error) => {
        toast.error(error);
        setIsLoading(false);
      });
  }, [category_id, subcategory_id, location.search]);

  const categoryName = category_id
    ? {
        page: allCategories?.find((item) => +item.id === +category_id)?.name,
      }
    : null;

  const SetPopContext = useContext(PopupContext);

  const seconds = 10;

  useEffect(() => {
    if (getCookies("isShown") === "true") return;

    const timer = setTimeout(() => {
      setCookie("isShown", true, 3600);
      SetPopContext("offer"); // показать модалку
    }, seconds * 1000);

    return () => {
      clearTimeout(timer); // отменяем, если пользователь ушёл со страницы
    };
  }, []);

  return (
    <>
      <BreadCrumbs pages={[{ page: t("menu_point_2") }, categoryName]} />

      <section className="catalog container">
        <div className="catalog__decor" aria-hidden="true">
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

        <SectionTitle title={t("menu_point_2")} ClassTitle={"catalog__title"} />

        <div className="catalog__aside" data-sticky-container>
          <div className="catalog__categories sticky" data-margin-top="30">
            <button
              className="catalog__categories_target button visible-on-mob"
              type="button"
              onClick={() => setIsOpenCategories(!isOpenCategories)}
            >
              {t("categories_title")}
            </button>
            <div className={"catalog__categories_block " + (isOpenCategories ? "is-active" : "")}>
                <CatalogCategories />
            </div>
          </div>
        </div>
        <div className="catalog__main">
          <search className="catalog__search" role="search">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
                name="search"
                placeholder={t("catalog_search")}
                required
              />
              <button type="submit" title="Поиск">
                <svg width="26" height="26" viewBox="0 0 48 48">
                  <use xlinkHref="#search"></use>
                </svg>
              </button>
            </form>
          </search>

          <ProductsList
            list={products}
            ClassNameList={"catalog__list"}
            isLoading={isLoading}
          />

          <PaginationProducts meta={metaProduct.meta} handlePage={handlePage} />
        </div>
      </section>
    </>
  );
};
