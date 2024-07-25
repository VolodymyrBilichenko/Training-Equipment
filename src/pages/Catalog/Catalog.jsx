import React, { useEffect, useState } from "react";
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

export const Catalog = () => {
  const { category_id, search } = useParams();
  const navigate = useNavigate();
  const location = useLocation()
  const allCategories = useSelector((state) => state.toolkit.allCategories);

  const [products, setProducts] = useState([]);
  const [metaProduct, setMetaProduct] = useState({});
  const [searchQuery, setSearchQuery] = useState(search);

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
  const handlePage = (pageLink) => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    axios
      .get(pageLink, { headers: GetApiHeaders() })
      .then(({ data }) => {
        setMetaProduct(data);
        setProducts(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        getApiLink(
          `/api/products/get?active=1${
            category_id ? `&category_id=${category_id}&page=1` : "&page=1"
          }`
        ),
        { headers: GetApiHeaders() }
      )
      .then(({ data }) => {
        setIsLoading(false);
        setProducts(data.data);
        setMetaProduct(data);
      })
      .catch((error) => {
        toast.error(error);
        setIsLoading(false);
      });
  }, [category_id]);

  const categoryName = category_id
    ? {
        page: allCategories.find((item) => +item.id === +category_id)?.name,
      }
    : null;

  return (
    <>
      {/* <BackGroundDecor/> */}

      <BreadCrumbs pages={[{ page: "каталог" }, categoryName]} />

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

        <SectionTitle title={"Каталог"} ClassTitle={"catalog__title"} />

        <div className="catalog__aside" data-sticky-container>
          <div className="catalog__categories sticky" data-margin-top="30">
            <button
              className="catalog__categories_target button visible-on-mob"
              type="button"
            >
              Категории
            </button>
            <div className="catalog__categories_block">
              <div>
                <CatalogCategories />
              </div>
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
                placeholder="Пошук по каталогу"
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
