import React from 'react'

export const ResetPassPopUp = () => {
    return (
        <div className="popup" id="reset-password-popup" style={{display: 'none'}}>
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
                            Восстановление пароля
                        </h2>
                        <div className="popup-text">
                            <p>
                                Введите свою почту и мы отправим вам письмо с временным паролем
                            </p>
                        </div>
                        <form method="post" className="popup-form">
                            <label className="popup-form__item">
                                <span className="is-required">E-mail</span>
                                <span className="input-label">
                                    <input type="email" name="email" required placeholder="Введите свой email" className="input"/>
                                </span>
                            </label>
                            <button className="popup-form__submit button is-mode-1" type="submit">
                                Продолжить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
