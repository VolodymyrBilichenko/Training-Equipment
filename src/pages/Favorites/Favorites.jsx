import React, {useEffect, useState} from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { PaginationProducts } from '../../components/PaginationProducts/PaginationProducts'
import {useSelector} from "react-redux";
import axios from "axios";
import {getApiLink} from "../../api/getApiLink";
import {GetApiHeaders} from "../../functions/getApiHeaders";

export const Favorites = () => {

    const favorites = useSelector(state => state.toolkit.favorites)
    const allProducts = useSelector(state => state.toolkit.allProducts)

    const favoritesList = allProducts.filter(item => favorites.some(item2 => item2 === item.id))

    console.log(favoritesList)

    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{page: 'Избранное'}]}/>

            <div className='favorites container'>

                <SectionTitle title={'Избранное'}/>

                <a href="#favorites-popup" className="favorites__receive_email open-popup">
                    Желаю получить Коммерческое предложение по Email для товаров в Избранное
                </a>

                <ProductsList list={favoritesList} ClassNameList={'favorites__list'}/>

                <PaginationProducts ClassName={'favorites__pagination'}/>
            </div>
        </>
    )
}
