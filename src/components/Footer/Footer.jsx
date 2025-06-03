import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FooterTel } from "./components/FooterTel/FooterTel";
import { FooterContacts } from "./components/FooterContacts/FooterContacts";
import { FooterSocial } from "./components/FooterSocial/FooterSocial";
import Logotype from "../../assets/img/logo.png";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink";
import { GetApiHeaders } from "../../functions/getApiHeaders";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setStaticData } from "../../redux/toolkitSlice";
import { getLocalizedText } from "../../utils/getLocalizedText";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const [socialData, setSocialData] = useState([]);

  const [addressText, setAddressText] = useState("");
  const [emailsText, setEmailsText] = useState("");
  const [footerText, setFooterText] = useState("");

  const dispatch = useDispatch();

  const staticData = useSelector((state) => state.toolkit.staticData);

  useEffect(() => {
    axios
      .get(getApiLink("/api/static/data"), { headers: GetApiHeaders() })
      .then(({ data }) => {
        setSocialData(data.data);
        dispatch(setStaticData(data.data));
      })
      .catch(() => {
        toast.error("Возникла неизведанная ошибка");
      });
  }, []);

  useEffect(() => {
    if (!staticData) return;

    const emails = [];
    for (let i = 1; i <= 2; i++) {
      const phone = getLocalizedText(staticData, i18n.language, "email_" + i);

      emails.push(phone);
    }

    setEmailsText(emails);

    setAddressText(getLocalizedText(staticData, i18n.language, "address"));
    setFooterText(getLocalizedText(staticData, i18n.language, "footer"));
  }, [i18n.language, staticData]);

  return (
    <footer className="footer container">
      <div className="footer__logo">
        <NavLink to="/" className="footer__logo--link">
          <picture>
            <img
              src={Logotype}
              alt="logotype"
              width="269"
              height="54"
              loading="lazy"
              className="footer__logo--img"
            />
          </picture>
        </NavLink>
      </div>

      <div className="footer__text">{footerText}</div>

      <FooterTel />
      <FooterContacts emailsText={emailsText} addressText={addressText} />
      <FooterSocial socialData={socialData} />

      <div className="footer__copyright">{t("copyright")}</div>
    </footer>
  );
};
