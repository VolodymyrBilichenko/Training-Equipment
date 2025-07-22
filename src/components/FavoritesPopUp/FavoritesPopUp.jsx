import React, { useState } from "react";
import { getApiLink } from "../../api/getApiLink";
import { GetApiHeaders } from "../../functions/getApiHeaders";
import axios from "axios";
import { useSelector } from "react-redux";
import getCookies from "../../functions/getCookies";
import { useTranslation } from "react-i18next";

export const FavoritesPopUp = ({ handleClosePopUp }) => {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const dataFavorites = useSelector((state) => state.toolkit.favorites);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newDataArr = dataFavorites.map((item) => {
      return {
        product_id: item.id,
      };
    });

    const dataToSend = {
      products: newDataArr,
      email: email,
    };

    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;
    axios
      .post(getApiLink("/api/send-commercial-offer"), dataToSend, {
        headers: {
          Authorization: `Bearer ${getCookies("cookieToken")}`,
          "Accept-Language": i18n.language || "en", // или указать вручную "ru" / "en"
        },
      })
      .then(({ data }) => {
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-bg popup-close" onClick={handleClosePopUp}></div>
      <div className="popup-body">
        <button
          type="button"
          className="popup-close-btn popup-close"
          onClick={handleClosePopUp}
          title="Закрити"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="#close-3"></use>
          </svg>
        </button>
        <div className="popup-container">
          <h2 className="popup-title title">{t("favorites_products")}</h2>
          {!isSuccess ? (
            <form
              method="post"
              className="popup-form"
              onSubmit={handleFormSubmit}
            >
              <label className="popup-form__item">
                <span className="is-required">E-mail</span>
                <span className="input-label">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={t('enter_your_email')}
                    className="input"
                  />
                </span>
              </label>
              <button
                className="popup-form__submit button is-mode-1"
                type="submit"
              >
                {t("send_title")}
              </button>
            </form>
          ) : (
            <p style={{ marginTop: "20px" }}>
              {t('com_suggest')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
