import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const MainStatisticList = () => {
  const { t, i18n } = useTranslation();
  const staticData = useSelector((state) => state.toolkit.staticData);

  const statistics = Array.isArray(staticData)
    ? staticData
        .filter((item) => item.key?.startsWith("main_page_statistic_"))
        .sort((a, b) => {
          const aNum = parseInt(a.key.replace("main_page_statistic_", ""));
          const bNum = parseInt(b.key.replace("main_page_statistic_", ""));
          return aNum - bNum;
        })
    : [];

  return (
    <ul className="statistics__list">
      {statistics.map((item) => {
        const rawValue = item?.["value_" + i18n.language] || "";

        const [value = "", label = ""] = rawValue
          .replace(/\\n/g, "\n") // заменяем "\\n" на настоящий перенос
          .split("\n")
          .map((str) => str.trim());

        return (
          <li key={item.key}>
            <p>
              <strong>{value}</strong>
              <span>{label}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};
