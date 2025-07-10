import React, { useContext, useEffect, useState } from "react";
import getCookies from "../../functions/getCookies";
import { useDispatch, useSelector } from "react-redux";
import { handleRegistration } from "../../api/registration";
import { Link, useNavigate } from "react-router-dom";
import { PopupContext } from "../../App";
import { toast } from "react-toastify";
import { useRegistration } from "../../hooks/registration";
import { errorTypes } from "../../constants";
import { Trans, useTranslation } from "react-i18next";
import InputMask from "react-input-mask";

export const RegisterPopUp = ({ handleClosePopUp }) => {
  const { t } = useTranslation();

  const SetPopContext = useContext(PopupContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [registerBody, setRegisterBody] = useState(false);

  const userInfo = useSelector((state) => state.toolkit.user);
  const isLogin = getCookies("token");
  const showWarningToast = isLogin && userInfo;

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  useEffect(() => {
    setRegisterBody({
      name: name,
      email: email,
      phone_number: phone,
      password: pass,
    });
  }, [name, email, phone, pass]);

  const { isSuccess, handleSubmit, errorMessage, isLoading } = useRegistration({
    body: registerBody,
  });

  useEffect(() => {
    if (!isSuccess) return;

    setName("");
    setEmail("");
    setPhone("");
    setPass("");
    SetPopContext("askConfirm");
  }, [isSuccess]);

  return (
    <div className="popup-wrapper">
      {showWarningToast && toast.warning("Ви вже в системі!")}
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
          <h2 className="popup-title title">{t("registration")}</h2>
          <div className="popup-text">
            <p>{t("registration_description")}</p>
          </div>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="popup-form popup-form-register"
          >
            <div className="form-fields">
              <label className="popup-form__item">
                <span className="is-required">{t("personal_fio")}</span>
                <span className="input-label">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    required
                    placeholder="Введите имя"
                    defaultValue="Игорь Иванович"
                    className="input"
                  />
                </span>
              </label>
              <label className="popup-form__item">
                <span className="is-required">E-mail</span>
                <span className="input-label">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    required
                    placeholder={t("enter_your_email")}
                    className="input"
                  />
                </span>
              </label>
              <label className="popup-form__item">
                <span className="is-required">{t("phone_title")}</span>
                <span className="input-label">
                  <InputMask
                    mask="+380 (99) 999 99 99"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("enter_phone")}
                    className="input"
                  ></InputMask>
                </span>
              </label>
              <label className="popup-form__item">
                <span className="is-required">{t("password")}</span>
                <span className="input-label">
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type={showPass ? "text" : "password"}
                    name="password"
                    required
                    placeholder={t("enter_password")}
                    className="input"
                  />
                  <button
                    className={
                      showPass
                        ? "password-toggle password-toggle_active"
                        : "password-toggle"
                    }
                    onClick={handleShowPass}
                    type="button"
                    title={t("show_hide_password")}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#visibility"></use>
                    </svg>
                  </button>
                </span>
              </label>
            </div>

            <p className="error-message">
              {errorMessage && t(errorTypes[errorMessage])}
            </p>
            <div className="popup-form__text">
              <p>
                <Trans
                  i18nKey="registration_privacy"
                  components={{
                    privacy: <Link to="/docs/personal" />,
                  }}
                />
              </p>
            </div>
            <button
              disabled={isLoading}
              className="popup-form__submit button is-mode-1"
              type="submit"
            >
              {t("register")}
            </button>
            <div className="popup-form__text">
              <p>
                <button
                  onClick={(_) => SetPopContext("login")}
                  type={"button"}
                  className="open-popup popup-close"
                >
                  {t("enter")}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
