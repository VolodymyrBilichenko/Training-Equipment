import React, { useContext, useEffect, useState } from "react";
import { MainHero } from "./components/MainHero/MainHero";
import { MainCategories } from "./components/MainCategories/MainCategories";
import { MainStatistics } from "./components/MainStatistics/MainStatistics";
import { MainReviews } from "./components/MainReviews/MainReviews";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import { PopupContext } from "../../App";
import setCookie from "../../functions/setCookie";
import getCookies from "../../functions/getCookies";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export const Main = () => {
  const { t } = useTranslation();

  const allProducts = useSelector((state) => state.toolkit.allProducts);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [allProducts]);

  return (
    <main className="main">
      <Helmet>
        <title>
          {t("main_page")}
        </title>
        <meta name="description" content="Описание главной страницы" />
        <meta charSet="utf-8" />
      </Helmet>

      <MainHero />

      <MainCategories />

      <section className="products container">
        <SectionTitle title={t("new_education_solution")} />

        <ProductsList
          list={allProducts.slice(0, 8)}
          isLoading={isLoading}
          ClassNameList={"products__list"}
        />
      </section>

      <MainStatistics />

      <MainReviews />
    </main>
  );
};
