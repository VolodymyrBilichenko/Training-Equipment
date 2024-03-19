import React, { useEffect, useState } from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { getApiLink } from '../../api/getApiLink';
import { useParams } from 'react-router-dom';

export const ProductsList = ({ ClassNameList }) => {
    const [allProducts, setAllProducts] = useState([]);
	const { category_id } = useParams();
    const { search } = useParams();

    const ProductData = useSelector(state => state.toolkit.basket);

    console.log(ProductData);

    console.log(allProducts);


    useEffect(() => {
        const configHeader = {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json",
            }
        }

        // /api/products/get?category_id=1
        const CategoryProduct = category_id ? `?category_id=${category_id}` : '';

        // /api/products/get?search=qwerty
        const SearchProd = search ? `?search=${search}` : '';

        

        axios.get(getApiLink(`/api/products/get${CategoryProduct}${SearchProd}`), configHeader)
            .then(({ data }) => {
                setAllProducts(data.data)
                console.log('product', data.data);
            })
            .catch(error => {
                console.log('products undefined', error);
            })
    }, [category_id, search])

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
