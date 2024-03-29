import React, { useEffect, useState } from 'react'
import { HeaderPanelPhone } from './components/HeaderPanelPhone/HeaderPanelPhone'
import { HeaderPanelLanguage } from './components/HeaderPanelLanguage/HeaderPanelLanguage'
import axios from 'axios';
import { getApiLink } from '../../../../api/getApiLink';
import {toast} from "react-toastify";

export const HeaderPanel = () => {
    const [staticData, setStaticData] = useState([]);

    const linkAdress = staticData.find(item => item.key === 'address')
    const workDays = staticData.find(item => item.key === 'working_hours')


    useEffect(() => {
        const configHeader = {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json",
            }
        }

        axios.get(getApiLink('/api/static/data'), configHeader)
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
    <div className="header__panel visible-on-desktop container is-large">

        <HeaderPanelPhone staticData={staticData}/>

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
            <b>{linkAdress ? linkAdress.value : ''}</b>
        </div>
        <div className="header__info">
            <svg width="20" height="20" viewBox="0 0 48 48">
                <use xlinkHref="#time"></use>
            </svg>
            <b>{workDays ? workDays.value : ''}</b>
        </div>
    </div>
  )
}
