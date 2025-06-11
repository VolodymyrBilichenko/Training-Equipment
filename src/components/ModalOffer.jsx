import React, { useContext, useEffect } from "react";
import { PopupContext } from "../App";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import { getApiLink } from "../api/getApiLink";
import { useTranslation } from "react-i18next";

export const ModalOffer = ({ handleClosePopUp }) => {
  const SetPopContext = useContext(PopupContext);

  const location = useLocation();

  useEffect(() => {
    // Используем URLSearchParams для разбора строки запроса
    const params = new URLSearchParams(location.search);

    // Преобразуем в объект
    const queryObject = {};
    for (const [key, value] of params.entries()) {
      queryObject[key] = value;
    }

    axios
      .get(
        getApiLink(
          `/verify-email/?email=${queryObject?.email}&code=${queryObject?.code}`
        )
      )
      .then((res) => {
        window.history.pushState(null, "", window.location.origin);
      })
      .catch((err) => {
        window.history.pushState(null, "", window.location.origin);
      });
  }, []);

  const { t } = useTranslation();

  return (
    <div className="popup-wrapper">
      <div className="popup-bg popup-close" onClick={handleClosePopUp}></div>
      <div className="popup-body">
        <button
          type="button"
          onClick={handleClosePopUp}
          className="popup-close-btn popup-close"
          title="Закрити"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="#close-3"></use>
          </svg>
        </button>
        <div className="popup-container">
          {/* <h2 className="popup-title title">
            Хотите получить техническое задание по данной позиции либо
            консультацию по подготовке к тендеру?
          </h2> */}
          <div className="popup-text">
            <p>
            Хотите получить техническое задание по данной позиции либо
            консультацию по подготовке к тендеру?
            </p>
          </div>
          <br />
          <NavLink
            to={'/about/#consultation'}
            onClick={handleClosePopUp}
            style={{ display: "block", margin: "0 auto" }}
            className="popup-form__submit button is-mode-1"
          >
            {t('menu_point_4')}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
