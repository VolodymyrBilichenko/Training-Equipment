import React from 'react'
import {ProductsListStyled} from "./ProductsList.styled";

import NotFoundImg from '../../assets/img/not-founded.svg'
import { CustomLoading } from '../CustomLoading/CustomLoading';
import { useTranslation } from 'react-i18next';
import { ProductItem } from '../ProductItem';

export const ProductsList = ({ ClassNameList, list, isLoading }) => {
    const { t } = useTranslation();

    return (
        <ProductsListStyled className={`${list.length === 0 ? 'empty' : ''} ${ClassNameList} products-list `}>

            {!isLoading ? list.length ? list?.map(product => (
                <ProductItem
                    key={product.id}
                    data={product}
                />
            )) : (

                <div className="catalog__none">
                    <div className="catalog__none_block">
                        <img src={NotFoundImg} width="250" height="204" alt=""/>
                        <span>{t('nothing_title')}</span>
                    </div>
                </div>
            )
            : <CustomLoading/>}

		</ProductsListStyled>
    )
}
