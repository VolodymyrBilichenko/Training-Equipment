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

    const [products, setProducts] = useState([])

    const favorites = useSelector(state => state.toolkit.favorites)

    useEffect(() => {
        axios.get(getApiLink(`/api/products/get`), {headers: GetApiHeaders()})
            .then(({ data }) => {
                const favoriteData = data.data.filter(item => favorites.some(fav => fav === item.id))
                setProducts(favoriteData)
            })
            .catch(error => {
                console.log('products undefined', error);
            })
    }, [favorites])


    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{page: 'Избранное'}]}/>

            <div className='favorites container'>

                <SectionTitle title={'Избранное'}/>

                <a href="#favorites-popup" className="favorites__receive_email open-popup">
                    Желаю получить Коммерческое предложение по Email для товаров в Избранное
                </a>

                <ProductsList list={products} ClassNameList={'favorites__list'}/>

                <PaginationProducts ClassName={'favorites__pagination'}/>
            </div>
        </>
    )
}
