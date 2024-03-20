import React, {useEffect, useState} from 'react'
import {BreadCrumbs} from '../../components/BreadCrumbs/BreadCrumbs'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import {MainHeroSearch} from '../Main/components/MainHero/components/MainHeroSearch'
import {ProductsList} from '../../components/ProductsList/ProductsList'
import {PaginationProducts} from '../../components/PaginationProducts/PaginationProducts'
import {BackGroundDecor} from '../../components/BackGroundDecor/BackGroundDecor'
import {useParams} from 'react-router-dom'
import axios from "axios";
import {getApiLink} from "../../api/getApiLink";
import {GetApiHeaders} from "../../functions/getApiHeaders";

export const Search = () => {
    const {search} = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.get(getApiLink(`/api/products/get${search ? `?search=${search}` : ""}`), {headers: GetApiHeaders()})
            .then(({data}) => {
                setProducts(data.data)
            })
            .catch(error => {
                console.log('products undefined', error);
            })

    }, [search])

    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{page: 'Пошук по:'}]}/>

            <div className='favorites container'>

                <SectionTitle title={`Пошук по: ${search}`}/>

                <MainHeroSearch searchPlaceholder={'Пошук'}/>

                <ProductsList list={products} ClassNameList={'favorites__list'}/>

                <PaginationProducts ClassName={'favorites__pagination'}/>

            </div>
        </>
    )
}
