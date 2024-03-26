import React, {useEffect, useState} from 'react'
import {ProfileOrdersTr} from './components/ProfileOrdersTr'
import axios from "axios";
import {getApiLink} from "../../../../api/getApiLink";

export const ProfileOrders = () => {

    const [ordersList, setOrdersList] = useState([])

    useEffect(() => {
        axios.get(getApiLink("/api/orders/get")).then(({data}) => {
            setOrdersList(data.data)
        }).catch(er => console.log(er))
    }, [])

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

                {
                    ordersList?.map(item => <ProfileOrdersTr key={item?.id} itemData={item}/>)
                }

                </tbody>
            </table>
        </div>
    )
}
