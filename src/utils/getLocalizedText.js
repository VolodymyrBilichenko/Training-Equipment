export const getLocalizedText = (data, language, type) => {
  if (!data.length) return;

  const text = data?.find((item) => item.key === type);

  if (!text) return "";

  const localizedText = {
    ru: text.value_ru,
    ua: text.value_ua,
    en: text.value_en,
  };

  return localizedText[language] || text.value || "";
};
