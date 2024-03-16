import React from 'react'

export const RegisterPopUp = () => {
    return (
        <div className="popup" id="register-popup" style={{display: 'none'}}>
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
                            Регистрация
                        </h2>
                        <div className="popup-text">
                            <p>
                                Регистрация позволит Вам получить накопительную скидку и купить следующий заказ по более выгодной цене
                            </p>
                        </div>
                        <form method="post" className="popup-form">
                            <label className="popup-form__item">
                                <span className="is-required">ФИО Контактного лица</span>
                                <span className="input-label">
                                    <input type="text" name="name" required placeholder="Введите имя" defaultValue="Игорь Иванович" className="input"/>
                                </span>
                            </label>
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
                            <div className="popup-form__item">
                                <span className="is-required">Пароль</span>
                                <span className="input-label">
                                    <input type="password" name="password" required placeholder="Введите пароль" className="input"/>
                                    <button className="password-toggle" type="button" title="Показать/скрыть пароль">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <use xlinkHref="#visibility"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <div className="popup-form__text">
                                <p>
                                    Регестрируясь на сайте Вы соглашаетесь на <a href="some">обработку личных данных</a>
                                </p>
                            </div>
                            <button className="popup-form__submit button is-mode-1" type="submit">
                                Відправити
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
