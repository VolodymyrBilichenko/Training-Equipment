import React from 'react'
import { OrderListItem } from './OrderListItem'

export const OrderList = ({ preceptsData }) => {
  return (
    <ul className="orders__list">

      {preceptsData.map(precept => (
        <OrderListItem key={precept.id} precept={precept}/>
      ))}

    </ul>
  )
}
