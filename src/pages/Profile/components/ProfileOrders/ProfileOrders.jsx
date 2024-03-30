import React, {useEffect, useState} from 'react'
import {ProfileOrdersTr} from './components/ProfileOrdersTr'
import axios from "axios";
import {getApiLink} from "../../../../api/getApiLink";
import {toast} from "react-toastify";

export const ProfileOrders = () => {

    const [ordersList, setOrdersList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(getApiLink("/api/orders/get")).then(({data}) => {
            setOrdersList(data.data)
            setIsLoading(false)
        }).catch(er => toast.error("Возникла неизведанная ошибка"))
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
                    !isLoading ? ordersList.length ?
                        
                            ordersList?.map(item => <ProfileOrdersTr key={item?.id} itemData={item}/>) :

                            <p><br/>Заказов нет</p> :

                        <p><br/>Загрузка...</p>
                }

                </tbody>
            </table>
        </div>
    )
}
