import React, { useEffect, useState } from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { getApiLink } from '../../api/getApiLink';
// import { addBasketItem } from '../../redux/toolkitSlice';

// import ProductCardImg1 from '../../assets/img/product-cards/product-card-image-1.png'
// import ProductCardImg2 from '../../assets/img/product-cards/product-card-image-2.png'
// import ProductCardImg3 from '../../assets/img/product-cards/product-card-image-3.png'
// import ProductCardImg4 from '../../assets/img/product-cards/product-card-image-4.png'
// import ProductCardImg5 from '../../assets/img/product-cards/product-card-image-5.png'
// import ProductCardImg6 from '../../assets/img/product-cards/product-card-image-6.png'

export const ProductsList = ({ClassNameList}) => {
    const [allProducts, setAllProducts] = useState([]);

    const ProductData = useSelector(state => state.toolkit.basket);

    console.log(ProductData);

    useEffect(() => {
        axios.get(getApiLink('/api/products/get'))
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
