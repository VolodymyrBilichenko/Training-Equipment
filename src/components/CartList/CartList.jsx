import React from 'react'
import { CartListItem } from './components/CartListItem'

export const CartList = () => {
  return (
    <ul class="cart__list" data-price-sum-container-id="cart-list">
                
        <CartListItem/>
        
        <CartListItem/>

        <CartListItem/>
        
    </ul>
  )
}
