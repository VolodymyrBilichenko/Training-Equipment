import React from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import {ProductsListStyled} from "./ProductsList.styled";

import NotFoundImg from '../../assets/img/not-founded.svg'

export const ProductsList = ({ ClassNameList, list, isLoading }) => {

    return (
        <ProductsListStyled className={`${ClassNameList} products-list`}>

            {!isLoading ? list.length ? list?.map(product => (
                <ProductListItem
                    key={product.id}
                    data={product}
                />
            )) : (

                <div class="catalog__none">
                    <div class="catalog__none_block">
                        <img src={NotFoundImg} width="250" height="204" alt=""/>
                        <span>Ничего нет</span>
                    </div>
                </div>
            )
            : <p><br/>Loading...</p>}

		</ProductsListStyled>
    )
}
