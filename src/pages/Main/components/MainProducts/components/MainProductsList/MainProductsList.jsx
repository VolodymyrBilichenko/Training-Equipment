import React from 'react'

import ProductCardPh1 from '../../../../../../assets/img/product-cards/product-card-image-1.png'
import ProductCardPh2 from '../../../../../../assets/img/product-cards/product-card-image-2.png'
import ProductCardPh3 from '../../../../../../assets/img/product-cards/product-card-image-3.png'
import ProductCardPh4 from '../../../../../../assets/img/product-cards/product-card-image-4.png'
import ProductCardPh5 from '../../../../../../assets/img/product-cards/product-card-image-5.png'
import ProductCardPh6 from '../../../../../../assets/img/product-cards/product-card-image-6.png'

export const MainProductsList = () => {
    return (
        <ul className="products__list products-list">
            <li className="product-card">
                <a href="product.html" className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}}>
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
            <li className="product-card">
                <a href="product.html" className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}}>
                    <picture>
                        <img src={ProductCardPh2} alt="product card ph" width="300" height="300" loading="lazy"/>
                    </picture>
                </a>
                <h3 className="product-card__title">
                    <a href="product.html">
                        Глобус "Зоряне небо" діаметр 320
                    </a>
                </h3>
                <div className="product-card__price">
                    <ins>2 800 ₴</ins>
                    <del>3 800 ₴</del>
                </div>
                <button className="product-card__add-cart button is-min-on-mob" type="button">
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <use xlinkHref="#cart"></use>
                    </svg>
                    <span>Додати до кошика</span>
                </button>
            </li>
            <li className="product-card">
                <a href="product.html" className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}}>
                    <picture>
                        <img src={ProductCardPh3} alt="product card ph" width="300" height="300" loading="lazy"/>
                    </picture>
                </a>
                <h3 className="product-card__title">
                    <a href="product.html">
                        Колекція "Скло і вироби з нього"
                    </a>
                </h3>
                <div className="product-card__price">
                    <ins>545 ₴</ins>
                    <del>3 800 ₴</del>
                </div>
                <button className="product-card__add-cart button is-min-on-mob" type="button">
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <use xlinkHref="#cart"></use>
                    </svg>
                    <span>Додати до кошика</span>
                </button>
            </li>
            <li className="product-card">
                <a href="product.html" className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}}>
                    <picture>
                        <img src={ProductCardPh4} alt="product card ph" width="300" height="300" loading="lazy"/>
                    </picture>
                </a>
                <h3 className="product-card__title">
                    <a href="product.html">
                        Колекція "Скло і вироби з нього"
                    </a>
                </h3>
                <div className="product-card__price">
                    <ins>3 800 ₴</ins>
                    <del>3 900 ₴</del>
                </div>
                <button className="product-card__add-cart button is-min-on-mob" type="button">
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <use xlinkHref="#cart"></use>
                    </svg>
                    <span>Додати до кошика</span>
                </button>
            </li>
            <li className="product-card">
                <a href="product.html" className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}}>
                    <picture>
                        <img src={ProductCardPh3} alt="product card ph" width="300" height="300" loading="lazy"/>
                    </picture>
                </a>
                <h3 className="product-card__title">
                    <a href="product.html">
                        Глобус-модель "Будова Сонця"
                    </a>
                </h3>
                <div className="product-card__price">
                    <ins>3 800 ₴</ins>
                    <del>4 000 ₴</del>
                </div>
                <button className="product-card__add-cart button is-min-on-mob" type="button">
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <use xlinkHref="#cart"></use>
                    </svg>
                    <span>Додати до кошика</span>
                </button>
            </li>
            <li className="product-card">
                <a href="product.html" className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}}>
                    <picture>
                        <img src={ProductCardPh5} alt="product card ph" width="300" height="300" loading="lazy"/>
                    </picture>
                </a>
                <h3 className="product-card__title">
                    <a href="product.html">
                        Глобус-модель "Будова Сонця"
                    </a>
                </h3>
                <div className="product-card__price">
                    <ins>3 800 ₴</ins>
                    <del>4 000 ₴</del>
                </div>
                <button className="product-card__add-cart button is-min-on-mob" type="button">
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <use xlinkHref="#cart"></use>
                    </svg>
                    <span>Додати до кошика</span>
                </button>
            </li>
            <li className="product-card">
                <a href="product.html" className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}}>
                    <picture>
                        <img src={ProductCardPh4} alt="product card ph" width="300" height="300" loading="lazy"/>
                    </picture>
                </a>
                <h3 className="product-card__title">
                    <a href="product.html">
                        Колекція "Скло і вироби з нього"
                    </a>
                </h3>
                <div className="product-card__price">
                    <ins>3 800 ₴</ins>
                    <del>3 900 ₴</del>
                </div>
                <button className="product-card__add-cart button is-min-on-mob" type="button">
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <use xlinkHref="#cart"></use>
                    </svg>
                    <span>Додати до кошика</span>
                </button>
            </li>
            <li className="product-card">
                <a href="product.html" className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}}>
                    <picture>
                        <img src={ProductCardPh6} alt="product card ph" width="300" height="300" loading="lazy"/>
                    </picture>
                </a>
                <h3 className="product-card__title">
                    <a href="product.html">
                        Колекція "Скло і вироби з нього"
                    </a>
                </h3>
                <div className="product-card__price">
                    <ins>3 800 ₴</ins>
                    <del>3 900 ₴</del>
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
