import React, { useState } from 'react'
import { getApiLink } from '../../api/getApiLink';
import { GetApiHeaders } from '../../functions/getApiHeaders';
import axios from 'axios'
import { useSelector } from 'react-redux';
import getCookies from '../../functions/getCookies';

export const FavoritesPopUp = ({ handleClosePopUp }) => {
    const [email, setEmail] = useState('');
    const dataFavorites = useSelector(state => state.toolkit.favorites);

    console.log(dataFavorites);

    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newDataArr = dataFavorites.map(item => {
            return {
                "product_id": item,
            }
        })

        const dataToSend = {
            "products": newDataArr,
            "email": email,
        }

        console.log(dataToSend);

        axios.defaults.headers.common['Authorization'] = `Bearer ${getCookies("cookieToken")}`;
        axios.post(getApiLink('/api/send-commercial-offer'), dataToSend, {headers: GetApiHeaders()})
            .then(({data}) => {
                console.log(data);
                // handleNavPopupThx();
            })
            .catch(error => {
                console.error('Error:', error);                
            })
    }

    return (
        <div className="popup-wrapper">
            <div className="popup-bg popup-close" onClick={handleClosePopUp}></div>
            <div className="popup-body">
                <button type="button" className="popup-close-btn popup-close" onClick={handleClosePopUp} title="Закрити">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <use xlinkHref="#close-3"></use>
                    </svg>
                </button>
                <div className="popup-container">
                    <h2 className="popup-title title">
                        Товары из избранного
                    </h2>
                    <form method="post" className="popup-form" onSubmit={handleFormSubmit}>
                        <label className="popup-form__item">
                            <span className="is-required">E-mail</span>
                            <span className="input-label">
                                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Введите свой email" className="input"/>
                            </span>
                        </label>
                        <button className="popup-form__submit button is-mode-1" type="submit">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
