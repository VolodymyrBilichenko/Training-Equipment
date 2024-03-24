import React from 'react'
import { CartListItem } from './components/CartListItem'
import {useSelector} from "react-redux";

export const CartList = ({ products, setTotalAmount }) => {

  const basketList = useSelector(state => state.toolkit.basket);

  console.log('basketList',basketList);

  console.log(products);

  
  return (
    <ul className="cart__list" data-price-sum-container-id="cart-list">
      {products?.filter(item => basketList.some(item2 => item.id === item2.product_id))?.map(productItem => (
        <CartListItem key={productItem.id} products={products} setTotalAmount={setTotalAmount} productInfo={productItem}/>
      ))}          
    </ul>
  )
}
