import React, {useEffect, useState} from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import {ProductsListStyled} from "./ProductsList.styled";

export const ProductsList = ({ ClassNameList, list, isLoading }) => {

    return (
        <ProductsListStyled className={`${ClassNameList} products-list`}>

            {!isLoading ? list.length ? list?.map(product => (
                <ProductListItem
                    key={product.id}
                    data={product}
                />
            )) : <p><br/>Ничего нет</p> : <p><br/>Loading...</p>}

		</ProductsListStyled>
    )
}
