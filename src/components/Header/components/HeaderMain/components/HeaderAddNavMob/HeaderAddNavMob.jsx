import React from 'react'

export const HeaderAddNavMob = () => {
  return (
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
  )
}
