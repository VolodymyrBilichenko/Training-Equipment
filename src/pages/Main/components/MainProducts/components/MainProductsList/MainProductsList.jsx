import React from 'react'

import ProductCardPh1 from '../../../../../../assets/img/product-cards/product-card-image-1.png'

export const MainProductsList = () => {
    return (
        <ul className="products__list products-list">
            <li className="product-card">
                <a href="product.html" className="product-card__image image-aspect-ratio" >
                    <picture>
                        <img src={ProductCardPh1} alt="product card ph" width="300" height="300" loading="lazy"/>
                    </picture>
                </a>
                <h3 className="product-card__title">
                    <a href="product.html">
                        Глобус-модель "Будова Сонця"
                    </a>
                </h3>
                <div className="product-card__price">
                    <ins>3 800 ₴</ins>
                    <del>3 800 ₴</del>
                </div>
                <button className="product-card__add-cart button is-min-on-mob" type="button">
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <use xlinkHref="#cart"></use>
                    </svg>
                    <span>Додати до кошика</span>
                </button>
            </li>
        </ul>
    )
}
