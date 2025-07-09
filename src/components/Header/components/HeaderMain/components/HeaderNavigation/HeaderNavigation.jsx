import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { GetApiHeaders } from "../../../../../../functions/getApiHeaders";
import axios from "axios";
import { getApiLink } from "../../../../../../api/getApiLink";
import { toast } from "react-toastify";
import { getLocalizedText } from "../../../../../../utils/getLocalizedText";
import { useSelector } from "react-redux";

export const HeaderNavigation = ({ isOpen }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [textPhones, setTextPhones] = useState([]);
  const [textAddress, setTextAddress] = useState("");
  const [textHours, setTextHours] = useState("");
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);

  const staticData = useSelector((state) => state.toolkit.staticData);
  useEffect(() => {
    if (!staticData) return;

    const phones = [];
    for (let i = 1; i <= 3; i++) {
      const phone = getLocalizedText(
        staticData,
        i18n.language,
        "phone_number_" + i
      );

      phones.push(phone);
    }

    setTextPhones(phones);
    setTextAddress(getLocalizedText(staticData, i18n.language, "address"));
    setTextHours(getLocalizedText(staticData, i18n.language, "working_hours"));
  }, [i18n.language, staticData]);

  const handleOpenLanguage = () => {
    setIsOpenLanguage(!isOpenLanguage);
  };

  return (
    <nav className={"header__nav " + (isOpen ? "is-mobile-menu-active" : "")}>
      <div className="header__nav--body">
        <ul className="header__nav--list">
          <li>
            <NavLink className={({isActive}) => isActive ? "is-active" : ""} to={"/about"}>{t("menu_point_1")}</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "is-active" : ""} to={"/catalog"}>{t("menu_point_2")}</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "is-active" : ""} to={"/pricelist"}>{t("menu_point_3")}</NavLink>
          </li>
          <li>
            <NavLink to={"/about/#consultation"}>{t("menu_point_4")}</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "is-active" : ""} to={"/certificate"}>{t("menu_point_5")}</NavLink>
          </li>
        </ul>
        <div className="header__add visible-on-mob">
          <ul className="header__tel">
            {textPhones?.map((item, index) => (
              <li key={index}>
                <a href={`tel:${item?.replace(/[^+\d]/g, "")}`}>
                  <svg width="20" height="20" viewBox="0 0 48 48">
                    <use xlinkHref="#tel"></use>
                  </svg>
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
          <div
            className={"header__drop-down " + (isOpenLanguage ? "is-active" : "")}
            onClick={handleOpenLanguage}
          >
            <button className="header__drop-down--target" type="button">
              <svg width="20" height="20" viewBox="0 0 48 48">
                <use xlinkHref="#language"></use>
              </svg>
              <span>{i18n.language}</span>
              <svg width="20" height="20" viewBox="0 0 48 48">
                <use xlinkHref="#drop-down-arrow"></use>
              </svg>
            </button>
            <div className={"header__drop-down--block "}>
              <ul className="header__drop-down--list">
                <li>
                  <button onClick={(_) => changeLanguage("ua")}>UA</button>
                </li>
                <li>
                  <button onClick={(_) => changeLanguage("ru")}>RU</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__info is-fill-auto">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <use xlinkHref="#verifed"></use>
            </svg>
            <b>{t("member_prozoro")}</b>
          </div>
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
      </div>
    </nav>
  );
};
