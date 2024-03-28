import React from 'react'
import {CartListItem} from './components/CartListItem'
import {useSelector} from "react-redux";

export const CartList = ({products, setTotalAmount}) => {

    const basketList = useSelector(state => state.toolkit.basket);
    const allProducts = useSelector(state => state.toolkit.allProducts)

    const productsList = allProducts ?? products

    return (
        <ul className="cart__list" data-price-sum-container-id="cart-list">
            {productsList?.filter(item => basketList.some(item2 => item.id === item2.product_id))?.map(productItem => (
                <CartListItem key={productItem.id} products={products} setTotalAmount={setTotalAmount}
                              productInfo={productItem}/>
            ))}
        </ul>
    )
}
