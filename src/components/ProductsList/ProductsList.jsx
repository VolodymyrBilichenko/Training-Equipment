import React from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import { useSelector } from 'react-redux'
// import { addBasketItem } from '../../redux/toolkitSlice';

import ProductCardImg1 from '../../assets/img/product-cards/product-card-image-1.png'
import ProductCardImg2 from '../../assets/img/product-cards/product-card-image-2.png'
import ProductCardImg3 from '../../assets/img/product-cards/product-card-image-3.png'
import ProductCardImg4 from '../../assets/img/product-cards/product-card-image-4.png'
import ProductCardImg5 from '../../assets/img/product-cards/product-card-image-5.png'
import ProductCardImg6 from '../../assets/img/product-cards/product-card-image-6.png'

export const ProductsList = ({ClassNameList}) => {

    const ProductData = useSelector(state => state.toolkit.basket);

    console.log(ProductData);

    const test = [
        {
            id: 'k2',
            title: 'Globus',
            ProductPriceIns: 800,
            ProductPriceDel: 1200,
            img: ProductCardImg1,
        },
        {
            id: 'k3',
            title: 'Globu2',
            ProductPriceIns: 600,
            ProductPriceDel: 1000,
            img: ProductCardImg2,
        },
        {
            id: 'k4',
            title: 'Globu3',
            ProductPriceIns: 600,
            ProductPriceDel: 1000,
            img: ProductCardImg3,
        },
        {
            id: 'k5',
            title: 'Globu4',
            ProductPriceIns: 1000,
            ProductPriceDel: 1200,
            img: ProductCardImg4,
        },
        {
            id: 'k6',
            title: 'Globu5',
            ProductPriceIns: 6000,
            ProductPriceDel: 7000,
            img: ProductCardImg5,
        },
        {
            id: 'k7',
            title: 'Globu6',
            ProductPriceIns: 200,
            ProductPriceDel: 500,
            img: ProductCardImg6,
        },
    ]

    return (
        <ul className={`${ClassNameList} products-list`}>

            {test.map(item => ( 
                <ProductListItem
                    key={item.id}
                    data={item}
                    // ProductImg={item.img} 
                    // ProductTitle={item.title}
                    // ProductPriceIns={item.ProductPriceIns}
                    // ProductPriceDel={item.ProductPriceDel}
                    // clickBtn={handleAddClick}
                />
            ))}

            {/* <ProductListItem 
                ProductImg={ProductCardImg2} 
                ProductTitle={'Глобус "Зоряне небо" діметр 320'}
                ProductPriceIns={'3200'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg3} 
                ProductTitle={'Глобус-модель "Будова Сонця"'}
                ProductPriceIns={'3600'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg4} 
                ProductTitle={'Глобус "Зоряне небо" діметр 320'}
                ProductPriceIns={'3200'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg5} 
                ProductTitle={'Глобус-модель "Будова Сонця"'}
                ProductPriceIns={'3600'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg6} 
                ProductTitle={'Глобус "Зоряне небо" діметр 320'}
                ProductPriceIns={'3200'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg1} 
                ProductTitle={'Глобус-модель "Будова Сонця"'}
                ProductPriceIns={'3600'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg2} 
                ProductTitle={'Глобус "Зоряне небо" діметр 320'}
                ProductPriceIns={'3200'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg3} 
                ProductTitle={'Глобус-модель "Будова Сонця"'}
                ProductPriceIns={'3600'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg4} 
                ProductTitle={'Глобус "Зоряне небо" діметр 320'}
                ProductPriceIns={'3200'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg5} 
                ProductTitle={'Глобус-модель "Будова Сонця"'}
                ProductPriceIns={'3600'}
                ProductPriceDel={'3800'}
            />

            <ProductListItem 
                ProductImg={ProductCardImg6} 
                ProductTitle={'Глобус "Зоряне небо" діметр 320'}
                ProductPriceIns={'3200'}
                ProductPriceDel={'3800'}
            /> */}

		</ul>
    )
}
