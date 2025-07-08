import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";

export const CatalogCategory = ({ category }) => {
  const { i18n } = useTranslation();
  const { subcategory_id, category_id } = useParams();
  const [isOpen, setIsOpen] = useState(!!subcategory_id && category_id == category.id);
  
  return (
    <li key={category.id}>
      <div className="li__inner">
        <NavLink
          to={`/catalog/${category.id}`}
          className={({ isActive }) => (isActive ? "is-current" : "")}
        >
          <span>{category["name_" + i18n?.language] ?? category.name}</span>
        </NavLink>
        {!!category.subcategories?.length && (
          <button
            className={isOpen ? "is-open" : ""}
            onClick={(_) => setIsOpen((prev) => !prev)}
          >
            <i>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <use xlinkHref="#arrow-next"></use>
              </svg>
            </i>
          </button>
        )}
      </div>

      <ul className={isOpen ? "is-open" : ""}>
        {category?.subcategories?.map((item) => (
          <li key={item.id}>
            <NavLink
              to={`/catalog/${category.id}/${item.id}`}
              className={({ isActive }) => (isActive ? "is-current" : "")}
            >
              {item["name_" + i18n?.language] ?? item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};
