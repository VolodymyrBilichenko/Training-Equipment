import React, { useEffect, useState } from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import { GetApiHeaders } from '../../functions/getApiHeaders'

export const AboutUs = () => {
    const [staticData, setStaticData] = useState([]);

    const dataAboutUs = staticData.filter(item => item.key === 'about_us');
    const dataDelivery = staticData.filter(item => item.key === 'delivery');
    const dataPayment = staticData.filter(item => item.key === 'payment');

    const handleSmoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
      
        const scrollOptions = {
          behavior: 'smooth',
          block: 'center',
        };
      
        targetElement.scrollIntoView(scrollOptions);
      };
    

    useEffect(() => {
        axios.get(getApiLink('/api/static/data'), {headers: GetApiHeaders()} )
            .then(({data}) => {
                console.log('static', data.data);
                setStaticData(data.data)
            })
            .catch((error) => {
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
                                    <a href="#about-us" onClick={handleSmoothScroll}>
                                        Про нас
                                    </a>
                                </li>
                                <li>
                                    <a href="#deliv" onClick={handleSmoothScroll}> 
                                        Доставка
                                    </a>
                                </li>
                                <li>
                                    <a href="#payment" onClick={handleSmoothScroll}>
                                        Оплата
                                    </a>
                                </li>
                                <li>
                                    <a href="#consultation" onClick={handleSmoothScroll}>
                                        Консультация
                                    </a>
                                </li>
                                <li>
                                    <a href="#reviews" onClick={handleSmoothScroll}>
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
                                            <img src="img/about-us/about-us-image.png" alt="" width="482" height="482" loading="lazy"/>
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
                                <form className="consultation__form">
                                    <label className="input-label"><input className="input" type="text" name="name" placeholder="Ім’я" required/></label>
                                    <label className="input-label"><input className="input" type="tel" name="phone" placeholder="Телефон" required/></label>
                                    <button type="submit" className="button is-mode-1">Відправити</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}
