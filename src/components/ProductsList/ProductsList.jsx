import React, { useEffect, useState } from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { getApiLink } from '../../api/getApiLink';
import { useParams } from 'react-router-dom';

export const ProductsList = ({ ClassNameList, categoryId }) => {
    const [allProducts, setAllProducts] = useState([]);
	const { category_id } = useParams();

    const ProductData = useSelector(state => state.toolkit.basket);

    console.log(ProductData);

    console.log(allProducts);


    useEffect(() => {
        const CategoryProduct = category_id ? `?category_id=${category_id}` : ''

        axios.get(getApiLink(`/api/products/get${CategoryProduct}`))
            .then(({ data }) => {
                setAllProducts(data.data)
            })
            .catch(error => {
                console.log('products undefined', error);
            })
    }, [category_id])

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
