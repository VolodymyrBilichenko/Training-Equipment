import React, {useEffect, useState} from 'react'
import {MainHero} from './components/MainHero/MainHero'
import {MainCategories} from './components/MainCategories/MainCategories'
import {MainStatistics} from './components/MainStatistics/MainStatistics'
import {MainReviews} from './components/MainReviews/MainReviews'
import {ProductsList} from '../../components/ProductsList/ProductsList'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import axios from "axios";
import {getApiLink} from "../../api/getApiLink";
import {GetApiHeaders} from "../../functions/getApiHeaders";

export const Main = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(getApiLink(`/api/products/get`), {headers: GetApiHeaders()})
            .then(({data}) => {
                setProducts(data.data)
            })
            .catch(error => {
                console.log('products undefined', error);
            })
    }, [])

    return (
        <main className="main">

            <MainHero/>

            <MainCategories/>

            <section className='products container'>
                <SectionTitle title={'Нові освітні рішення'}/>

                <ProductsList list={products} ClassNameList={'products__list'}/>
            </section>

            <MainStatistics/>

            <MainReviews/>
        </main>
    )
}
