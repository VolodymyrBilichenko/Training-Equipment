import React from 'react'

export const HeaderNavigation = ({ isOpen }) => {
  return (
    <nav className={'header__nav ' + (isOpen ? 'is-mobile-menu-active' : '')}>
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
  )
}
