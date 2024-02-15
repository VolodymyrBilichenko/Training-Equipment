import React from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { PaginationProducts } from '../../components/PaginationProducts/PaginationProducts'

export const Favorites = () => {
    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{page: 'Избранное'}]}/>

            <div className='favorites container'>

                <SectionTitle title={'Избранное'}/>

                <a href="#favorites-popup" className="favorites__receive_email open-popup">
                    Желаю получить Коммерческое предложение по Email для товаров в Избранное
                </a>

                <ProductsList ClassNameList={'favorites__list'}/>

                <PaginationProducts ClassName={'favorites__pagination'}/>
            </div>
        </>
    )
}
