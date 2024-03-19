import React, { useState } from 'react'

export const HeaderMessage = () => {
  const [isOpen, setIsopen] = useState(true);

  const handleClose = () => {
    setIsopen(false);
  }

  return (
    <div className={`header__message ${isOpen === false ? 'is-hidden' : ''} `}>
        <div className="header__message--body">
            <div className="header__message--text">
            <svg width="20" height="20" viewBox="0 0 48 48">
                <use xlinkHref="#delivery"></use>
            </svg>
            <b>Безкоштовна доставка для бюджетних організацій</b>
            </div>
            <button onClick={handleClose} className="header__message--close" type="button">
              <svg width="20" height="20" viewBox="0 0 20 20">
                  <use xlinkHref="#close-2"></use>
              </svg>
            </button>
        </div>
    </div>
    
  )
}
