import React, {useEffect, useState} from 'react'
import {CartItemLength} from './CartItemLength'
import {useDispatch, useSelector} from "react-redux";
import {removeBasketItem} from "../../../redux/toolkitSlice";
import axios from "axios";
import getCookies from "../../../functions/getCookies";
import {getApiLink} from "../../../api/getApiLink";
import {GetApiHeaders} from "../../../functions/getApiHeaders";
import photoPlaceholder from '../../../assets/img/null-card-image.png'
import { NavLink } from 'react-router-dom';


export const CartListItem = ({productInfo, setTotalAmount, products}) => {

    const dispatch = useDispatch()
    const basketList = useSelector(state => state.toolkit.basket);
    const basketItem = basketList.filter(item => item.product_id === productInfo.id)[0]

    const [productCount, setProductCount] = useState(basketItem.product_amount)

    const handleDeleteItem = () => {

        setTotalAmount(prev => prev - productInfo.original_price * productCount)
        dispatch(removeBasketItem(productInfo.id))

        if(!getCookies('cookieToken')) return;

        axios.defaults.headers.common['Authorization'] = `Bearer ${getCookies('cookieToken')}`
        axios.post(getApiLink("/api/bucket/remove"), {
            "product_id": productInfo.id,
            "product_amount": productCount
        }, {headers: GetApiHeaders()})
    }

    useEffect(() => {
        setProductCount(basketItem.product_amount)
    }, [basketItem])

    return (
        <li className="cart__item">
            <div className="cart__item_body">
                <div className="cart__item_info">
                    <NavLink to={`/product/${productInfo.id}`} className="cart__item_image">
                        <picture>
                            <img src={productInfo.files[0]?.web_path ?? photoPlaceholder} alt="" width="130" height="130" loading="lazy"/>
                        </picture>
                    </NavLink>
                    <h3>
                        <NavLink to={`/product/${productInfo.id}`}>
                        {productInfo.name}
                        </NavLink>
                    </h3>
                    <span>Артикул {productInfo.article}</span>
                </div>
                <div className="cart__item_price">
                    <span>Ціна</span>
                    <b>{productInfo.original_price} ₴</b>
                </div>
                <div className="cart__item_length">
                    <span>Кількість</span>

                    <CartItemLength
                        products={products}
                        setTotalAmount={setTotalAmount}
                        productInfo={productInfo}
                        setProductCount={setProductCount}
                        productCount={productCount}
                    />

                </div>
                <div className="cart__item_total">
                    <span>Сума</span>
                    <b data-price-currency="₴">
                        {productInfo.original_price * productCount}
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
