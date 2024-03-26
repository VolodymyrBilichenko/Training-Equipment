import React from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import {ProductsListStyled} from "./ProductsList.styled";
import {useSelector} from "react-redux";

export const ProductsList = ({ ClassNameList, list }) => {

    return (
        <ProductsListStyled className={`${ClassNameList} products-list`}>

            {list?.map(product => (
                <ProductListItem
                    key={product.id}
                    data={product}
                />
            ))}

		</ProductsListStyled>
    )
}
