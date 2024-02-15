import React from 'react'

export const ProductListItem = ({ProductImg, ProductTitle, ProductPriceDel, ProductPriceIns}) => {
  return (
    <li className="product-card">
      <a href="product.html" className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}} aria-label="Глобус-модель 'Будова Сонця'">
        <picture>
          <img src={ProductImg} alt="ProductCardImg" width="300" height="300" loading="lazy"/>
        </picture>
      </a>
      <h3 className="product-card__title">
        <a href="product.html">
          {ProductTitle}
        </a>
      </h3>
      <div className="product-card__price">
        <ins>{`${ProductPriceIns} ₴`}</ins>
        <del>{`${ProductPriceDel} ₴`}</del>
      </div>
      <button className="product-card__add-cart button is-min-on-mob" type="button">
        <svg width="20" height="20" viewBox="0 0 48 48">
          <use xlinkHref="#cart"></use>
        </svg>
        <span>Додати до кошика</span>
      </button>
    </li>
  )
}
