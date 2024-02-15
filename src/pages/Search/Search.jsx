import React from 'react'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { MainHeroSearch } from '../Main/components/MainHero/components/MainHeroSearch'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { PaginationProducts } from '../../components/PaginationProducts/PaginationProducts'

import DecorHero from '../../assets/img/decor-hero-background.png'
import DecorElem from '../../assets/img/decor-element.png'

export const Search = () => {
  return (
    <div className='main'>
        <div className="main__background" style={{backgroundImage: `url(${DecorHero})`, paddingTop: '24%'}} aria-hidden="true"></div>
        <div className="main__footer_decor" aria-hidden="true">
            <picture>
                <img src={DecorElem} alt="DecorElem" width="0" height="0" loading="lazy"/>
            </picture>
        </div>

        <BreadCrumbs pages={[{page: 'Search'}]}/>

        <div className='favorites container'>

            <SectionTitle title={'Пошук по:'}/>

            <MainHeroSearch searchPlaceholder={'Пошук'}/>

            <ProductsList ClassNameList={'favorites__list'}/>

            <PaginationProducts ClassName={'favorites__pagination'}/>
        </div>
    </div>
  )
}
