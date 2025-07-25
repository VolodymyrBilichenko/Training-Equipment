import React, { useState } from "react";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink";
import { GetApiHeaders } from "../../functions/getApiHeaders";
import getCookies from "../../functions/getCookies";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const ResetPassPopUp = ({ handleClosePopUp }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [isSuccessSent, setIsSuccessSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendToReset = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
      "cookieToken"
    )}`;
    axios
      .post(
        getApiLink("/api/auth/password-reset"),
        { email },
        { headers: GetApiHeaders() }
      )
      .then(({ data }) => {
        if (data.data === "success") setIsSuccessSent(true);
      })
      .catch((er) => toast.error("Возникла неизведанная ошибка"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="popup-wrapper">
      <div onClick={handleClosePopUp} className="popup-bg popup-close"></div>
      <div className="popup-body">
        <button
          onClick={handleClosePopUp}
          type="button"
          className="popup-close-btn popup-close"
          title="Закрити"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="#close-3"></use>
          </svg>
        </button>
        <div className="popup-container">
          <h2 className="popup-title title">
            {t('recovery_password')}
          </h2>
          {!isSuccessSent && <div className="popup-text">
            <p>
              {t('recovery_description')}
            </p>
          </div>}
          {!isSuccessSent ? (
            <form
              onSubmit={handleSendToReset}
              method="post"
              className="popup-form"
            >
              <label className="popup-form__item">
                <span className="is-required">E-mail</span>
                <span className="input-label">
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    placeholder={t('enter_your_email')}
                    className="input"
                  />
                </span>
              </label>
              <button
                disabled={isLoading}
                className="popup-form__submit button is-mode-1"
                type="submit"
              >
                {t('continue')}
              </button>
            </form>
          ) : (
            <div className="popup-text">
              <p>
                {t('recovery_success')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
