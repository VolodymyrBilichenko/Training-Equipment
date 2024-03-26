import React, { useEffect, useState } from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { ProfileNav } from './components/ProfileNav/ProfileNav'
import { ProfileBonuses } from './components/ProfileBonuses/ProfileBonuses'
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import getCookies from '../../functions/getCookies'
import { ProfileOrders } from './components/ProfileOrders/ProfileOrders'
import { GetApiHeaders } from '../../functions/getApiHeaders'

export const Profile = () => {
  const [userProf, setUserProf] = useState({});
  const [profileInfo, setProfileInfo] = useState(true);
  const [profileOrders, setProfileOrders] = useState(false);
  const [profileBonus, setProfileBonus] = useState(false); 

  useEffect(() => {
    axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('cookieToken')}` 
    axios.get(getApiLink('/api/user/profile'), {headers: GetApiHeaders()})
      .then(({data}) => {
        setUserProf(data.data)
      })
      .catch((error) => {
        console.log('user undefined', error );
      })
  }, [])

  const handleProfInfoClick = () => {
    setProfileInfo(true);
    setProfileOrders(false);
    setProfileBonus(false);
  }

  const handleProfOrdersClick = () => {
    setProfileInfo(false);
    setProfileOrders(true);
    setProfileBonus(false);
  }

  const handleProfBonusClick = () => {
    setProfileInfo(false);
    setProfileOrders(false);
    setProfileBonus(true);
  }

  return (
    <>
      <BackGroundDecor/>

      <BreadCrumbs pages={[{page: 'Личный кабинет'}]}/>

      <section className="account container">

        <SectionTitle title={'Личный кабинет'} ClassTitle={'account__title'}/>

        <div className="account__aside" data-sticky-container>

          <ProfileNav
            onProfInfo={handleProfInfoClick}
            onProfOrders={handleProfOrdersClick}
            onProfBonus={handleProfBonusClick}
          />

        </div>

        <div className="account__main">

          {profileInfo && <ProfileInfo userData={userProf}/>}

          {profileOrders && <ProfileOrders/>}

          {profileBonus && <ProfileBonuses/>}

        </div>
      </section>

    </>
  )
}
