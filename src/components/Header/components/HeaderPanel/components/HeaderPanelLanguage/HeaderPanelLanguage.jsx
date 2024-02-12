import React from 'react'

export const HeaderPanelLanguage = () => {
  return (
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
  )
}
