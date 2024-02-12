import React from 'react'

export const HeaderPanelPhone = () => {
  return (
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
  )
}
