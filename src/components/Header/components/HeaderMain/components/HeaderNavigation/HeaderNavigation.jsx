import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import i18n from "i18next";
import { useTranslation} from "react-i18next";
import { GetApiHeaders } from '../../../../../../functions/getApiHeaders';
import axios from 'axios';
import { getApiLink } from '../../../../../../api/getApiLink';
import { toast } from 'react-toastify';


export const HeaderNavigation = ({ isOpen, handleOpen }) => {
    const [staticData, setStaticData] = useState([]);

    const phoneStaticData = staticData.filter(item => item.key === "phone_number")
    const addresStaticData = staticData.filter(item => item.key === "address")
    const workStaticData = staticData.filter(item => item.key === "working_hours")

    const { t } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    useEffect(() => {

        axios.get(getApiLink('/api/static/data'), {headers: GetApiHeaders()})
            .then(({data}) => {
                setStaticData(data.data);
                console.log('contact', data.data);
            })
            .catch((error) => {
                toast.error("Возникла неизведанная ошибка")
                console.log('staticData undefined', error);
            })
    }, [])

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
                        {phoneStaticData?.map(item => (
                            <li key={item.id}>
                                <a href={`tel:${item.value}`}>
                                    <svg width="20" height="20" viewBox="0 0 48 48">
                                        <use xlinkHref="#tel"></use>
                                    </svg>
                                    <span>
                                        {item.value}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={'header__drop-down ' + (!isOpen ? 'is-active' : '')} onClick={handleOpen}>
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
                        <b>{addresStaticData.length > 0 && addresStaticData[0].value}</b>
                    </div>
                    <div className="header__info">
                        <svg width="20" height="20" viewBox="0 0 48 48">
                            <use xlinkHref="#time"></use>
                        </svg>
                        <b>{workStaticData.length > 0 && workStaticData[0].value}</b>
                    </div>
                </div>
            </div>
        </nav>
    )
}
