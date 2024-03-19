import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getApiLink } from '../../../../../api/getApiLink';

export const MainHeroSearch = ({searchPlaceholder}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleInputQuery = (evt) => {
        setSearchQuery(evt.target.value)
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSearchQuery('');
        console.log('search:', searchQuery);
        navigate(`/search/${searchQuery}`)
    }

    useEffect(() => {
        axios.get(getApiLink(`/api/products/get?search=${searchQuery}`)) 
            .then(({data}) => {
                setProducts(data.data)
            })
            .catch((error) => {
                console.log('products from search undefined', error);
            })
    }, [searchQuery])

    console.log('prod',products);

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
