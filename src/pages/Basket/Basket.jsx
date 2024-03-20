import React, {useContext, useEffect, useState} from 'react'
import {BackGroundDecor} from '../../components/BackGroundDecor/BackGroundDecor'
import {BreadCrumbs} from '../../components/BreadCrumbs/BreadCrumbs'
import {CartList} from '../../components/CartList/CartList'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import {useSelector} from 'react-redux'
import {PopupContext} from "../../App";
import axios from "axios";
import {getApiLink} from "../../api/getApiLink";

export const Basket = () => {
    const setModal = useContext(PopupContext)

    const [totalAmount, setTotalAmount] = useState(0)
    const [products, setProducts] = useState([])

    const basketList = useSelector(state => state.toolkit.basket);

    const handleOpenModal = () => {
		setModal('order')
    }

    useEffect(() => {
        const configHeader = {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json",
            }
        }

        axios.get(getApiLink('/api/products/get'), configHeader)
            .then(({data}) => {
                setProducts(data.data?.filter(item => basketList.some(item2 => item.id === item2)))
                console.log(data.data?.filter(item => basketList.some(item2 => item.id === item2)))

                const total = data.data?.filter(item => basketList.some(item2 => item.id === item2)).reduce((amount, current) => {
                    amount += current.price
                    return amount
                }, 0)

                setTotalAmount(total)

                console.log('total', total);
            })
            .catch((error) => {
                console.log('all prod undefined', error);
            })
    }, [basketList])

    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{page: 'корзина'}]}/>

            <section className="cart container">

                <SectionTitle title={'Корзина'}/>

                <div className="cart__note">
                    <p>
                        Если Вы хотите получить персональную скидку или стать участником бонусной системы -
                        <a onClick={_ => handleOpenModal("register")} className="open-popup">Зарегистрируйтесь</a> или
                        <a onClick={_ => handleOpenModal("login")} className="open-popup">Авторизуйтесь</a> в личном кабинете, прежде чем
                        оформить этот заказ
                    </p>
                </div>

                <CartList setTotalAmount={setTotalAmount} products={products}/>

                <div className="cart__footer">
                    <div className="cart__footer_col">
                        <div className="cart__message">
                            <label htmlFor="order-message">Комментарий к заказу</label>
                            <p><textarea name="order-message" placeholder="Введите текст" id="order-message"></textarea>
                            </p>
                        </div>
                    </div>
                    <div className="cart__footer_col">
                        <table className="cart__total">
                            <tbody>
                            <tr>
                                <td>Минимальная сумма заказа</td>
                                <td>0 ₴</td>
                            </tr>
                            <tr className="add-hr">
                                <td>
                                    <b>Всього</b>
                                </td>
                                <td>
                                    <strong data-price-sum-result="cart-list" data-price-discount="500" data-price-currency="₴">
                                        {totalAmount}
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Знижка
                                </td>
                                <td>
                                    0 ₴
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <label className="cart__checkbox checkbox">
                            <input type="checkbox" name="receive-docs" className="checkbox-input"/>
                            <span className="checkbox-element">
							<svg width="17" height="17" viewBox="0 0 17 17">
								<use xlinkHref="#check"></use>
							</svg>
						</span>
                            <span className="checkbox-text">
							Бажаю отримати на адресу електронної пошти примірник Договору поставки та Рахунок
						</span>
                        </label>
                        <button onClick={handleOpenModal} className="cart__submit button is-mode-1 open-popup" data-href="#order-popup"
                                type="button" aria-label="Оформити замовлення">
                            <svg width="24" height="24" viewBox="0 0 48 48">
                                <use xlinkHref="#cart"></use>
                            </svg>
                            <span>
                                Оформити замовлення
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
