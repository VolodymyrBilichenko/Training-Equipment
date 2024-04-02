import React, {useContext, useEffect, useState} from 'react'
import {BackGroundDecor} from '../../components/BackGroundDecor/BackGroundDecor'
import {BreadCrumbs} from '../../components/BreadCrumbs/BreadCrumbs'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import axios from 'axios'
import {getApiLink} from '../../api/getApiLink'
import {GetApiHeaders} from '../../functions/getApiHeaders'

import AboutPh from '../../assets/img/about-us/about-us-image.png'
import {MainReviews} from '../Main/components/MainReviews/MainReviews'
import {toast} from "react-toastify";
import {useLocation} from "react-router-dom";
import { PopupContext } from '../../App'
import getCookies from '../../functions/getCookies'

export const AboutUs = () => {
    const SetPopContext = useContext(PopupContext);
    const [staticData, setStaticData] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const dataAboutUs = staticData.filter(item => item.key === 'about_us');
    const dataDelivery = staticData.filter(item => item.key === 'delivery');
    const dataPayment = staticData.filter(item => item.key === 'payment');

    const location = useLocation();

    const scrollToSection = () => {
        if(!location.hash) return;

        const targetElement = document.querySelector(location.hash);

        const scrollOptions = {
            behavior: 'smooth',
            block: 'start',
        };

        targetElement.scrollIntoView(scrollOptions);
    }

    const handleNavPopupThx = () => {
        SetPopContext('thx')
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            "phone": phone,
            "name": name,
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${getCookies("cookieToken")}`;
        axios.post(getApiLink('/api/consultation/create-request'), dataToSend, {headers: GetApiHeaders()})
            .then(({data}) => {
                console.log(data);
                handleNavPopupThx(); 

                setName("");
                setPhone("");          
            })
            .catch(error => {
                console.error('Error:', error);
            });        
    }  


    useEffect(() => {
        setTimeout(scrollToSection, 1);
    }, [location])


    useEffect(() => {
        axios.get(getApiLink('/api/static/data'), {headers: GetApiHeaders()})
            .then(({data}) => {
                setTimeout(scrollToSection, 100)
                setStaticData(data.data)
            })
            .catch((error) => {
                toast.error("Возникла неизведанная ошибка")
                console.error('static data error', error);
            })
    }, [])

    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{page: 'О компании'}]}/>

            <section className="about-us container">
                <div className="about-us__decor" aria-hidden="true">
                    <picture>
                        <img src="img/decor-element.png" alt="" width="0" height="0" loading="lazy"/>
                    </picture>
                </div>
                <SectionTitle title={'О компании'} ClassTitle={'about-us__title'}/>
                <div className="about-us__wrapper">
                    <div className="about-us__aside" data-sticky-container>
                        <nav className="about-us__aside_nav sticky" data-margin-top="30">
                            <ul>
                                <li>
                                    {/*onClick={handleSmoothScroll}*/}
                                    <a href="#about-us">
                                        Про нас
                                    </a>
                                </li>
                                <li>
                                    {/*onClick={handleSmoothScroll}*/}
                                    <a href="#deliv">
                                        Доставка
                                    </a>
                                </li>
                                <li>
                                    {/*onClick={handleSmoothScroll}*/}
                                    <a href="#payment">
                                        Оплата
                                    </a>
                                </li>
                                <li>
                                    {/*onClick={handleSmoothScroll}*/}
                                    <a href="#consultation">
                                        Консультация
                                    </a>
                                </li>
                                <li>
                                    {/*onClick={handleSmoothScroll}*/}
                                    <a href="#reviews">
                                        Відгуки
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="about-us__main">
                        <div className="about-us__content">
                            <article id="about-us">
                                <h3>Про нас</h3>
                                <div className="about-us__content_row">
                                    <div className="about-us__content_col">
                                        <p>{dataAboutUs.length > 0 ? dataAboutUs[0].value : ''}</p>
                                    </div>
                                    <div className="about-us__content_col">
                                        <picture className="image-aspect-ratio">
                                            <img src={AboutPh} alt="" width="482" height="482" loading="lazy"/>
                                        </picture>
                                    </div>
                                </div>
                            </article>

                            <article id="deliv">
                                <h3>Доставка</h3>
                                <p>{dataDelivery.length > 0 ? dataDelivery[0].value : ''}</p>
                            </article>

                            <article id="payment">
                                <h3>Оплата</h3>
                                <p>{dataPayment.length > 0 ? dataPayment[0].value : ''}</p>
                            </article>

                        </div>
                        <div className="about-us__consultation consultation" id="consultation">
                            <div className="consultation__body">
                                <h3 className="consultation__title title">
                                    Консультация по подготовке к тендеру
                                </h3>
                                <div className="consultation__text">
                                    <p>
                                        Введите свои контактные данные и наш менеджер свяжется с вами
                                    </p>
                                </div>
                                <form className="consultation__form" onSubmit={handleFormSubmit}>
                                    <label className="input-label">
                                        <input className="input" onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Ім’я" required/>
                                    </label>
                                    <label className="input-label">
                                        <input className="input" onChange={e => setPhone(e.target.value)} type="tel" name="phone" placeholder="Телефон" required/>
                                    </label>
                                    <button type="submit" className="button is-mode-1">Відправити</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <MainReviews id="reviews"/>

            </section>
        </>
    )
}
