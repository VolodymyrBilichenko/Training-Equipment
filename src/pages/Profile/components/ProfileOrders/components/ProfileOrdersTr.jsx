import { useTranslation } from 'react-i18next';

export const ProfileOrdersTr = ({itemData}) => {
    const { t } = useTranslation();

    return (
        <tr>
            <td>
                <span>
                    {t('order_id')}
                </span>
                <span>
                    {itemData.id}
                </span>
            </td>
            <td>
                <span>
                    {t('order_products_count')}
                </span>
                <span>
                    {itemData.products_count}
                </span>
            </td>
            <td>
                <span>
                    {t('order_amount')}
                </span>
                <span>
                    {itemData.products_sum}
                    ₴
                </span>
            </td>
            <td>
                <span>
                    {t('order_sale')}
                </span>
                <span>
                    {itemData.discount_percent}
                    %
                </span>
            </td>
            <td>
                <span>
                    {t('order_date')}
                </span>
                <span>
                    {itemData.created_at.slice(0, itemData.created_at.indexOf("T")).replaceAll("-", ".")}
                </span>
            </td>
        </tr>
    )
}
