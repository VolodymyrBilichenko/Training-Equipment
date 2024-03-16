import React from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { ProfileNav } from './components/ProfileNav/ProfileNav'
// import { ProfileBonuses } from './components/ProfileBonuses/ProfileBonuses'
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo'
// import { ProfileOrders } from './components/ProfileOrders/ProfileOrders'

export const Profile = () => {
  return (
    <>
      <BackGroundDecor/>

      <BreadCrumbs pages={[{page: 'Личный кабинет'}]}/>

      <section className="account container">

        <SectionTitle title={'Личный кабинет'} ClassTitle={'account__title'}/>

        <div className="account__aside" data-sticky-container>
          <ProfileNav/>
        </div>

        <div className="account__main">

          <ProfileInfo/>

          {/* <ProfileOrders/> */}

          {/* <ProfileBonuses/> */}
        </div>
      </section>

    </>
  )
}
