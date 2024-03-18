import React, { useContext, useState } from 'react'
import { PopupContext } from '../../App';
import { useDispatch } from 'react-redux';
import { getApiLink } from '../../api/getApiLink'
import axios from 'axios';
import { login } from '../../api/login';
import setCookie from '../../functions/setCookie';

export const LoginPopUp = ({modal}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const SetPopContext = useContext(PopupContext);

    const handleClosePopUp = () => {
        SetPopContext('');
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')

        axios.post(getApiLink('/api/auth/login'), {
            email, 
            password
        }).then((res) => {
            if (res.status === 200) {
                setEmail('')
                setPassword('')

                login(res.data, dispatch)
                
            }
            console.log(res);
            setCookie('cookieToken', res.data.data.token );
        })
    }

    const handleNavigateReg = () => {
        SetPopContext('register')
    }

    return (
        <div className={`popup ${modal ? 'is-active' : ''}`} id="login-popup">
            <div className="popup-wrapper">
                <div className="popup-bg popup-close" onClick={handleClosePopUp}></div>
                <div className="popup-body">
                    <button type="button" onClick={handleClosePopUp} className="popup-close-btn popup-close" title="Закрити">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <use xlinkHref="#close-3"></use>
                        </svg>
                    </button>
                    <div className="popup-container">
                        <h2 className="popup-title title">
                            Вход
                        </h2>
                        <form onSubmit={handleLogin} method="post" className="popup-form">
                            <label className="popup-form__item">
                                <span className="is-required">E-mail</span>
                                <span className="input-label">
                                    <input type="email" name="email" required placeholder="Введите свой email" className="input"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </span>
                            </label>
                            <div className="popup-form__item">
                                <span className="is-required">Пароль</span>
                                <span className="input-label">
                                    <input type="password" name="password" required placeholder="Введите пароль" className="input"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className="password-toggle" type="button" title="Показать/скрыть пароль">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <use xlinkHref="#visibility"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <p>{error}</p>
                            <div className="popup-form__text">
                                <p>
                                    <a href="#reset-password-popup" className="open-popup popup-close">Забули пароль?</a>
                                    <br/><br/>
                                    <a href="#register-popup" onClick={handleNavigateReg} className="open-popup popup-close">Зареєструватися</a>
                                </p>
                            </div>
                            <button className="popup-form__submit button is-mode-1" type="submit">
                                Войти
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>   
    )
}
