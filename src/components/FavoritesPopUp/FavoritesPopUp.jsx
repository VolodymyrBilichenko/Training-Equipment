import React from 'react'

export const FavoritesPopUp = () => {
    return (
        <div className="popup" id="favorites-popup" style={{display: 'none'}}>
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
                            Товары из избранного
                        </h2>
                        <form method="post" className="popup-form">
                            <label className="popup-form__item">
                                <span className="is-required">E-mail</span>
                                <span className="input-label">
                                    <input type="email" name="email" required placeholder="Введите свой email" className="input"/>
                                </span>
                            </label>
                            <button className="popup-form__submit button is-mode-1" type="submit">
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
