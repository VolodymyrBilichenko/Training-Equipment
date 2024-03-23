import React, {useState} from 'react'
import { CartItemLength } from './CartItemLength'

import {useDispatch} from "react-redux";
import {removeBasketItem} from "../../../redux/toolkitSlice";

export const CartListItem = ({ productInfo, setTotalAmount, products }) => {

    const dispatch = useDispatch()

    console.log('productInfo' ,productInfo);

    const handleDeleteItem = () => {
        dispatch(removeBasketItem(productInfo.id))
    }

    const [productCount, setProductCount] = useState(1)

    return (
        <li className="cart__item">
            <div className="cart__item_body">
                <div className="cart__item_info">
                    <div className="cart__item_image">
                        <picture>
                            <img src={productInfo.files[0]?.web_path} alt="" width="130" height="130" loading="lazy"/>
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

                    <CartItemLength products={products} setTotalAmount={setTotalAmount} productInfo={productInfo} setProductCount={setProductCount}/>

                </div>
                <div className="cart__item_total">
                    <span>Сума</span>
                    <b data-price-currency="₴">
                        {productInfo.price * productCount}
                    </b>
                </div>
                <button onClick={handleDeleteItem} className="cart__item_remove" type="button">
                    <svg width="18" height="18" viewBox="0 0 18 18">
                        <use xlinkHref="#trash"></use>
                    </svg>
                </button>
            </div>
        </li>    
    )
}
