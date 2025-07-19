import React from "react";
import { useTranslation } from "react-i18next";

export const FooterContacts = ({ emailsText, addressText }) => {
  const { t } = useTranslation();
  
  return (
    <div className="footer__contacts">
      <h2>{t("contacts_title")}</h2>

      <ul>
        {emailsText?.length && emailsText?.map((item, index) => (
          <li key={index}>
            <a href={`mailto:${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <ul>
        <li className="footer__contacts_margin">
          <a target="_blank" href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B1%D1%96%D0%BB%D0%BE%D1%83%D1%81%D1%8C%D0%BA%D0%B0,+63,+%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B3%D1%96%D0%B2,+%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B3%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+14000/data=!4m2!3m1!1s0x46d5489936c33a4f:0xfb3988d7ec50fef8?sa=X&ved=1t:242&ictx=111">
            {addressText}
          </a>
        </li>
      </ul>
    </div>
  );
};
