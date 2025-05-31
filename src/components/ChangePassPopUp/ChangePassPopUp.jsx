import React from "react";
import { useTranslation } from "react-i18next";

export const ChangePassPopUp = () => {
  const { t } = useTranslation();
  return (
    <div
      className="popup"
      id="change-password-popup"
      style={{ display: "none" }}
    >
      <div className="popup-wrapper">
        <div className="popup-bg popup-close"></div>
        <div className="popup-body">
          <button
            type="button"
            className="popup-close-btn popup-close"
            title="Закрити"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use xlinkHref="#close-3"></use>
            </svg>
          </button>
          <div className="popup-container">
            <h2 className="popup-title title">{t("changing_password")}</h2>
            <form method="post" className="popup-form">
              <label className="popup-form__item">
                <span className="is-required">{t("current_password")}</span>
                <span className="input-label">
                  <input
                    type="password"
                    name="current-password"
                    required
                    placeholder={t('enter_password')}
                    className="input"
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    title={t('show_hide_password')}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#visibility"></use>
                    </svg>
                  </button>
                </span>
              </label>
              <div className="popup-form__text">
                <p>
                  <a
                    href="#reset-password-popup"
                    className="open-popup popup-close"
                  >
                    {t("forgot_password")}
                  </a>
                </p>
              </div>
              <label className="popup-form__item">
                <span className="is-required">{t("new_password")}</span>
                <span className="input-label">
                  <input
                    type="password"
                    name="new-password"
                    required
                    placeholder={t('enter_new_password')}
                    className="input"
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    title={t('show_hide_password')}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#visibility"></use>
                    </svg>
                  </button>
                </span>
              </label>
              <label className="popup-form__item">
                <span className="is-required">{t("repeat_new_password")}</span>
                <span className="input-label">
                  <input
                    type="password"
                    name="new-password-2"
                    required
                    placeholder={t('enter_new_password_again')}
                    className="input"
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    title={t('show_hide_password')}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#visibility"></use>
                    </svg>
                  </button>
                </span>
              </label>
              <button
                className="popup-form__submit button is-mode-1"
                type="submit"
              >
                {t("save")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
