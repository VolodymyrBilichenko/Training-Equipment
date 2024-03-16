import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderAddNavDesk = () => {

    

    return (
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
                    <NavLink to={'/favorites'} title="Обране">
                        <svg width="26" height="26" viewBox="0 0 48 48">
                            <use xlinkHref="#favorite"></use>
                        </svg>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/basket'} title="Кошик">
                        <svg width="26" height="26" viewBox="0 0 48 48">
                            <use xlinkHref="#cart"></use>
                        </svg>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
