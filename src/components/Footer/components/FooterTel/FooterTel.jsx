import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getLocalizedText } from "../../../../utils/getLocalizedText";

export const FooterTel = ({ socialData }) => {
  const { t, i18n } = useTranslation();

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
    <div className="footer__tel">
      <h2>{t("phones_title")}</h2>

      <ul>
        {textPhones.map((item) => (
          <li key={item}>
            <a href={`tel:${item?.replace(/[^+\d]/g, "")}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
