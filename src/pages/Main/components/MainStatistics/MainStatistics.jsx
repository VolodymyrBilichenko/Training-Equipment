import React from "react";
import { MainStatisticList } from "./components/MainStatisticList/MainStatisticList";

import StatisticDecor from "../../../../assets/img/index/statistics/statistics-decor.png";
import { useTranslation } from "react-i18next";

export const MainStatistics = () => {
  const { t } = useTranslation();

  return (
    <section className="statistics container">
      <h2 className="visually-hidden">{t("statistics")}</h2>

      <div className="statistics__background" aria-hidden="true">
        <picture>
          <img
            src={StatisticDecor}
            alt="StatisticDecor"
            width="0"
            height="0"
            loading="lazy"
          />
        </picture>
      </div>

      <MainStatisticList />
    </section>
  );
};
