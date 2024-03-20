import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FooterTel } from './components/FooterTel/FooterTel'
import { FooterContacts } from './components/FooterContacts/FooterContacts'
import { FooterSocial } from './components/FooterSocial/FooterSocial'

import Logotype from '../../assets/img/logo.png' 
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'

export const Footer = () => {
    const [socialData, setSocialData] = useState([]);

    useEffect(() => {
        const configHeader = {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json",
            }
        }

        axios.get(getApiLink('/api/static/data'), configHeader)
            .then(({data}) => {
                setSocialData(data.data);
            })
            .catch((error) => {
                console.log('socialData undefined', error);
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
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
            </p>
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