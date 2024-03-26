import React, {useState} from 'react'
import {BackGroundDecor} from '../../components/BackGroundDecor/BackGroundDecor'
import {BreadCrumbs} from '../../components/BreadCrumbs/BreadCrumbs'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import {ProfileNav} from './components/ProfileNav/ProfileNav'
import {ProfileBonuses} from './components/ProfileBonuses/ProfileBonuses'
import {ProfileInfo} from './components/ProfileInfo/ProfileInfo'
import {ProfileOrders} from './components/ProfileOrders/ProfileOrders'

export const Profile = () => {
    const [profileInfo, setProfileInfo] = useState(true);
    const [profileOrders, setProfileOrders] = useState(false);
    const [profileBonus, setProfileBonus] = useState(false);

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

                    {profileInfo && <ProfileInfo/>}

                    {profileOrders && <ProfileOrders/>}

                    {profileBonus && <ProfileBonuses/>}

                </div>
            </section>

        </>
    )
}
