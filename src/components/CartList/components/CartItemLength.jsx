import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { changeBasketItem } from '../../../redux/toolkitSlice';
import axios from "axios";
import {getApiLink} from "../../../api/getApiLink";
import {GetApiHeaders} from "../../../functions/getApiHeaders";
import getCookies from "../../../functions/getCookies";

export const CartItemLength = ({setProductCount, setTotalAmount, productInfo, productCount}) => {
    const [quantity, setQuantity] = useState(productCount ?? 1);
    const dispatch = useDispatch();

    const allProducts = useSelector(state => state.toolkit.allProducts)

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
        if (!setTotalAmount) return;
        setTotalAmount(prev => prev + productInfo.original_price)

        const dataItem = {
            "product_id": productInfo.id,
            "product_amount": 1
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${getCookies('cookieToken')}`
        axios.post(getApiLink("/api/bucket/add"), dataItem, {headers: GetApiHeaders()}).then(({data}) => console.log(data)).catch(er => console.log(er))

        dispatch(changeBasketItem({
            count: 1,
            product_id: productInfo.id,
        }))
    };

    const handleDecrement = () => {
        if (quantity < 2) return;
        setQuantity(prev => prev > 1 ? prev - 1 : 1);
        if (!setTotalAmount) return;
        console.log(productInfo)
        setTotalAmount(prev => prev - productInfo.original_price)

        const dataItem = {
            "product_id": productInfo.id,
            "product_amount": 1
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${getCookies('cookieToken')}`
        axios.post(getApiLink("/api/bucket/remove"), dataItem, {headers: GetApiHeaders()}).then(({data}) => console.log(data)).catch(er => console.log(er))

        dispatch(changeBasketItem({
            count: -1,
            product_id: productInfo.id,
        }))
    };

    useEffect(() => {
        setProductCount(quantity)
    }, [quantity, setProductCount])

    useEffect(() => {
        if(!setTotalAmount) return;

        setTotalAmount(prev => prev + productInfo.original_price * quantity)
    }, [allProducts])

    return (
        <div className="product__length">
            <button className="product__length_minus" type="button" onClick={handleDecrement}>
                -
            </button>
            <input
                type="number"
                name="product-length"
                placeholder=""
                value={quantity}
                max='100'
                min='1'
                data-price-value='200'
                required
                className="product__length_value"
                readOnly
            />
            <button className="product__length_plus" type="button" onClick={handleIncrement}>
                +
            </button>
        </div>
    );
};
