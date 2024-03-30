import React from 'react'
import {NavLink} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

// i18n
//     .use(initReactI18next)
//     .init({
//         resources: {
//             en: {
//                 translation: {
//                     "about_company": "About company"
//                 }
//             },
//             ru: {
//                 translation: {
//                     "about_company": "Про компанію"
//                 }
//             }
//         },
//         lng: "en",
//         fallbackLng: "en",
//
//         interpolation: {
//             escapeValue: false
//         }
//     });

export const HeaderNavigation = ({isOpen}) => {

    const { t } = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <nav className={'header__nav ' + (isOpen ? 'is-mobile-menu-active' : '')}>
            <div className="header__nav--body">
                <ul className="header__nav--list">

                    <li>
                        <NavLink to={'/about'}>
                            {t("menu_point_1")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/catalog'}>
                            {t("menu_point_2")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/pricelist'}>
                            {t("menu_point_3")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about#consultation'}>
                            {t("menu_point_4")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/certificate'}>
                            {t("menu_point_5")}
                        </NavLink>
                    </li>
                </ul>
                <div className="header__add visible-on-mob">
                    <ul className="header__tel">
                        <li>
                            <a href="tel:+380737040887">
                                <svg width="20" height="20" viewBox="0 0 48 48">
                                    <use xlinkHref="#tel"></use>
                                </svg>
                                <span>
                                +380 (73) 704-08-87
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+380957040887">
                            <span>
                                +380 (95) 704-08-87
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+380687040887">
                            <span>
                                +380 (68) 704-08-87
                            </span>
                            </a>
                        </li>
                    </ul>
                    <div className="header__drop-down">
                        <button className="header__drop-down--target" type="button">
                            <svg width="20" height="20" viewBox="0 0 48 48">
                                <use xlinkHref="#language"></use>
                            </svg>
                            <span>UA</span>
                            <svg width="20" height="20" viewBox="0 0 48 48">
                                <use xlinkHref="#drop-down-arrow"></use>
                            </svg>
                        </button>
                        <div className="header__drop-down--block">
                            <ul className="header__drop-down--list">
                                <li>
                                    <button onClick={_ => changeLanguage("ua")}>
                                        UA
                                    </button>
                                </li>
                                <li>
                                    <button onClick={_ => changeLanguage("ru")}>
                                        RU
                                    </button>
                                </li>
                                <li>
                                    <button onClick={_ => changeLanguage("en")}>
                                        EN
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__info is-fill-auto">
                        <svg width="20" height="20" viewBox="0 0 48 48">
                            <use xlinkHref="#verifed"></use>
                        </svg>
                        <b>Учасник Prozorromarket</b>
                    </div>
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
            </div>
        </nav>
    )
}
