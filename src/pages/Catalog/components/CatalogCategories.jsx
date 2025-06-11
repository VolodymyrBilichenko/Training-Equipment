import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const CatalogCategories = () => {
  const allCategories = useSelector((state) => state.toolkit.allCategories);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false)

  const {t, i18n} = useTranslation()

  return (
    <ul className="catalog__categories_list">
      <li>
        <NavLink
          to={`/catalog`}
          className={
            !location.pathname.includes("/catalog/") ? "is-current" : ""
          }
        >
          <span>
            {t('all_products')}
          </span>
        </NavLink>
      </li>

      {allCategories.map((cat) => (
        <li key={cat.id}>
          <div className="li__inner">
            <NavLink
              to={`/catalog/${cat.id}`}
              className={({ isActive }) => (isActive ? "is-current" : "")}
            >
              <span>{cat['name_'+i18n?.language] ?? cat.name}</span>
            </NavLink>
            {!!cat.subcategories.length && (
              <button className={isOpen ? "is-open" : ""} onClick={_ => setIsOpen(prev => !prev)}>
                <i>
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <use xlinkHref="#arrow-next"></use>
                  </svg>
                </i>
              </button>
            )}
          </div>

          <ul className={isOpen ? "is-open" : ""}>
            {cat.subcategories.map((item) => (
              <li>
                <NavLink
                  to={`/catalog/${cat.id}/${item.id}`}
                  className={({ isActive }) => (isActive ? "is-current" : "")}
                >
                  {item['name_'+i18n?.language] ?? item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
