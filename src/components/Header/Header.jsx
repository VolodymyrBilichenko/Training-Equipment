import React from 'react'

import LogotypePng from '../../assets/img/logo.png'
import LogotypeSvg from '../../assets/img/logo-min.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="wrapper">
		<header className="header">
            <div className="header__message">
                <div className="header__message--body">
                    <div className="header__message--text">
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <use xlinkHref="#delivery"></use>
                    </svg>
                    <b>Безкоштовна доставка для бюджетних організацій</b>
                    </div>
                    <button className="header__message--close" type="button">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <use xlinkHref="#close-2"></use>
                    </svg>
                    </button>
                </div>
            </div>
			<div className="header__panel visible-on-desktop container is-large">
				<ul className="header__tel">
					<li>
						<a href="tel:+380737040887">
							<svg width="20" height="20" viewBox="0 0 48 48">
								<use xlinkHref="#tel"></use>
							</svg>
							<span>
								+380 (73) 704-08-87
							</span>
						</a>
					</li>
					<li>
						<a href="tel:+380957040887">
							<span>
								+380 (95) 704-08-87
							</span>
						</a>
					</li>
					<li>
						<a href="tel:+380687040887">
							<span>
								+380 (68) 704-08-87
							</span>
						</a>
					</li>
				</ul>
				<div className="header__info is-fill-auto">
					<svg width="20" height="20" viewBox="0 0 48 48">
						<use xlinkHref="#verifed"></use>
					</svg>
					<b>Учасник Prozorromarket</b>
				</div>
				<div className="header__drop-down">
					<button className="header__drop-down--target" type="button">
						<svg width="20" height="20" viewBox="0 0 48 48">
							<use xlinkHref="#language"></use>
						</svg>
						<span>UA</span>
						<svg width="20" height="20" viewBox="0 0 48 48">
							<use xlinkHref="#drop-down-arrow"></use>
						</svg>
					</button>
					<div className="header__drop-down--block">
						<ul className="header__drop-down--list">
							<li>
								<a href="foo">
									UA
								</a>
							</li>
							<li>
								<a href="foo">
									RU
								</a>
							</li>
							<li>
								<a href="foo">
									EN
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="header__info">
					<svg width="20" height="20" viewBox="0 0 48 48">
						<use xlinkHref="#map-point"></use>
					</svg>
					<b>Украина, Чернигов, ул. Старобелоусская, 63</b>
				</div>
				<div className="header__info">
					<svg width="20" height="20" viewBox="0 0 48 48">
						<use xlinkHref="#time"></use>
					</svg>
					<b>ПН-ПТ с 09:00 до 18:00</b>
				</div>
			</div>
			<div className="header__block container is-large">
				<div className="header__logo">
					<NavLink to={'/'} className="header__logo--link">
						<img src={LogotypeSvg} alt="Логотип" width="40" height="40" loading="lazy" className="header__logo--img visible-on-mob"/>
						<picture className="visible-on-desktop">
							<img src={LogotypePng} alt="Логотип" width="150" height="40" style={{width: '269px', height: '54px'}} loading="lazy" className="header__logo--img"/>
						</picture>
					</NavLink>
				</div>
				<div className="header__add-nav visible-on-mob">
					<ul>
						<li>
							<a href="#login-popup" className="open-popup" title="Акаунт">
								<svg width="26" height="26" viewBox="0 0 48 48">
									<use xlinkHref="#user"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="favorites.html" title="Обране">
								<svg width="26" height="26" viewBox="0 0 48 48">
									<use xlinkHref="#favorite"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="cart.html" title="Кошик">
								<svg width="26" height="26" viewBox="0 0 48 48">
									<use xlinkHref="#cart"></use>
								</svg>
							</a>
						</li>
					</ul>
				</div>
				<nav className="header__nav">
					<div className="header__nav--body">
						<ul className="header__nav--list">
							<li>
								<a href="about-us.html">
									Про компанію
								</a>
							</li>
							<li>
								<a href="catalog.html">
									Каталог
								</a>
							</li>
							<li>
								<a href="pricelist.html">
									Прайс
								</a>
							</li>
							<li>
								<a href="about-us.html#consultation">
									Консультація з підготовки до тендеру
								</a>
							</li>
							<li>
								<a href="certificates-and-orders.html">
									Сертифікати та накази
								</a>
							</li>
						</ul>
						<div className="header__add visible-on-mob">
							<ul className="header__tel">
								<li>
									<a href="tel:+380737040887">
										<svg width="20" height="20" viewBox="0 0 48 48">
											<use xlinkHref="#tel"></use>
										</svg>
										<span>
											+380 (73) 704-08-87
										</span>
									</a>
								</li>
								<li>
									<a href="tel:+380957040887">
										<span>
											+380 (95) 704-08-87
										</span>
									</a>
								</li>
								<li>
									<a href="tel:+380687040887">
										<span>
											+380 (68) 704-08-87
										</span>
									</a>
								</li>
							</ul>
							<div className="header__drop-down">
								<button className="header__drop-down--target" type="button">
									<svg width="20" height="20" viewBox="0 0 48 48">
										<use xlinkHref="#language"></use>
									</svg>
									<span>UA</span>
									<svg width="20" height="20" viewBox="0 0 48 48">
										<use xlinkHref="#drop-down-arrow"></use>
									</svg>
								</button>
								<div className="header__drop-down--block">
									<ul className="header__drop-down--list">
										<li>
											<a href="foo">
												UA
											</a>
										</li>
										<li>
											<a href="foo">
												RU
											</a>
										</li>
										<li>
											<a href="foo">
												EN
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="header__info is-fill-auto">
								<svg width="20" height="20" viewBox="0 0 48 48">
									<use xlinkHref="#verifed"></use>
								</svg>
								<b>Учасник Prozorromarket</b>
							</div>
							<div className="header__info">
								<svg width="20" height="20" viewBox="0 0 48 48">
									<use xlinkHref="#map-point"></use>
								</svg>
								<b>Украина, Чернигов, ул. Старобелоусская, 63</b>
							</div>
							<div className="header__info">
								<svg width="20" height="20" viewBox="0 0 48 48">
									<use xlinkHref="#time"></use>
								</svg>
								<b>ПН-ПТ с 09:00 до 18:00</b>
							</div>
						</div>
					</div>
				</nav>
				<div className="header__add-nav visible-on-desktop">
					<ul>
						<li>
							<a href="#login-popup" className="open-popup" title="Акаунт">
								<svg width="26" height="26" viewBox="0 0 48 48">
									<use xlinkHref="#user"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="favorites.html" title="Обране">
								<svg width="26" height="26" viewBox="0 0 48 48">
									<use xlinkHref="#favorite"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="cart.html" title="Кошик">
								<svg width="26" height="26" viewBox="0 0 48 48">
									<use xlinkHref="#cart"></use>
								</svg>
							</a>
						</li>
					</ul>
				</div>
				<button className="header__burger" type="button" aria-label="Menu">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</header>
    </div>
  )
}
