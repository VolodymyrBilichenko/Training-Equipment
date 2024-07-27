import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import LogotypePng from '../../../../assets/img/logo.png'
import LogotypeSvg from '../../../../assets/img/logo-min.svg'
import { FunctionHeaderPopup } from '../../../../functions/functions'
import { HeaderAddNavDesk } from './components/HeaderAddNavDesk/HeaderAddNavDesk'
import { HeaderAddNavMob } from './components/HeaderAddNavMob/HeaderAddNavMob'
import { HeaderNavigation } from './components/HeaderNavigation/HeaderNavigation'

export const HeaderMain = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        FunctionHeaderPopup();

    }, [])

  return (
    <div className="header__block container is-large">

        <div className="header__logo">
            <NavLink to={'/'} className="header__logo--link">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <img src={LogotypeSvg} alt="Логотип" width="40" height="40" loading="lazy" className="header__logo--img visible-on-mob"/>
                <picture className="visible-on-desktop">
                    <img src={LogotypePng} alt="Логотип" width="150" height="40" style={{width: '269px'}} loading="lazy" className="header__logo--img"/>
                </picture>
            </NavLink>
        </div>

        <HeaderAddNavMob/>

        <HeaderNavigation isOpen={isOpen} handleOpen={handleOpen}/>

        <HeaderAddNavDesk/>

        <button className={'header__burger ' + (isOpen ? 'is-mobile-menu-active' : '')} onClick={handleOpen} type="button" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
  )
}
