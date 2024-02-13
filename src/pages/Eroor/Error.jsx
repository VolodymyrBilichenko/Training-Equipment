import React from 'react'
import { NavLink } from 'react-router-dom'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'

import Decor from '../../assets/img/decor-hero-background.png'

export const Error = () => {
    return (
        <div className='main'>
            <div className="main__background" style={{backgroundImage: `url(${Decor})`, paddingTop: '24%'}} aria-hidden="true"></div>

            <BreadCrumbs pages={[{page: 'Помилка 404'}]}/>

            <section className="not-found container">
                <div className="not-found__col">
                    <h2 className="not-found__title section-title">
                        Помилка 404
                    </h2>
                    <h3 className="not-found__sub-title title">
                        Сторінку, на яку ви перейшли, не знайдено.
                    </h3>
                    <div className="not-found__text">
                        <p>Якщо Ви перейшли на цю сторінку за посиланням з листа, переконайтеся, що посилання не було перекручено вашим поштовим клієнтом. </p>
                        <p>У разі, якщо посилання в листі розділено на частини переносами рядка, ви можете заново відтворити його, скопіювавши частини по черзі в адресний рядок браузера.</p>
                    </div>
                    <NavLink to={'/'} className="not-found__button button">
                        На головну сторінку
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
