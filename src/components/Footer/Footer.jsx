import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FooterTel } from './components/FooterTel/FooterTel'
import { FooterContacts } from './components/FooterContacts/FooterContacts'
import { FooterSocial } from './components/FooterSocial/FooterSocial'

import Logotype from '../../assets/img/logo.png' 
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import {GetApiHeaders} from "../../functions/getApiHeaders";
import {toast} from "react-toastify";

export const Footer = () => {
    const [socialData, setSocialData] = useState([]);

    const socDataTxt = socialData.filter(item => item.key === 'footer')


    useEffect(() => {
        axios.get(getApiLink('/api/static/data'), {headers: GetApiHeaders()})
            .then(({data}) => {
                setSocialData(data.data);
            })
            .catch((error) => {
                toast.error("Возникла неизведанная ошибка")
            })
    }, [])

  return (
    <footer className="footer container">

        <div className="footer__logo">
            <NavLink to={'/'} className="footer__logo--link">
                <picture>
                    <img src={Logotype} alt="logotype" width="269" height="54" loading="lazy" className="footer__logo--img"/>
                </picture>
            </NavLink>
        </div>

        <div className="footer__text">
            {socDataTxt.length > 0 && <p>{socDataTxt[0].value}</p>}
        </div>

        <FooterTel socialData={socialData}/>

        <FooterContacts socialData={socialData}/>

        <FooterSocial socialData={socialData}/>

        <div className="footer__copyright">
            © 2019-2023 Навчальне Обладнання. All rights reserved
        </div>
    </footer>
  )
}
