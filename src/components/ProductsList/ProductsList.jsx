import React from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import {ProductsListStyled} from "./ProductsList.styled";

import NotFoundImg from '../../assets/img/not-founded.svg'
import { CustomLoading } from '../CustomLoading/CustomLoading';

export const ProductsList = ({ ClassNameList, list, isLoading }) => {

    return (
        <ProductsListStyled className={`${list.length === 0 ? 'empty' : ''} ${ClassNameList} products-list `}>

            {!isLoading ? list.length ? list?.map(product => (
                <ProductListItem
                    key={product.id}
                    data={product}
                />
            )) : (

                <div className="catalog__none">
                    <div className="catalog__none_block">
                        <img src={NotFoundImg} width="250" height="204" alt=""/>
                        <span>Ничего нет</span>
                    </div>
                </div>
            )
            : <CustomLoading/>}

		</ProductsListStyled>
    )
}
