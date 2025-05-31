import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle/SectionTitle";
import { MainProductsList } from "./components/MainProductsList/MainProductsList";
import { useTranslation } from "react-i18next";

export const MainProducts = () => {
  const { t } = useTranslation();
  return (
    <section className="products container">
      <SectionTitle title={t("new_education_solution")} />

      <MainProductsList />
    </section>
  );
};
