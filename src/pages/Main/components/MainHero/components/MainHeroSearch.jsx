import React, { useState } from 'react'

export const MainHeroSearch = ({searchPlaceholder}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputQuery = (evt) => {
        setSearchQuery(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSearchQuery('');
        console.log('search:', searchQuery);
    }

    return (
        <search className="index-hero__search">
            <form className="index-hero__search--form" method="post" onSubmit={handleSubmit}>
                <label>
                    <input onChange={handleInputQuery} type="search" name="search" placeholder={searchPlaceholder} value={searchQuery}/>
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