import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const ProfileBonuses = () => {
  const { t } = useTranslation();

  const user = useSelector((state) => state.toolkit.user);

  return (
    <div className="account__bonuses">
      <h3 className="account__bonuses_title min-title">
        {t("bonuses_and_sales")}
      </h3>
      <ul className="account__bonuses_list">
        {!!user?.discount?.percent && (
          <li>
            <strong>{user.discount.percent} %</strong>
            <b>{t("active_discount")}</b>
          </li>
        )}
        {!!user?.discount?.bonuses_sum && (
          <li>
            <strong>{user?.discount?.bonuses_sum} ₴</strong>
            <b>{t("account_bonuses")}</b>
          </li>
        )}
      </ul>
    </div>
  );
};
