import React, { useEffect, useState } from 'react'
import { CartListItem } from './components/CartListItem'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'

export const CartList = ({ products, setTotalAmount }) => {

  return (
    <ul className="cart__list" data-price-sum-container-id="cart-list">
      {products?.map(productItem => (
        <CartListItem key={productItem.id} setTotalAmount={setTotalAmount} productInfo={productItem}/>
      ))}          
    </ul>
  )
}
