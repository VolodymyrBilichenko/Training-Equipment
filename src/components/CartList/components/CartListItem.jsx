import React from 'react'
import { CartItemLength } from './CartItemLength'

import ProductImg from '../../../assets/img/product-cards/product-card-image-4.png'

export const CartListItem = () => {
    return (
        <li class="cart__item" data-price-container>
            <div class="cart__item_body">
                <div class="cart__item_info">
                    <div class="cart__item_image">
                        <picture>
                            <img src={ProductImg} alt="" width="130" height="130" loading="lazy"/>
                        </picture>
                    </div>
                    <h3>Колекція "Скло і вироби з нього"</h3>
                    <span>Артикул 059865</span>
                </div>
                <div class="cart__item_price">
                    <span>Ціна</span>
                    <b>3 800 ₴</b>
                </div>
                <div class="cart__item_length">
                    <span>Кількість</span>

                    <CartItemLength/>

                </div>
                <div class="cart__item_total">
                    <span>Сума</span>
                    <b data-price-result data-price-currency="₴"></b>
                </div>
                <button class="cart__item_remove" type="button">
                    <svg width="18" height="18" viewBox="0 0 18 18">
                        <use xlinkHref="#trash"></use>
                    </svg>
                </button>
            </div>
        </li>    
    )
}
