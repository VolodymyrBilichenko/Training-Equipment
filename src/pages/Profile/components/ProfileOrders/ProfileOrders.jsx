import React, {useEffect, useState} from 'react'
import {ProfileOrdersTr} from './components/ProfileOrdersTr'
import axios from "axios";
import {getApiLink} from "../../../../api/getApiLink";
import {toast} from "react-toastify";
import { useTranslation } from 'react-i18next';

export const ProfileOrders = () => {
    const { t } = useTranslation();

    const [ordersList, setOrdersList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(getApiLink("/api/orders/get")).then(({data}) => {
            setOrdersList(data.data)
            setIsLoading(false)
        }).catch(er => toast.error(t('something_was_happen')))
    }, [])

    return (
        <div className="account__orders">
            <h3 className="account__orders_title min-title">
                {t('my_orders')}
            </h3>
            <table className="account__orders_table">
                <thead>
                <tr>
                    <th>
                        {t('order_id')}
                    </th>
                    <th>
                        {t('order_products_count')}
                    </th>
                    <th>
                        {t('order_amount')}
                    </th>
                    <th>
                        {t('order_sale')}
                    </th>
                    <th>
                        {t('order_date')}
                    </th>
                </tr>
                </thead>
                <tbody>

                {
                    !isLoading ? ordersList.length ?
                        
                            ordersList?.map(item => <ProfileOrdersTr key={item?.id} itemData={item}/>) :

                            <p><br/>
                            {t('no_orders')}
                            </p> :

                        <p><br/>
                            {t('loading...')}
                        </p>
                }

                </tbody>
            </table>
        </div>
    )
}
