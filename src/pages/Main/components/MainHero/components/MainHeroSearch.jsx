import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { toast } from 'react-toastify';

export const MainHeroSearch = ({searchPlaceholder}) => {
    const { search } = useParams();

    const [searchQuery, setSearchQuery] = useState(search);
    const navigate = useNavigate();


    const handleInputQuery = (evt) => {
        setSearchQuery(evt.target.value)
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        const trimmedQuery = searchQuery.trim();
        if (trimmedQuery.length === 0) {
            toast.error('Пошуковий запит не може бути порожнім')
            return;
        }

        const forbiddenChars = /[!@#$%^&*(),.?":{}|<>]/;
        if (forbiddenChars.test(searchQuery)) {
            toast.error('Пошуковий запит містить неприпустимі символи');
            return;
        }

        navigate(`/search/${searchQuery}`);
    }

    return (
        <search className="index-hero__search">
            <form className="index-hero__search--form" method="post" onSubmit={handleSubmit}>
                <label>
                    <input onChange={handleInputQuery} type="search" name="search" placeholder={searchPlaceholder} value={searchQuery} required/>
                </label>
                <button type="submit" title="Пошук">
                    <svg width="26" height="26" viewBox="0 0 48 48">
                        <use xlinkHref="#search"></use>
                    </svg>
                </button>
            </form>
        </search>
    )
}
