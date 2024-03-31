import React, {useEffect, useState} from 'react'
import {MainHero} from './components/MainHero/MainHero'
import {MainCategories} from './components/MainCategories/MainCategories'
import {MainStatistics} from './components/MainStatistics/MainStatistics'
import {MainReviews} from './components/MainReviews/MainReviews'
import {ProductsList} from '../../components/ProductsList/ProductsList'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import {useSelector} from "react-redux";

export const Main = () => {

    const allProducts = useSelector(state => state.toolkit.allProducts)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [allProducts])

    return (
        <main className="main">

            <MainHero/>

            <MainCategories/>

            <section className='products container'>
                <SectionTitle title={'Нові освітні рішення'}/>

                <ProductsList list={allProducts.slice(0, 8)} isLoading={isLoading} ClassNameList={'products__list'}/>
            </section>

            <MainStatistics/>

            <MainReviews/>
        </main>
    )
}
