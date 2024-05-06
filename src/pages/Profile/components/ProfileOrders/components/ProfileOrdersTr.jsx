import React from 'react'

export const ProfileOrdersTr = ({itemData}) => {


    return (
        <tr>
            <td>
                <span>ID заказа</span>
                <span>
                    {itemData.id}
                </span>
            </td>
            <td>
                <span>Товаров, шт.</span>
                <span>
                    {itemData.products_count}
                </span>
            </td>
            <td>
                <span>Сумма</span>
                <span>
                    {itemData.products_sum}
                    ₴
                </span>
            </td>
            <td>
                <span>Скидка</span>
                <span>
                    {itemData.discount_percent}
                    %
                </span>
            </td>
            <td>
                <span>Дата</span>
                <span>
                    {itemData.created_at.slice(0, itemData.created_at.indexOf("T")).replaceAll("-", ".")}
                </span>
            </td>
        </tr>
    )
}
