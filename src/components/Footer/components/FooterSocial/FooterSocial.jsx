import React from "react";

const socialIcons = [
  { key: "facebook", title: "Facebook", iconId: "#facebook" },
  { key: "instagram", title: "Instagram", iconId: "#instagram" },
  { key: "youtube", title: "YouTube", iconId: "#youtube" },
  { key: "viber", title: "Viber", iconId: "#viber" },
  { key: "telegram", title: "Telegram", iconId: "#telegram" },
];

export const FooterSocial = ({ socialData }) => {
  return (
    <div className="footer__social">
      <ul>
        {socialIcons.map(({ key, title, iconId }) => {
          const item = socialData?.find((el) => el.key === key);
          if (!item?.value) return null;

          return (
            <li key={key}>
              <a href={item.value} title={title} target="_blank" rel="noopener noreferrer">
                <svg width="26" height="26" viewBox="0 0 48 48">
                  <use xlinkHref={iconId} />
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
