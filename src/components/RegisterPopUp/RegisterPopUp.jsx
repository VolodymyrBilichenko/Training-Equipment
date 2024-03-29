import React, {useContext, useState} from 'react'
import getCookies from '../../functions/getCookies';
import {useDispatch, useSelector} from 'react-redux';
import {handleRegistration} from '../../api/registration';
import {useNavigate} from 'react-router-dom';
import {PopupContext} from '../../App';

export const RegisterPopUp = ({modal}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const SetPopContext = useContext(PopupContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const userInfo = useSelector(state => state.toolkit.user)
    const isLogin = getCookies('token')
    if (isLogin && userInfo) {
        return 'Ви вже в системі!'
    }


    const handleClosePopUp = () => {
        SetPopContext('');
    }

    const handleShowPass = () => {
        setShowPass(!showPass);
    }


    return (
        <div className={`popup ${modal ? 'is-active' : ''}`} id="register-popup" style={{display: 'block'}}>
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
                            Регистрация
                        </h2>
                        <div className="popup-text">
                            <p>
                                Регистрация позволит Вам получить накопительную скидку и купить следующий заказ по более
                                выгодной цене
                            </p>
                        </div>
                        <form onSubmit={e => handleRegistration(e,
                            name,
                            email,
                            phone,
                            pass,
                            setSuccess,
                            setError,
                            setName,
                            setEmail,
                            setPhone,
                            setPass,
                            navigate,
                            dispatch,
                            SetPopContext
                        )} method="post" className="popup-form">
                            <label className="popup-form__item">
                                <span className="is-required">ФИО Контактного лица</span>
                                <span className="input-label">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"
                                           name="name" required placeholder="Введите имя" defaultValue="Игорь Иванович"
                                           className="input"/>
                                </span>
                            </label>
                            <label className="popup-form__item">
                                <span className="is-required">E-mail</span>
                                <span className="input-label">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                                           name="email" required placeholder="Введите свой email" className="input"/>
                                </span>
                            </label>
                            <label className="popup-form__item">
                                <span className="is-required">Телефон</span>
                                <span className="input-label">
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel"
                                           name="phone" required placeholder="Введите номер телефона"
                                           className="input"/>
                                </span>
                            </label>
                            <div className="popup-form__item">
                                <span className="is-required">Пароль</span>
                                <span className="input-label">
                                    <input value={pass} onChange={(e) => setPass(e.target.value)} type={showPass ? 'text' : 'password'}
                                           name="password" required placeholder="Введите пароль" className="input"/>
                                    <button className={showPass ? 'password-toggle password-toggle_active' : 'password-toggle'} onClick={handleShowPass} type="button" title="Показать/скрыть пароль">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <use xlinkHref="#visibility"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <p>{error}</p>
                            <p>{success}</p>
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
