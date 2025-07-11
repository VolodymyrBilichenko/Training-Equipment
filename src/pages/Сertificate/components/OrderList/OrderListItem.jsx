import React from "react";
import { useTranslation } from "react-i18next";

export const OrderListItem = ({ precept }) => {
  const { t } = useTranslation();
  
  return (
    <li className="orders__card">
      <a
        href={`${precept.link}`}
        className="orders__card_body"
        target="_blank"
        rel="noreferrer"
      >
        <div className="orders__card_number">
          <strong>{precept.number}</strong>
          <span>{t("order#")}</span>
        </div>
        <div className="orders__card_text">
          <p>{precept.description}</p>
        </div>
        <i className="orders__card_link_icon" title="Детальніше">
          <svg width="44" height="44" viewBox="0 0 44 44">
            <use xlinkHref="#link-arrow"></use>
          </svg>
        </i>
      </a>
    </li>
  );
};
