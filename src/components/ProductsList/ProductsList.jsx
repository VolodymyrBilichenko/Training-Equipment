import React, { useState } from "react";
import { ProductsListStyled } from "./ProductsList.styled";

import NotFoundImg from "../../assets/img/not-founded.svg";
import { CustomLoading } from "../CustomLoading/CustomLoading";
import { useTranslation } from "react-i18next";
import { ProductItem } from "../ProductItem";

export const ProductsList = ({ ClassNameList, list, isLoading, isShowMore = false }) => {
  const { t } = useTranslation();
  
  const [showCount, setShowCount] = useState(8);

  const handleShowMore = () => {
    const previousCount = showCount;
    const newCount = previousCount + 4;
  
    setShowCount(newCount);
  
    setTimeout(() => {
      const productCards = document.querySelectorAll('.product-card');
      const firstNewCard = productCards[previousCount];
  
      if (firstNewCard) {
        const rect = firstNewCard.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top;
  
        window.scrollTo({
          top: offsetTop - 100, // прокручиваем на 100px выше карточки
          behavior: 'smooth',
        });
      }
    }, 100);
  };
  

  return (
    <>
      <ProductsListStyled
        className={`${
          list.length === 0 ? "empty" : ""
        } ${ClassNameList} products-list `}
      >
        {!isLoading ? (
          list.length ? (
            list?.slice(0, isShowMore ? showCount : list.length).map((product) => (
              <ProductItem key={product.id} data={product} />
            ))
          ) : (
            <div className="catalog__none">
              <div className="catalog__none_block">
                <img src={NotFoundImg} width="250" height="204" alt="" />
                <span>{t("nothing_title")}</span>
              </div>
            </div>
          )
        ) : (
          <CustomLoading />
        )}
      </ProductsListStyled>

      {isShowMore && (
        <button className="products-list__show-more" onClick={handleShowMore} disabled={showCount >= list.length}>
          {t("show_more")}
        </button>
      )}
    </>
  );
};
