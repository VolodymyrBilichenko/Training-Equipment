import React from 'react'
import { SectionTitle } from '../../../../components/SectionTitle/SectionTitle'
import { CategoriesList } from '../../../../components/CategoriesList/CategoriesList'

export const MainCategories = () => {
  return (
    <section className="categories container">

      <SectionTitle title={'Комплексні рішення <br/> щодо кабінетів'}/>

      <CategoriesList/>
      
    </section>
  )
}
