import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle/SectionTitle";
import { CategoriesList } from "../../../../components/CategoriesList/CategoriesList";
import { useTranslation } from "react-i18next";

export const MainCategories = () => {
  const { t } = useTranslation();
  return (
    <section className="categories container">
      <SectionTitle title={t("complex_solutions")} />

      <CategoriesList />
    </section>
  );
};
