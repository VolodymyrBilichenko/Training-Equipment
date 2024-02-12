import React from 'react'
import { SectionTitle } from '../../../../components/SectionTitle/SectionTitle'
import { MainCategoriesList } from './components/MainCategoriesList/MainCategoriesList'

export const MainCategories = () => {
  return (
    <section className="categories container">

      <SectionTitle title={'Комплексні рішення <br/> щодо кабінетів'}/>

      <MainCategoriesList/>
      
    </section>
  )
}
