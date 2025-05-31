import React from "react";

import BgdDecor from "../../../../assets/img/index/hero/background-decor.png";
import UaMinLogo from "../../../../assets/img/ua-min-logo.svg";
import { MainHeroSearch } from "./components/MainHeroSearch";
import { useTranslation } from "react-i18next";

export const MainHero = () => {
  const { t } = useTranslation();
  return (
    <section className="index-hero container">
      <div className="index-hero__background" aria-hidden="true">
        <div className="index-hero__background--image">
          {BgdDecor && (
            <img
              src={BgdDecor}
              alt="bgd decor"
              width="0"
              height="0"
              loading="lazy"
            />
          )}
        </div>
        <div className="index-hero__background--item"></div>
        <div className="index-hero__background--item"></div>
        <div className="index-hero__background--item"></div>
        <div className="index-hero__background--item"></div>
        <div className="index-hero__background--item"></div>
      </div>

      <div className="index-hero__logo">
        <div className="index-hero__logo--image">
          <img
            src={UaMinLogo}
            width="177"
            height="140"
            loading="lazy"
            alt="UaMinLogo"
          />
        </div>
        <div className="index-hero__logo--text">{t("site_title")}</div>
      </div>

      <MainHeroSearch searchPlaceholder={t('catalog_search')} />
    </section>
  );
};
