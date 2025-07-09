import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import getCookies from "../../../../../../functions/getCookies";
import { PopupContext } from "../../../../../../App";
import { useSelector } from "react-redux";

export const HeaderAddNavMob = () => {
  const navigate = useNavigate();
  const SetPopContext = useContext(PopupContext);
  const basket = useSelector((state) => state.toolkit.basket);
  const favorites = useSelector((state) => state.toolkit.favorites);

  const [basketCount, setBasketCount] = useState(0);

  const handlePopUpClick = () => {
    if (getCookies("cookieToken")) {
      navigate("/profile");
    } else SetPopContext("login");
  };

  useEffect(() => {
    setBasketCount(basket.reduce((acc, item) => acc + +item.amount, 0));
  }, [basket]);

  return (
    <div className="header__add-nav visible-on-mob">
      <ul>
        <li>
          <button
            onClick={handlePopUpClick}
            className="open-popup"
            title="Акаунт"
          >
            <svg width="26" height="26" viewBox="0 0 48 48">
              <use xlinkHref="#user"></use>
            </svg>
          </button>
        </li>
        <li>
          <NavLink to={"/favorites"} title="Обране" data-length={favorites.length}>
            <svg width="26" height="26" viewBox="0 0 48 48">
              <use xlinkHref="#favorite"></use>
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/basket"} title="Кошик" data-length={basketCount}>
            <svg width="26" height="26" viewBox="0 0 48 48">
              <use xlinkHref="#cart"></use>
            </svg>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
