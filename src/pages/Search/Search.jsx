import React from 'react'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'

import DecorElem from '../../assets/img/decor-element.png'
import DecorHero from '../../assets/img/decor-hero-background.png'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { MainHeroSearch } from '../Main/components/MainHero/components/MainHeroSearch'
import { ProductsList } from '../../components/ProductsList/ProductsList'

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

            <ProductsList/>
        </div>
    </div>
  )
}
