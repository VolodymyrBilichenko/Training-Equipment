import React from 'react'
import { OrderListItem } from './OrderListItem'

export const OrderList = () => {
  return (
    <ul className="orders__list">
        <OrderListItem/>
        <OrderListItem/>
        <OrderListItem/>
        <OrderListItem/>
        <OrderListItem/>
        <OrderListItem/>
        <OrderListItem/>
    </ul>
  )
}
