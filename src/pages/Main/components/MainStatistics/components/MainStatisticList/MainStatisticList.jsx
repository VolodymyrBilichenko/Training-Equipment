import { useTranslation } from "react-i18next";

export const MainStatisticList = () => {
  const { t } = useTranslation();
  return (
    <ul className="statistics__list">
      <li>
        <p>
          <strong>1200+</strong>
          <span>80+ млн.</span>
        </p>
      </li>
      <li>
        <p>
          <strong>80+ млн.</strong>
          <span>{t('info_1')}</span>
        </p>
      </li>
      <li>
        <p>
          <strong>400+</strong>
          <span>{t('info_2')}</span>
        </p>
      </li>
      <li>
        <p>
          <strong>1200+</strong>
          <span>{t('info_3')}</span>
        </p>
      </li>
      <li>
        <p>
          <strong>80+ млн.</strong>
          <span>{t('info_1')}</span>
        </p>
      </li>
    </ul>
  );
};
