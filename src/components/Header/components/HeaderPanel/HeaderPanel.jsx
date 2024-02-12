import React from 'react'
import { HeaderPanelPhone } from './components/HeaderPanelPhone/HeaderPanelPhone'
import { HeaderPanelLanguage } from './components/HeaderPanelLanguage/HeaderPanelLanguage'

export const HeaderPanel = () => {
  return (
    <div className="header__panel visible-on-desktop container is-large">

        <HeaderPanelPhone/>

        <div className="header__info is-fill-auto">
            <svg width="20" height="20" viewBox="0 0 48 48">
                <use xlinkHref="#verifed"></use>
            </svg>
            <b>Учасник Prozorromarket</b>
        </div>

        <HeaderPanelLanguage/>
        
        <div className="header__info">
            <svg width="20" height="20" viewBox="0 0 48 48">
                <use xlinkHref="#map-point"></use>
            </svg>
            <b>Украина, Чернигов, ул. Старобелоусская, 63</b>
        </div>
        <div className="header__info">
            <svg width="20" height="20" viewBox="0 0 48 48">
                <use xlinkHref="#time"></use>
            </svg>
            <b>ПН-ПТ с 09:00 до 18:00</b>
        </div>
    </div>
  )
}
