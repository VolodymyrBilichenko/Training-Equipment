import React, { useContext, useEffect, useState } from "react";
import { PopupContext } from "../../App";
import { getApiLink } from "../../api/getApiLink";
import axios from "axios";
import setCookie from "../../functions/setCookie";
import { setUser } from "../../redux/toolkitSlice";
import { useDispatch } from "react-redux";
import { errorTypes } from "../../constants.js";
import { useTranslation } from "react-i18next";

export const LoginPopUp = ({ handleClosePopUp }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    axios
      .post(getApiLink("/api/auth/login"), {
        email,
        password,
      })
      .then((res) => {

        if (res.status === 200) {
          setEmail("");
          setPassword("");
          dispatch(setUser(res.data.data));
        }

        setCookie("cookieToken", res.data.data.token);
        handleClosePopUp();
      })
      .catch((error) => {
        setErrorMessage(
          error?.response?.data?.message ?? error?.response?.data?.error ?? ""
        );
      });
  };

  const SetPopContext = useContext(PopupContext);

  return (
    <div className="popup-wrapper">

      <div className="popup-bg popup-close" onClick={handleClosePopUp}></div>
      <div className="popup-body">
        <button
          type="button"
          onClick={handleClosePopUp}
          className="popup-close-btn popup-close"
          title={t('close')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="#close-3"></use>
          </svg>
        </button>
        <div className="popup-container">
          <h2 className="popup-title title">
            {t('login')}
          </h2>
          <form onSubmit={handleLogin} method="post" className="popup-form">
            <label className="popup-form__item">
              <span className="is-required">E-mail</span>
              <span className="input-label">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t('enter_your_email')}
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
            </label>
            <div className="popup-form__item">
              <span className="is-required">
                {t('password')}
              </span>
              <span className="input-label">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  required
                  placeholder={t('enter_password')}
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className={
                    showPass
                      ? "password-toggle password-toggle_active"
                      : "password-toggle"
                  }
                  onClick={handleShowPass}
                  type="button"
                  title={t('show_hide_password')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#visibility"></use>
                  </svg>
                </button>
              </span>
            </div>
            <p className="error-message">
              {errorMessage && t(errorTypes[errorMessage])}
            </p>
            <div className="popup-form__text">
              <p>
                <button
                  onClick={(_) => SetPopContext("resetPass")}
                  type={"button"}
                  className="open-popup popup-close"
                >
                  {t("forgot_password")}
                </button>
                <br />
                <br />
                <button
                  onClick={(_) => SetPopContext("register")}
                  type={"button"}
                  className="open-popup popup-close"
                >
                  {t("register")}
                </button>
              </p>
            </div>
            <div
              className="g-recaptcha"
              data-sitekey="6Lc7nvgpAAAAAAJsyvTKiul7qu9eq3pKQ9RAdNW9"
            ></div>
            <button
              className="popup-form__submit button is-mode-1"
              type="submit"
            >
              {t('enter')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
