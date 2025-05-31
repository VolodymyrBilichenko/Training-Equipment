import React from "react";
import { useTranslation } from "react-i18next";

export const FooterTel = ({ socialData }) => {
  const socialNumbers = socialData.filter(
    (item) => item.key === "phone_number"
  );

  const { t } = useTranslation();

  return (
    <div className="footer__tel">
      <h2>{t('phones_title')}</h2>

      <ul>
        {socialNumbers.map((social) => (
          <li key={social.id}>
            <a href={`tel:${social.value.match(/[0-9+]/g).join('')}`}>{social.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
