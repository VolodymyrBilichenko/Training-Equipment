import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PopupContext } from "../../../../../../App";
import getCookies from "../../../../../../functions/getCookies";
import { useSelector } from "react-redux";

export const HeaderAddNavDesk = () => {
  const navigate = useNavigate();

  const usersData = useSelector((state) => state.toolkit.user);
  const token = getCookies("cookieToken");
  const favorites = useSelector((state) => state.toolkit.favorites);
  const basket = useSelector((state) => state.toolkit.basket);

  const [basketCount, setBasketCount] = useState(0);

  const handlePopUpClick = () => {
    if (token) {
      navigate("/profile");
    } else SetPopContext("login");
  };

  const SetPopContext = useContext(PopupContext);

  useEffect(() => {
    setBasketCount(basket.reduce((acc, item) => acc + +item.amount, 0));
  }, [basket]);

  return (
    <div className="header__add-nav visible-on-desktop">
      <ul>
        <li>
          <button
            onClick={handlePopUpClick}
            className="open-popup"
            title="Акаунт"
            style={token ? { gap: "4px" } : { gap: "0" }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 48 48"
              style={{ minWidth: "26px", minHeight: "26px" }}
            >
              <use xlinkHref="#user"></use>
            </svg>
            <span>{usersData ? usersData.name : ""}</span>
          </button>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            title="Обране"
            data-length={favorites.length}
          >
            <svg width="26" height="26" viewBox="0 0 48 48">
              <use xlinkHref="#favorite"></use>
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/basket"}
            title="Кошик"
            data-length={basketCount}
          >
            <svg width="26" height="26" viewBox="0 0 48 48">
              <use xlinkHref="#cart"></use>
            </svg>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
