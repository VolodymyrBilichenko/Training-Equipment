import React from 'react'
import { MainHero } from './components/MainHero/MainHero'
import { MainCategories } from './components/MainCategories/MainCategories'
import { MainProducts } from './components/MainProducts/MainProducts'

export const Main = () => {
  return (
    <main className="main">

		<MainHero/>

        <MainCategories/>

        <MainProducts/>
	</main>
  )
}
