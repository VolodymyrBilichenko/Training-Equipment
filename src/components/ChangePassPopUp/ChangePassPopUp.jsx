import React from 'react'

export const ChangePassPopUp = () => {
    return (
        <div className="popup" id="change-password-popup" style={{display: 'none'}}>
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
                            Изменение пароля
                        </h2>
                        <form method="post" className="popup-form">
                            <label className="popup-form__item">
                                <span className="is-required">Текущий или временный пароль</span>
                                <span className="input-label">
                                    <input type="password" name="current-password" required placeholder="Введите пароль" className="input"/>
                                    <button className="password-toggle" type="button" title="Показать/скрыть пароль">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <use xlinkHref="#visibility"></use>
                                        </svg>
                                    </button>
                                </span>
                            </label>
                            <div className="popup-form__text">
                                <p>
                                    <a href="#reset-password-popup" className="open-popup popup-close">Забули пароль?</a>
                                </p>
                            </div>
                            <label className="popup-form__item">
                                <span className="is-required">Новый пароль</span>
                                <span className="input-label">
                                    <input type="password" name="new-password" required placeholder="Введите новый пароль" className="input"/>
                                    <button className="password-toggle" type="button" title="Показать/скрыть пароль">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <use xlinkHref="#visibility"></use>
                                        </svg>
                                    </button>
                                </span>
                            </label>
                            <label className="popup-form__item">
                                <span className="is-required">Новый пароль ещё раз</span>
                                <span className="input-label">
                                    <input type="password" name="new-password-2" required placeholder="Введите еще раз новый пароль" className="input"/>
                                    <button className="password-toggle" type="button" title="Показать/скрыть пароль">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <use xlinkHref="#visibility"></use>
                                        </svg>
                                    </button>
                                </span>
                            </label>
                            <button className="popup-form__submit button is-mode-1" type="submit">
                                сохранить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
