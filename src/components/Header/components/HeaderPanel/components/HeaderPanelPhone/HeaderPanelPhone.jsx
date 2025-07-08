import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLocalizedText } from "../../../../../../utils/getLocalizedText";
import { useTranslation } from "react-i18next";

export const HeaderPanelPhone = () => {
  const { i18n } = useTranslation();

  const staticData = useSelector((state) => state.toolkit.staticData);

  const [textPhones, setTextPhones] = useState([]);

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
  }, [i18n.language, staticData]);

  return (
    <ul className="header__tel">
      {textPhones.map((item, index) => (
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
  );
};
