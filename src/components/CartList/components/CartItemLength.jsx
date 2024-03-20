import React, {useEffect, useState} from 'react';

export const CartItemLength = ({setProductCount}) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => prev > 1 ? prev - 1 : 1);
    };

    useEffect(() => {
        setProductCount(quantity)
    }, [quantity])

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
