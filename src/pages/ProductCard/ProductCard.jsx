import React from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'

export const ProductCard = () => {
  return (
    <>
        <BackGroundDecor/>

        <BreadCrumbs pages={[{route: '/catalog', page: 'Каталог'},{page: 'Демонстраційна модель «Мозок. Анатомія людини» Learning resources'}]}/>

        
    </>
  )
}
