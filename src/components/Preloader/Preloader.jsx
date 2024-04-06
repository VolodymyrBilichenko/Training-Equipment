import React from 'react'

import bgdDecor from '../../assets/img/index/hero/background-decor.png' 
import bgdDecorElem from '../../assets/img/decor-element.png' 
import uaLogo from '../../assets/img/ua-min-logo.svg' 

export const Preloader = () => {
    return (
        <section class="preloader container">
			<div class="preloader__background" aria-hidden="true">
				<div class="preloader__background_image">
					<picture>
						<img src={bgdDecor} alt="" width="0" height="0" loading="lazy"/>
					</picture>
				</div>
				<div class="preloader__background_image">
					<picture>
						<img src={bgdDecorElem} alt="" width="0" height="0" loading="lazy"/>
					</picture>
				</div>
			</div>
			<div class="preloader__logo">
				<img src={uaLogo} alt="" width="177" height="140" loading="lazy"/>
				<b>Навчальне  Обладнання</b>
			</div>
			<div class="preloader__text">
				<span>Все,</span>
				<span>Що</span>
				<span>Необхідно</span>
			</div>
		</section>   
    )
}
