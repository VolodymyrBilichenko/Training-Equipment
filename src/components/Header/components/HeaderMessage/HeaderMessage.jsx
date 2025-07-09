import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export const HeaderMessage = () => {
  const [isOpen, setIsopen] = useState(true);

  const handleClose = () => {
    setIsopen(false);
  }

  const { t } = useTranslation();

  return (
    <div className={`header__message ${isOpen === false ? 'is-hidden' : ''} `}>
        <div className="header__message--body">
            <NavLink to={'/about'} className="header__message--text">
            <svg width="20" height="20" viewBox="0 0 48 48">
                <use xlinkHref="#delivery"></use>
            </svg>
            <b>{t('free_shipping')}</b>
            </NavLink>
            <button onClick={handleClose} className="header__message--close" type="button">
              <svg width="20" height="20" viewBox="0 0 20 20">
                  <use xlinkHref="#close-2"></use>
              </svg>
            </button>
        </div>
    </div>
    
  )
}
