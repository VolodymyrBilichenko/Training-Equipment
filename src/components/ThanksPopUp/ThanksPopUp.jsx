import React from 'react'

export const ThanksPopUp = () => {
    return (
        <div className="popup" id="thanks-popup" style={{display: 'none'}}>
            <div className="popup-wrapper">
                <div className="popup-bg popup-close"></div>
                <div className="popup-body">
                    <button type="button" className="popup-close-btn popup-close" title="Закрити">
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
