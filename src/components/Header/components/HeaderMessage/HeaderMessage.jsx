import React from 'react'

export const HeaderMessage = () => {
  return (
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
  )
}
