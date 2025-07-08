import React, { useContext, useEffect, useState } from "react";
import { BackGroundDecor } from "../../components/BackGroundDecor/BackGroundDecor";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { CartList } from "../../components/CartList/CartList";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { PopupContext } from "../../App";
import getCookies from "../../functions/getCookies";
import { setBasketComment } from "../../redux/toolkitSlice";
import { toast } from "react-toastify";
import { Trans, useTranslation } from "react-i18next";
import { getAllCartProducts } from "../../utils/db";
import { BasketFooter } from "./components/BasketFooter";

export const Basket = () => {
  const { t } = useTranslation();

  const setModal = useContext(PopupContext);

  const handleOpenModal = (type) => {
    setModal(`${type}`);
  };

  return (
    <>
      {/* <BackGroundDecor /> */}

      <BreadCrumbs pages={[{ page: t("cart") }]} />

      <section className="cart container">
        <SectionTitle title={t("cart")} />

        {!getCookies("cookieToken") && (
          <div className="cart__note">
            <p>
              <Trans
                i18nKey="want_discount_register"
                components={{
                  register: (
                    <button
                      onClick={() => handleOpenModal("register")}
                      className="open-popup"
                    />
                  ),
                  login: (
                    <button
                      onClick={() => handleOpenModal("login")}
                      className="open-popup"
                    />
                  ),
                }}
              />
            </p>
          </div>
        )}

        <CartList />

        <BasketFooter />  
      </section>
    </>
  );
};
