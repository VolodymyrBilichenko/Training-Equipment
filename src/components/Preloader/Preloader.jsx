import React from 'react'

export const Preloader = () => {
    return (
        <section class="preloader container">
			<div class="preloader__background" aria-hidden="true">
				<div class="preloader__background_image">
					<picture>
						<img src="img/index/hero/background-decor.png" alt="" width="0" height="0" loading="lazy"/>
					</picture>
				</div>
				<div class="preloader__background_image">
					<picture>
						<img src="img/decor-element.png" alt="" width="0" height="0" loading="lazy"/>
					</picture>
				</div>
			</div>
			<div class="preloader__logo">
				<img src="img/ua-min-logo.svg" alt="" width="177" height="140" loading="lazy"/>
				<b>Навчальне  Обладнання</b>
			</div>
			<div class="preloader__text">
				<span >Все,</span>
				<span >Що</span>
				<span >Необхідно</span>
			</div>
		</section>   
    )
}
