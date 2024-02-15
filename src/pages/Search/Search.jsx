import React from 'react'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { MainHeroSearch } from '../Main/components/MainHero/components/MainHeroSearch'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { PaginationProducts } from '../../components/PaginationProducts/PaginationProducts'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'

export const Search = () => {
  return (
    <>
        <BackGroundDecor/>

        <BreadCrumbs pages={[{page: 'Пошук по:'}]}/>

        <div className='favorites container'>

            <SectionTitle title={'Пошук по:'}/>

            <MainHeroSearch searchPlaceholder={'Пошук'}/>

            <ProductsList ClassNameList={'favorites__list'}/>

            <PaginationProducts ClassName={'favorites__pagination'}/>
        </div>
    </>
  )
}
