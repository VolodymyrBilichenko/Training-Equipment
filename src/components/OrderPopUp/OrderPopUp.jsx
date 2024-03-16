import React from 'react'

export const OrderPopUp = () => {
    return (
        <div className="popup" id="order-popup" style={{display: 'none'}}>
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
                            Оформление заказа
                        </h2>
                        <div className="popup-text">
                            <p>
                                Если Вы хотите получить персональную скидку или
                                стать участником бонусной системы -
                                <a href="#register-popup" className="open-popup popup-close">Зарегистрируйтесь</a> или
                                <a href="#login-popup" className="open-popup popup-close">Авторизуйтесь</a>
                                в личном кабинете, прежде чем оформить этот заказ
                            </p>
                        </div>
                        <form method="post" className="popup-form">
                            <label className="popup-form__item">
                                <span className="is-required">E-mail</span>
                                <span className="input-label">
                                    <input type="email" name="email" required placeholder="Введите свой email" className="input"/>
                                </span>
                            </label>
                            <label className="popup-form__item">
                                <span className="is-required">Телефон</span>
                                <span className="input-label">
                                    <input type="tel" name="phone" required placeholder="Введите номер телефона" className="input"/>
                                </span>
                            </label>
                            <label className="popup-form__checkbox checkbox">
                                <input type="checkbox" name="receive-email" className="checkbox-input"/>
                                <span className="checkbox-element">
                                    <svg width="17" height="17" viewBox="0 0 17 17">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </span>
                                <span className="checkbox-text">
                                    Бажаю отримати на адресу електронної пошти примірник Договору поставки та Рахунок
                                </span>
                            </label>
                            <button className="popup-form__submit button is-mode-1" type="submit">
                                Оформити замовлення
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
