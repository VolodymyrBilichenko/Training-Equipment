import React, { useContext } from 'react'
import { PopupContext } from '../../App';

export const ThanksPopUp = ({modal}) => {
    const SetPopContext = useContext(PopupContext);

    const handleClosePopUp = () => {
        SetPopContext('');
    }

    return (
        <div className={`popup ${modal ? 'is-active' : ''}`} id="thanks-popup" style={{display: 'block'}}>
            <div className="popup-wrapper">
                <div onClick={handleClosePopUp} className="popup-bg popup-close"></div>
                <div className="popup-body">
                    <button onClick={handleClosePopUp} type="button" className="popup-close-btn popup-close" title="Закрити">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <use xlinkHref="#close-3"></use>
                        </svg>
                    </button>
                    <div className="popup-container">
                        <h2 className="popup-title title">
                            Спасибо
                        </h2>
                        <div className="popup-text">
                            <p>
                                Ваше Коммерческое предложение будет отправлено менеджером в ближайшее время
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
