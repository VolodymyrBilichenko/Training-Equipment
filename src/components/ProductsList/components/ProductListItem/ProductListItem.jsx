import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addBasketItem, addFavorite, removeBasketItem} from '../../../../redux/toolkitSlice';
import {NavLink} from 'react-router-dom';
import photoPlaceholder from './../../../../assets/img/photoNotFound.jpg'
import axios from "axios";
import {getApiLink} from "../../../../api/getApiLink";
import {GetApiHeaders} from "../../../../functions/getApiHeaders";
import getCookies from "../../../../functions/getCookies";

export const ProductListItem = ({data}) => {

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.toolkit.favorites)
    const basket = useSelector(state => state.toolkit.basket)

    const [isFavorite, setIsFavorite] = useState(favorites.some(item => item === data.id))
    const [isAddedBasket, setIsAddedBasket] = useState(basket.some(item => item.product_id === data.id))

    const handleAddBasket = () => {
        if (isAddedBasket) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${getCookies('cookieToken')}`
            axios.post(getApiLink("/api/bucket/remove"), {
                "product_id": data.id
            }, {headers: GetApiHeaders()}).then(({data}) => console.log(data)).catch(er => console.log(er))

            dispatch(removeBasketItem(data.id))
        } else {
            axios.defaults.headers.common['Authorization'] = `Bearer ${getCookies('cookieToken')}`
            axios.post(getApiLink("/api/bucket/add"), {
                "product_id": data.id,
                "product_amount": 1
            }, {headers: GetApiHeaders()}).then(({data}) => console.log(data)).catch(er => console.log(er))

            dispatch(addBasketItem({
                product_id: data.id,
                product_amount: 1
            }))
        }

        setIsAddedBasket(prev => !prev)
    }

    const handleFavorite = () => {
        setIsFavorite(prev => !prev)
        dispatch(addFavorite(data.id))
    }

    return (
        <li className="product-card">
            <button title="Обране" onClick={handleFavorite} className={`product-card-fav`} aria-current="page">
                <svg width="26" height="26" viewBox="0 0 48 48">
                    <use xlinkHref={isFavorite ? "#favorited" : "#favorite"}></use>
                </svg>
            </button>
            <NavLink to={`/product/${data.id}`} className="product-card__image image-aspect-ratio"
                      aria-label="Глобус-модель 'Будова Сонця'">
                <picture>
                    <img src={data.files[0]?.web_path ?? photoPlaceholder} alt="ProductCardImg" width="300" height="300"
                         loading="lazy"/>
                </picture>
            </NavLink>
            <h3 className="product-card__title">
                <NavLink to={`/product/${data.id}`}>
                    {data.name}
                </NavLink>
            </h3>
            <div className="product-card__price">
                <ins>{`${data.original_price} ₴`}</ins>
                <del>{`${data.price === null ? '' : data.price + ' ₴'}`}</del>
            </div>
            <button onClick={handleAddBasket} style={{background: isAddedBasket ? "#9C50B8" : ""}}
                    className="product-card__add-cart button is-min-on-mob" type="button">
                <svg width="20" height="20" viewBox="0 0 48 48">
                    <use xlinkHref="#cart"></use>
                </svg>
                <span>
                    {
                        isAddedBasket ? "Удалить с корзины" : "Додати до кошика"
                    }
                </span>
            </button>
        </li>
    )
}
