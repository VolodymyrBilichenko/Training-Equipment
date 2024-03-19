import React, { useEffect, useState } from 'react'
import { CartListItem } from './components/CartListItem'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'

export const CartList = ({ ProductData }) => {
  const [allProd, setAllProd] = useState([]);

  useEffect(() => {
    const configHeader = {
      headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
      }
    }

    axios.get(getApiLink('/api/products/get'), configHeader)
      .then(({data}) => {
        setAllProd(data.data)
      })
      .catch((error) => {
        console.log('all prod undefined', error);
      })
  })

  return (
    <ul className="cart__list" data-price-sum-container-id="cart-list">
      {allProd?.filter(item => ProductData.some(item2 => item.id === item2))?.map(productItem => (
        <CartListItem key={productItem.id} productInfo={productItem}/>
      ))}          
    </ul>
  )
}
