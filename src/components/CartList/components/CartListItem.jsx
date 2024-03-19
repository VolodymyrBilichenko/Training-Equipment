import React from 'react'
import { CartItemLength } from './CartItemLength'

import ProductImg from '../../../assets/img/product-cards/product-card-image-4.png'

export const CartListItem = ({ productInfo }) => {
    return (
        <li className="cart__item" data-price-container>
            <div className="cart__item_body">
                <div className="cart__item_info">
                    <div className="cart__item_image">
                        <picture>
                            <img src={ProductImg} alt="" width="130" height="130" loading="lazy"/>
                        </picture>
                    </div>
                    <h3>{productInfo.name}</h3>
                    <span>Артикул {productInfo.article}</span>
                </div>
                <div className="cart__item_price">
                    <span>Ціна</span>
                    <b>{productInfo.price} ₴</b>
                </div>
                <div className="cart__item_length">
                    <span>Кількість</span>

                    <CartItemLength/>

                </div>
                <div className="cart__item_total">
                    <span>Сума</span>
                    <b data-price-result data-price-currency="₴"></b>
                </div>
                <button className="cart__item_remove" type="button">
                    <svg width="18" height="18" viewBox="0 0 18 18">
                        <use xlinkHref="#trash"></use>
                    </svg>
                </button>
            </div>
        </li>    
    )
}
