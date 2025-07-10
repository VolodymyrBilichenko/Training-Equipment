import React from 'react'
import { NavLink } from 'react-router-dom'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { useTranslation } from 'react-i18next';

import Decor from '../../assets/img/decor-hero-background.png'

export const Error = () => {
    const { t } = useTranslation();
    return (
        <div className='main'>
            <div className="main__background" style={{backgroundImage: `url(${Decor})`, paddingTop: '24%'}} aria-hidden="true"></div>

            <BreadCrumbs pages={[{page: t('error_404_title')}]}/>

            <section className="not-found container">
                <div className="not-found__col">
                    <h2 className="not-found__title section-title">
                        {t('error_404_title')}
                    </h2>
                    <h3 className="not-found__sub-title title">
                        {t('error_404_subtitle')}
                    </h3>
                    <div className="not-found__text">
                        <p>{t('error_404_text1')}</p>
                        <p>{t('error_404_text2')}</p>
                    </div>
                    <NavLink to={'/'} className="not-found__button button">
                        {t('to_main_page')}
                    </NavLink>
                </div>
                <div className="not-found__col visible-on-desktop">
                    <strong className="not-found__code">
                        404
                    </strong>
                </div>
            </section>
        </div>
    )
}
