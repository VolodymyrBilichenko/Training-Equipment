import React from 'react'
import { MainHero } from './components/MainHero/MainHero'
import { MainCategories } from './components/MainCategories/MainCategories'

export const Main = () => {
  return (
    <main className="main">

		<MainHero/>

        <MainCategories/>
	</main>
  )
}
