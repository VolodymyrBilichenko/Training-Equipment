import React from 'react'
import {initReactI18next} from "react-i18next";
// import {useTranslation} from "react-i18next";
import i18n from "i18next";

import ENLang from './../../../../../../languages/en.json'
import RULang from './../../../../../../languages/ru.json'
import UALang from './../../../../../../languages/ua.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: ENLang
            },
            ru: {
                translation: RULang
            },
            ua: {
                translation: UALang
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export const HeaderPanelLanguage = () => {

    // const {t} = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className="header__drop-down">
            <button className="header__drop-down--target" type="button">
                <svg width="20" height="20" viewBox="0 0 48 48">
                    <use xlinkHref="#language"></use>
                </svg>
                <span>
                    {i18n.language}
                </span>
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
    )
}
