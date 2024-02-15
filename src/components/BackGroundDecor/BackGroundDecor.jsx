import React from 'react'

import DecorHero from '../../assets/img/decor-hero-background.png'
import DecorElem from '../../assets/img/decor-element.png'

export const BackGroundDecor = () => {
    return (
        <React.Fragment>
            <div className="main__background" style={{backgroundImage: `url(${DecorHero})`, paddingTop: '24%'}} aria-hidden="true"></div>
            <div className="main__footer_decor" aria-hidden="true">
                <picture>
                    <img src={DecorElem} alt="DecorElem" width="0" height="0" loading="lazy"/>
                </picture>
            </div>
        </React.Fragment>
    )
}
