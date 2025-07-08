import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import photoPlaceholder from "./../../assets/img/null-card-image.png";
import { getLocalizedText } from "../../utils/getLocalizedText";
import { useTranslation } from "react-i18next";

export const CategoriesList = ({ ClassNameList }) => {
  const { t, i18n } = useTranslation();

  const allCategories = useSelector((state) => state.toolkit.allCategories);

  return (
    <ul className={`categories__list ${ClassNameList}`}>
      {allCategories?.map((category) => {
        return (
          <li key={category.id}>
            <NavLink to={`/catalog/${category.id}`}>
              <img
                src={category?.icon_link ?? photoPlaceholder}
                width="52"
                height="52"
                loading="lazy"
                alt={category["name_" + i18n.language] ?? category.name}
              />
              <h3>{category["name_" + i18n.language] ?? category.name}</h3>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
