import React, {useEffect, useState} from 'react'
import {BackGroundDecor} from '../../components/BackGroundDecor/BackGroundDecor'
import {BreadCrumbs} from '../../components/BreadCrumbs/BreadCrumbs'
import {ProductsList} from '../../components/ProductsList/ProductsList'
import {CartItemLength} from '../../components/CartList/components/CartItemLength'
// import {Splide, SplideSlide} from '@splidejs/react-splide'
import axios from 'axios'
import {getApiLink} from '../../api/getApiLink'
import {useParams} from 'react-router-dom'
import {addBasketItem} from "../../redux/toolkitSlice";
import {useDispatch} from "react-redux";
import {GetApiHeaders} from "../../functions/getApiHeaders";

import SliderItemPh from '../../assets/img/product/product-image.jpg';
import CreditCard from '../../assets/img/product/credit_card.svg'
import AccBalance from '../../assets/img/product/account_balance_wallet.svg'
import Assigment from '../../assets/img/product/assignment.svg'
import getCookies from "../../functions/getCookies";
import { ProductSwiper } from './ProductSwiper/ProductSwiper'
import {toast} from "react-toastify";
import HTMLReactParser from "html-react-parser";

export const ProductCard = () => {
    const {id} = useParams();
    const dispatch = useDispatch()

    const [dataCard, setDataCard] = useState({});
    const [productCount, setProductCount] = useState(1)
    // const [recommendedProducts, setRecommendedProducts] = useState([])
    const [isAddedBasket, setIsAddedBasket] = useState(false)

    useEffect(() => {

        axios.get(getApiLink(`/api/products/${id}`), {headers: GetApiHeaders()})
            .then(({data}) => {
                setDataCard(data.data)
            })
            .catch((error) => {
                console.log('dataCard undefined', error);
            })

    }, [id])

    const handleAddCart = () => {
        const dataItem = {
            "product_id": dataCard.id,
            "product_amount": productCount
        }

        if(productCount > dataCard?.amount_in_store) return toast.error("На данный момент такого количества товара на складе нет")

        axios.defaults.headers.common['Authorization'] = `Bearer ${getCookies('cookieToken')}`
        axios.post(getApiLink("/api/bucket/add"), dataItem, {headers: GetApiHeaders()}).then(({data}) => console.log(data)).catch(er => console.log(er))

        toast.success("Товар успешно добавлен в корзину")

        setIsAddedBasket(prev => !prev)
        dispatch(addBasketItem(dataItem))
    }

    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{
                route: '/catalog',
                page: 'Каталог'
            }, {page: 'Демонстраційна модель «Мозок. Анатомія людини» Learning resources'}]}/>

            <section className="product container">

                    <ProductSwiper dataCard={dataCard.files}/>

                <div className="product__col">
                    <h2 className="product__title title">
                        {dataCard.name}
                    </h2>
                    <span className="product__article-number">
                        {dataCard.article}
                    </span>
                    <span className="product__status in-stock">
                        В наличии
                    </span>
                    <div className="product__info">
                        <div className="product__info_col">
                            <div className="product__price">
                                <ins>{dataCard.original_price} ₴</ins>
                                <del>{`${dataCard.price === null ? '' : dataCard.price + ' ₴'}`}</del>
                            </div>

                            <CartItemLength setProductCount={setProductCount} productCount={productCount}/>

                        </div>
                        <div className="product__info_col">
                            <button onClick={handleAddCart} className="product__add-to-cart button" style={{background: isAddedBasket ? "#9C50B8" : ""}} type="button" aria-label="Додати до кошика">
                                <svg width="20" height="20" viewBox="0 0 48 48">
                                    <use xlinkHref="#cart"></use>
                                </svg>
                                <span>
                                    {
                                        isAddedBasket ? "Удалить с корзины" : "Додати до кошика"
                                    }
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="product__info">
                        <div className="product__info_col">
                            <table className="product__characteristics">
                                <caption>Характеристики</caption>
                                <tbody>
                                {dataCard?.condition && <tr>
                                    <td>Стан</td>
                                    <td>{dataCard.condition}</td>
                                </tr>}
                                {dataCard?.producer && <tr>
                                    <td>Виробник</td>
                                    <td>{dataCard.producer}</td>
                                </tr>}
                                {dataCard?.weight && <tr>
                                    <td>Вага</td>
                                    <td>{dataCard.weight} гр</td>
                                </tr>}
                                </tbody>
                            </table>
                        </div>
                        <div className="product__info_col">
                            <ul className="product__paymethods">
                                <li>
                                    <i>
                                        <img src={CreditCard} width="40" height="40" loading="lazy" alt=""/>
                                    </i>
                                    <span>
                    Безнал
                  </span>
                                </li>
                                <li>
                                    <i>
                                        <img src={AccBalance} width="40" height="40" loading="lazy" alt=""/>
                                    </i>
                                    <span>
                    Наложенный платёж
                  </span>
                                </li>
                                <li>
                                    <i>
                                        <img src={Assigment} width="40" height="40" loading="lazy" alt=""/>
                                    </i>
                                    <span>
                    По договору поставки
                  </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="product__col">
                    <div className="product__gallery_nav splide on-desktop">
                        <div className="product__gallery_nav_track splide__track">
                            <ul className="product__gallery_nav_list splide__list">
                                <li className="product__gallery_nav_slide splide__slide">
                                    <div className="product__gallery_nav_image image-aspect-ratio">
                                        <picture>
                                            <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                                        </picture>
                                    </div>
                                </li>
                                <li className="product__gallery_nav_slide splide__slide">
                                    <div className="product__gallery_nav_image image-aspect-ratio">
                                        <picture>
                                            <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                                        </picture>
                                    </div>
                                </li>
                                <li className="product__gallery_nav_slide splide__slide">
                                    <div className="product__gallery_nav_image image-aspect-ratio">
                                        <picture>
                                            <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                                        </picture>
                                    </div>
                                </li>
                                <li className="product__gallery_nav_slide splide__slide">
                                    <div className="product__gallery_nav_image image-aspect-ratio">
                                        <picture>
                                            <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                                        </picture>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {dataCard?.precepts && <ul className="product__orders">

                        {dataCard?.precepts?.map(precept => (
                            <li key={precept.id}>
                                <h3>Відповідає Наказу </h3>
                                <strong>{precept.number}</strong>
                                <p>
                                    {precept.description}
                                </p>
                            </li>
                        ))}

                    </ul>}
                </div>

                <div className="product__col">
                    <div className="product__description">
                        <h3>
                            Опис
                        </h3>
                        {HTMLReactParser(dataCard?.description ?? "")}
                    </div>
                </div>
            </section>


            {!!dataCard?.recommended_products?.length && <section className="recommended container">
                <div className="recommended__decor" aria-hidden="true">
                    <picture>
                        <img src="img/decor-element.png" alt="" width="0" height="0" loading="lazy"/>
                    </picture>
                </div>
                <div className="recommended__container">
                    <h2 className="recommended__title title">
                        Рекомендованные
                    </h2>

                    <ProductsList list={dataCard?.recommended_products} ClassNameList={'recommended__list'}/>

                </div>
            </section>}
        </>
    )
}
