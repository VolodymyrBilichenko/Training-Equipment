import React from 'react'
import { SectionTitle } from '../../../../components/SectionTitle/SectionTitle'
import { MainProductsList } from './components/MainProductsList/MainProductsList'

export const MainProducts = () => {
    return (
        <section className="products container">

            <SectionTitle title={'Нові освітні рішення'} />

            <MainProductsList/>
        </section>
    )
}
