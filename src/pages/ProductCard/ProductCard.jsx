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

// import SliderItemPh from '../../assets/img/product/product-image.jpg';
import CreditCard from '../../assets/img/product/credit_card.svg'
import AccBalance from '../../assets/img/product/account_balance_wallet.svg'
import Assigment from '../../assets/img/product/assignment.svg'
import { ProductSwiper } from './ProductSwiper/ProductSwiper'

export const ProductCard = () => {
    const {id} = useParams();
    const dispatch = useDispatch()

    const [dataCard, setDataCard] = useState({});
    const [productCount, setProductCount] = useState(0)
    const [recommendedProducts, setRecommendedProducts] = useState([])
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

    console.log('dataCard',dataCard);

    useEffect(() => {

        axios.get(getApiLink(`/api/products/get`), {headers: GetApiHeaders()})
            .then(({data}) => {
                setRecommendedProducts(data.data)
            })
            .catch(error => {
                console.log('products undefined', error);
            })
    }, [])

    const handleAddCart = () => {
        setIsAddedBasket(prev => !prev)
        dispatch(addBasketItem(dataCard.id))
    }

    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{
                route: '/catalog',
                page: 'Каталог'
            }, {page: 'Демонстраційна модель «Мозок. Анатомія людини» Learning resources'}]}/>

            <section className="product container">
                {/* <div className="product__col">

                    <div className="product__gallery splide">
                        <div className="product__gallery_track splide__track">
                            <Splide className="product__gallery_list splide__list "
                                    options={{}}
                            >

                                <SplideSlide className="product__gallery_slide splide__slide">
                                    <div className="product__gallery_image image-aspect-ratio">
                                        <picture>
                                            <img src={SliderItemPh} alt="" width="519" height="519" loading="lazy"/>
                                        </picture>
                                    </div>
                                </SplideSlide>

                                <SplideSlide className="product__gallery_slide splide__slide">
                                    <div className="product__gallery_image image-aspect-ratio">
                                        <picture>
                                            <img src={SliderItemPh} alt="" width="519" height="519" loading="lazy"/>
                                        </picture>
                                    </div>
                                </SplideSlide>

                                <SplideSlide className="product__gallery_slide splide__slide">
                                    <div className="product__gallery_image image-aspect-ratio">
                                        <picture>
                                            <img src={SliderItemPh} alt="" width="519" height="519" loading="lazy"/>
                                        </picture>
                                    </div>
                                </SplideSlide>

                                <SplideSlide className="product__gallery_slide splide__slide">
                                    <div className="product__gallery_image image-aspect-ratio">
                                        <picture>
                                            <img src={SliderItemPh} alt="" width="519" height="519" loading="lazy"/>
                                        </picture>
                                    </div>
                                </SplideSlide>

                            </Splide>
                        </div>
                    </div>

                    <div className="product__gallery_nav splide on-mob">
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
                </div> */}

                {/* <div className="product__col"> */}
                    <ProductSwiper/>
                {/* </div> */}

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
                            <button onClick={handleAddCart} style={{background: isAddedBasket ? "#9C50B8" : ""}} className="product__add-to-cart button" type="button" aria-label="Додати до кошика">
                                <svg width="20" height="20" viewBox="0 0 48 48">
                                    <use xlinkHref="#cart"></use>
                                </svg>
                                <span>
                                    {
                                        isAddedBasket ? "Убрать с корзины" : "Додати до кошика"
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
                                <tr>
                                    <td>Стан</td>
                                    <td>{dataCard.condition}</td>
                                </tr>
                                <tr>
                                    <td>Виробник</td>
                                    <td>{dataCard.producer}</td>
                                </tr>
                                <tr>
                                    <td>Вага</td>
                                    <td>{dataCard.weight} гр</td>
                                </tr>
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

                {/* <div className="product__col">
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
                    <ul className="product__orders">

                        {dataCard.precepts?.map(precept => (
                            <li key={precept.id}>
                                <h3>Відповідає Наказу </h3>
                                <strong>{precept.number}</strong>
                                <p>
                                    {precept.description}
                                </p>
                            </li>
                        ))}

                    </ul>
                </div> */}

                <div className="product__col">
                    <div className="product__description">
                        <h3>
                            Опис
                        </h3>
                        <p>{dataCard.description}</p>
                        <p>У набір входить:</p>
                        <ul>
                            <li>10-и см модель мозку з 31 елементів;</li>
                            <li>Підставка для демонстрації;</li>
                            <li>Ілюстрована інструкція по збірці.</li>
                        </ul>
                        <p>Матеріал - пластик.</p>
                        <p>Вік - 8-12 років.</p>
                        <p>Вага - 200 гр.</p>
                        <p>Розмір упаковки - 22 * 17 * 5 см.</p>
                        <p>Виробник - Learning Resources, США.</p>
                    </div>
                </div>
            </section>


            <section className="recommended container">
                <div className="recommended__decor" aria-hidden="true">
                    <picture>
                        <img src="img/decor-element.png" alt="" width="0" height="0" loading="lazy"/>
                    </picture>
                </div>
                <div className="recommended__container">
                    <h2 className="recommended__title title">
                        Рекомендованные
                    </h2>

                    <ProductsList list={recommendedProducts} ClassNameList={'recommended__list'}/>

                </div>
            </section>
        </>
    )
}
