import React, { useEffect, useState } from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { ProfileNav } from './components/ProfileNav/ProfileNav'
// import { ProfileBonuses } from './components/ProfileBonuses/ProfileBonuses'
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import getCookies from '../../functions/getCookies'
// import { ProfileOrders } from './components/ProfileOrders/ProfileOrders'

export const Profile = () => {
  const [userProf, setUserProf] = useState({});

  useEffect(() => {
    axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('cookieToken')}` 
    axios.get(getApiLink('/api/user/profile'))
      .then(({data}) => {
        setUserProf(data.data)
      })
      .catch((error) => {
        console.log('user undefined', error );
      })
  }, [])

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

          <ProfileInfo userData={userProf}/>

          {/* <ProfileOrders/> */}

          {/* <ProfileBonuses/> */}
        </div>
      </section>

    </>
  )
}
