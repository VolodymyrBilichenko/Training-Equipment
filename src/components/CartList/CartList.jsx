import React from "react";
import { CartListItem } from "./components/CartListItem";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const CartList = ({ products, setTotalAmount }) => {
  const { t } = useTranslation();

  const basketList = useSelector((state) => state.toolkit.basket);
  const allProducts = useSelector((state) => state.toolkit.allProducts);

  const productsList = allProducts ?? products;

  return (
    <ul className="cart__list" data-price-sum-container-id="cart-list">
      {basketList.length ? (
        productsList
          ?.filter((item) =>
            basketList.some((item2) => item.id === item2.product_id)
          )
          ?.map((productItem) => (
            <CartListItem
              key={productItem.id}
              products={products}
              setTotalAmount={setTotalAmount}
              productInfo={productItem}
            />
          ))
      ) : (
        <>
          <br />
          <br />
          <p>{t("empty_cart")}</p>
          <br />
        </>
      )}
    </ul>
  );
};
