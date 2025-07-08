import React, { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { CatalogCategory } from "./CatalogCategory";

export const CatalogCategories = () => {
  const allCategories = useSelector((state) => state.toolkit.allCategories);
  const location = useLocation();

  const { t } = useTranslation();

  return (
    <ul className="catalog__categories_list">
      <li>
        <NavLink
          to={`/catalog`}
          className={
            !location.pathname.includes("/catalog/") ? "is-current" : ""
          }
        >
          <span>{t("all_products")}</span>
        </NavLink>
      </li>

      {allCategories?.map((cat) => (
        <CatalogCategory key={cat.id} category={cat} />
      ))}
    </ul>
  );
};
