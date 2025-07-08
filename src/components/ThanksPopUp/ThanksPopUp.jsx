import React, {useContext} from 'react'
import {PopupContext} from '../../App';
import { useTranslation } from 'react-i18next';

export const ThanksPopUp = ({handleClosePopUp}) => {
    const { t } = useTranslation();

    return (
        <div className="popup-wrapper">
            <div onClick={handleClosePopUp} className="popup-bg popup-close"></div>
            <div className="popup-body">
                <button onClick={handleClosePopUp} type="button" className="popup-close-btn popup-close"
                        title="Закрити">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <use xlinkHref="#close-3"></use>
                    </svg>
                </button>
                <div className="popup-container">
                    <h2 className="popup-title title">
                        {t('thanks')}
                    </h2>
                    <div className="popup-text">
                        <p>
                            {t('com_suggest')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
