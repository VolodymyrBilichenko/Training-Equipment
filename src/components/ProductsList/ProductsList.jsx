import React, { useEffect, useState } from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { getApiLink } from '../../api/getApiLink';

export const ProductsList = ({ ClassNameList, categoryId }) => {
    const [allProducts, setAllProducts] = useState([]);

    const ProductData = useSelector(state => state.toolkit.basket);

    console.log(ProductData);

    console.log(allProducts);


    useEffect(() => {
        const CategoryProduct = categoryId ? `?category_id=${categoryId}` : ''

        axios.get(getApiLink(`/api/products/get${CategoryProduct}`))
            .then(({ data }) => {
                setAllProducts(data.data)
            })
            .catch(error => {
                console.log('products undefined', error);
            })
    }, [])

    return (
        <ul className={`${ClassNameList} products-list`}>

            {allProducts.map(product => ( 
                <ProductListItem
                    key={product.id}
                    data={product}
                />
            ))}

		</ul>
    )
}
