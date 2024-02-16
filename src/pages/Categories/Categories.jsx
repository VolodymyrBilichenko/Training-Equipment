import React from 'react'

import DecorHero from '../../assets/img/decor-hero-background.png'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { CategoriesList } from '../../components/CategoriesList/CategoriesList'

export const Categories = () => {
    return (
        <>
            <div className="main__background" style={{backgroundImage: `url(${DecorHero})`, paddingTop: '24%'}} aria-hidden="true"></div>

            <BreadCrumbs pages={[{page: 'Комплексные решения'}]}/>

            <div className='categories container'>

                <SectionTitle title={'Комплексные решения'}/>

                <div className="categories__text">
                    <p>
                        Обладнання згідно переліку та вимог МОН України за кращими цінами в Україні!
                    </p>
                </div>

                <CategoriesList ClassNameList={'add-border'}/>
            </div>
        </>
    )
}
