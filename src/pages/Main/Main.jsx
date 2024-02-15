import React from 'react'
import { MainHero } from './components/MainHero/MainHero'
import { MainCategories } from './components/MainCategories/MainCategories'
import { MainStatistics } from './components/MainStatistics/MainStatistics'
import { MainReviews } from './components/MainReviews/MainReviews'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'

export const Main = () => {
  return (
    <main className="main">

		  <MainHero/>

      <MainCategories/>
      
      <section className='products container'>
        <SectionTitle title={'Нові освітні рішення'} />

        <ProductsList ClassNameList={'products__list'}/>
      </section>

      <MainStatistics/>

      <MainReviews/>
	  </main>
  )
}
