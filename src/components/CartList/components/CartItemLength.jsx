import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export const CartItemLength = ({setProductCount, setTotalAmount, productInfo, products}) => {
    const [quantity, setQuantity] = useState(1);

    const basketList = useSelector(state => state.toolkit.basket);

    console.log(basketList);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
        if (!setTotalAmount) return;
        setTotalAmount(prev => prev + productInfo.price)
    };

    const handleDecrement = () => {
        if (quantity < 2) return;
        setQuantity(prev => prev > 1 ? prev - 1 : 1);
        if (!setTotalAmount) return;
        setTotalAmount(prev => prev - productInfo.price)
    };

    useEffect(() => {
        setProductCount(quantity)
    }, [quantity, setProductCount])

    useEffect(() => {
        if(!setTotalAmount) return;
        setTotalAmount(prev => (prev - productInfo.price) + (productInfo.price * quantity))
    }, [products, setTotalAmount, productInfo, quantity])

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
