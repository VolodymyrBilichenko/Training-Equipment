import React from "react";

export const FooterTel = ({ socialData }) => {
  const socialNumbers = socialData.filter(
    (item) => item.key === "phone_number"
  );

  return (
    <div className="footer__tel">
      <h2>Телефони</h2>

      <ul>
        {socialNumbers.map((social) => (
          <li key={social.id}>
            <a href={`tel:${social.value.match(/[0-9+]/g).join('')}`}>{social.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
