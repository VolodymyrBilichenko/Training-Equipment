import React from 'react'
import { MainHero } from './components/MainHero/MainHero'
import { MainCategories } from './components/MainCategories/MainCategories'
import { MainProducts } from './components/MainProducts/MainProducts'
import { MainStatistics } from './components/MainStatistics/MainStatistics'

export const Main = () => {
  return (
    <main className="main">

		<MainHero/>

        <MainCategories/>

        <MainProducts/>

        <MainStatistics/>
	</main>
  )
}
