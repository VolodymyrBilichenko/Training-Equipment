import React from 'react'
import { ProductListItem } from './components/ProductListItem/ProductListItem'

import ProductCardImg1 from '../../assets/img/product-cards/product-card-image-1.png'
import ProductCardImg2 from '../../assets/img/product-cards/product-card-image-2.png'
import ProductCardImg3 from '../../assets/img/product-cards/product-card-image-3.png'
import ProductCardImg4 from '../../assets/img/product-cards/product-card-image-4.png'
import ProductCardImg5 from '../../assets/img/product-cards/product-card-image-5.png'
import ProductCardImg6 from '../../assets/img/product-cards/product-card-image-6.png'

export const ProductsList = ({ClassNameList}) => {
    return (
        <ul className={`${ClassNameList} products-list`}>

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
            />

		</ul>
    )
}
