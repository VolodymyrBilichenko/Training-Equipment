import React, {useContext, useState} from 'react'
import {PopupContext} from '../../App';
import {getApiLink} from '../../api/getApiLink'
import axios from 'axios';
import setCookie from '../../functions/setCookie';
import {setUser} from "../../redux/toolkitSlice";
import {useDispatch} from "react-redux";
import { errorTypes } from '../../constants.js';

export const LoginPopUp = ({handleClosePopUp}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch()

    const handleShowPass = () => {
        setShowPass(!showPass);
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setErrorMessage('')

        axios.post(getApiLink('/api/auth/login'), {
            email,
            password
        }).then((res) => {
            if (res.status === 200) {
                setEmail('')
                setPassword('')
                dispatch(setUser(res.data.data))
            }

            setCookie('cookieToken', res.data.data.token);
            handleClosePopUp();
        }).catch(error => {
            setErrorMessage(error?.response?.data?.message ?? error?.response?.data?.error ?? "")
            console.log(error);
        })
    }


    const SetPopContext = useContext(PopupContext);

    return (
        <div className="popup-wrapper">
            <div className="popup-bg popup-close" onClick={handleClosePopUp}></div>
            <div className="popup-body">
                <button type="button" onClick={handleClosePopUp} className="popup-close-btn popup-close"
                        title="Закрити">
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
                                    <input type="email" name="email" required placeholder="Введите свой email"
                                           className="input"
                                           value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </span>
                        </label>
                        <div className="popup-form__item">
                            <span className="is-required">Пароль</span>
                            <span className="input-label">
                                    <input type={showPass ? 'text' : 'password'} name="password" required
                                           placeholder="Введите пароль" className="input"
                                           value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        className={showPass ? 'password-toggle password-toggle_active' : 'password-toggle'}
                                        onClick={handleShowPass} type="button" title="Показать/скрыть пароль">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <use xlinkHref="#visibility"></use>
                                        </svg>
                                    </button>
                                </span>
                        </div>
                        <p className='error-message'>{errorMessage && errorTypes[errorMessage]}</p>
                        <div className="popup-form__text">
                            <p>
                                <button onClick={_ => SetPopContext('resetPass')} type={"button"}
                                        className="open-popup popup-close">Забули пароль?
                                </button>
                                <br/><br/>
                                <button onClick={_ => SetPopContext('register')} type={"button"}
                                        className="open-popup popup-close">Зареєструватися
                                </button>
                            </p>
                        </div>
                        <div className="g-recaptcha" data-sitekey="6Lc7nvgpAAAAAAJsyvTKiul7qu9eq3pKQ9RAdNW9"></div>
                        <button className="popup-form__submit button is-mode-1" type="submit">
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
