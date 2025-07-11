import React, { useEffect, useState } from "react";
import { BackGroundDecor } from "../../components/BackGroundDecor/BackGroundDecor";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink";
import { GetApiHeaders } from "../../functions/getApiHeaders";
import { useTranslation } from "react-i18next";

export const PriceList = () => {
  const { t, i18n } = useTranslation();

  const [priceData, setPriceData] = useState([]);
  const [fullPrice, setFullPrice] = useState({});

  useEffect(() => {
    axios
      .get(getApiLink("/api/price-list/get"), { headers: GetApiHeaders() })
      .then(({ data }) => {
        setPriceData(data.data);
        
        for(let i = 0; i < data.data.length; i++) {
          if(data.data[i].id === 6) {
            setFullPrice(data.data[i]);
            break;
          }
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {/* <BackGroundDecor/> */}

      <BreadCrumbs pages={[{ page: t("price_list_title") }]} />

      <section className="pricelist container">
        <SectionTitle
          title={t("price_list_title")}
          ClassTitle={"pricelist__title"}
        />

        {fullPrice?.file?.web_path && <a
          href={fullPrice?.file?.web_path}
          className="pricelist__item"
        >
          <span>{t('download_full_title')}</span>
          <i>
            <svg width="26" height="26" viewBox="0 0 26 26">
              <use xlinkHref="#download"></use>
            </svg>
          </i>
        </a>}
        {!!priceData.length && (
          <div className="pricelist__block">
            <h3 className="pricelist__block_title title">
              {t('category_prices')}
            </h3>

            <ul className="pricelist__list">
              {priceData
                .filter((item) => item.category !== null)
                ?.map((item) => (
                  <li key={item.id}>
                    <a href={item.file.web_path} target="_blank" download className="pricelist__item">
                      <span>{item[`name_${i18n.language}`] ?? item.name ?? ""}</span>
                      <i>
                        <svg width="26" height="26" viewBox="0 0 26 26">
                          <use xlinkHref="#download"></use>
                        </svg>
                      </i>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};
