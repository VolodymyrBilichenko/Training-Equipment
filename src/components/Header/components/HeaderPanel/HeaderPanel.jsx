import React, { useEffect, useState } from "react";
import { HeaderPanelPhone } from "./components/HeaderPanelPhone/HeaderPanelPhone";
import { HeaderPanelLanguage } from "./components/HeaderPanelLanguage/HeaderPanelLanguage";
import axios from "axios";
import { getApiLink } from "../../../../api/getApiLink";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getLocalizedText } from "../../../../utils/getLocalizedText";

export const HeaderPanel = () => {
  const { t, i18n } = useTranslation();

  const [textAddress, setTextAddress] = useState("");
  const [textHours, setTextHours] = useState("");

  const staticData = useSelector((state) => state.toolkit.staticData);
  useEffect(() => {
    if (!staticData) return;

    setTextAddress(getLocalizedText(staticData, i18n.language, "address"));
    setTextHours(getLocalizedText(staticData, i18n.language, "working_hours"));
  }, [i18n.language, staticData]);

  return (
    <div className="header__panel visible-on-desktop container is-large">
      <HeaderPanelPhone />

      <div className="header__info is-fill-auto">
        <svg width="20" height="20" viewBox="0 0 48 48">
          <use xlinkHref="#verifed"></use>
        </svg>
        <b>{t("member_prozoro")}</b>
      </div>

      <HeaderPanelLanguage />

      <div className="header__info">
        <svg width="20" height="20" viewBox="0 0 48 48">
          <use xlinkHref="#map-point"></use>
        </svg>
        <b>{textAddress ?? ""}</b>
      </div>
      <div className="header__info">
        <svg width="20" height="20" viewBox="0 0 48 48">
          <use xlinkHref="#time"></use>
        </svg>
        <b>{textHours ?? ""}</b>
      </div>
    </div>
  );
};
