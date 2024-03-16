import React from 'react'
import { ProfileOrdersTr } from './components/ProfileOrdersTr'

export const ProfileOrders = () => {
  return (
    <div className="account__orders">
        <h3 className="account__orders_title min-title">
            Мои заказы
        </h3>
        <table className="account__orders_table">
            <thead>
                <tr>
                    <th>ID заказа</th>
                    <th>Товаров, шт.</th>
                    <th>Сумма</th>
                    <th>Скидка</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                <ProfileOrdersTr/>
                <ProfileOrdersTr/>
                <ProfileOrdersTr/>
                <ProfileOrdersTr/>
                <ProfileOrdersTr/>
                <ProfileOrdersTr/>
            </tbody>
        </table>
    </div>
  )
}
