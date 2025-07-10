import { useState } from "react";
import { useTranslation } from "react-i18next";

export const PasswordField = ({ name, placeholder, label, value, onChange }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <label className="popup-form__item">
      <span className="is-required">{t(label)}</span>
      <span className="input-label">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          required
          placeholder={placeholder}
          className="input"
          value={value}
          onChange={onChange}
        />
        <button
          className="password-toggle"
          type="button"
          title={t("show_hide_password")}
          onClick={handleShowPassword}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="#visibility"></use>
          </svg>
        </button>
      </span>
    </label>    
  );
};
