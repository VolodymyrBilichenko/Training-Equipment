import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const CatalogCategories = () => {
  const allCategories = useSelector((state) => state.toolkit.allCategories);
  const location = useLocation()

  return (
    <ul className="catalog__categories_list">
      <li>
        <NavLink
          to={`/catalog`}
          className={!location.pathname.includes('/catalog/') ? "is-current" : ""}
        >
          <span>Все продукты</span>
          <i>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <use xlinkHref="#arrow-next"></use>
            </svg>
          </i>
        </NavLink>
      </li>

      {allCategories.map((cat) => (
        <li key={cat.id}>
          <NavLink
            to={`/catalog/${cat.id}`}
            className={({ isActive }) => (isActive ? "is-current" : "")}
          >
            <span>{cat.name}</span>
            <i>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <use xlinkHref="#arrow-next"></use>
              </svg>
            </i>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
