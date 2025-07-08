import React, { useEffect, useState } from "react";
import { CartListItem } from "./components/CartListItem";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getAllCartProducts } from "../../utils/db";

export const CartList = () => {
  const { t } = useTranslation();

  const basketRedux = useSelector((state) => state.toolkit.basket);

  const [basketList, setBasketList] = useState(basketRedux ?? []);

  useEffect(() => {
    setBasketList(basketRedux);
  }, [basketRedux]);

  return (
    <>
      {!!basketList.length ? (
        <ul className="cart__list" data-price-sum-container-id="cart-list">
          {basketList?.map((item) => (
            <CartListItem key={item.id} productInfo={item} />
          ))}
        </ul>
      ) : (
        <p className="empty_cart">{t("empty_cart")}</p>
      )}
    </>
  );
};
