import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { PasswordField } from "./PasswordField";
import { PopupContext } from "../../App";
import { toast } from "react-toastify";
import { errorTypes } from "../../constants";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink";
import getCookies from "../../functions/getCookies";

export const ChangePassPopUp = ({ handleClosePopUp }) => {
  const { t, i18n } = useTranslation();
  const setModal = useContext(PopupContext);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (newPassword !== repeatNewPassword) {
      setErrorMessage(t("passwords_do_not_match"));
      return;
    }

    if (newPassword.length < 8 || newPassword.length > 32) {
      setErrorMessage(t("invalid_password"));
      return;
    }

    setErrorMessage("");

    axios
      .post(
        getApiLink("/api/user/password-change"),
        {
          current_password: currentPassword,
          new_password: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookies("cookieToken")}`,
            "Accept-Language": i18n.language || "en", // или указать вручную "ru" / "en"
          },
        }
      )
      .then((res) => {
        toast.success(t("password_changed"));
        handleClosePopUp();
      })
      .catch((err) => {
        setErrorMessage(
          t(errorTypes["change_password_" + err.response.data.error])
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-bg popup-close" onClick={handleClosePopUp}></div>
      <div className="popup-body">
        <button
          type="button"
          className="popup-close-btn popup-close"
          title="Закрити"
          onClick={handleClosePopUp}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="#close-3"></use>
          </svg>
        </button>
        <div className="popup-container">
          <h2 className="popup-title title">{t("changing_password")}</h2>
          <form
            onSubmit={handleChangePassword}
            method="post"
            className="popup-form"
          >
            <PasswordField
              name="current-password"
              placeholder={t("enter_password")}
              label={t("current_password")}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <div className="popup-form__text">
              <p>
                <button
                  type="button"
                  className="open-popup popup-close"
                  onClick={() => setModal("resetPass")}
                >
                  {t("forgot_password")}
                </button>
              </p>
            </div>
            <PasswordField
              name="new-password"
              placeholder={t("enter_new_password")}
              label={t("new_password")}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <PasswordField
              name="new-password-2"
              placeholder={t("enter_new_password_again")}
              label={t("repeat_new_password")}
              value={repeatNewPassword}
              onChange={(e) => setRepeatNewPassword(e.target.value)}
            />

            <p className="error-message">{errorMessage}</p>
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
  );
};
