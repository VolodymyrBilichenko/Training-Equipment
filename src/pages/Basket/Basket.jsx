import React, {useContext, useEffect, useState} from 'react'
import {BackGroundDecor} from '../../components/BackGroundDecor/BackGroundDecor'
import {BreadCrumbs} from '../../components/BreadCrumbs/BreadCrumbs'
import {CartList} from '../../components/CartList/CartList'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import {useDispatch, useSelector} from 'react-redux'
import {PopupContext} from "../../App";
import getCookies from "../../functions/getCookies";
import { setBasketComment } from '../../redux/toolkitSlice'

export const Basket = () => {
    const setModal = useContext(PopupContext);
    const [orderComment, setOrderComment] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const dispatch = useDispatch();

    const basketList = useSelector(state => state.toolkit.basket);
    const allProducts = useSelector(state => state.toolkit.allProducts)
    const usersData = useSelector(state => state.toolkit.user)

    const handleOpenModal = (type) => {
		setModal(`${type}`)
    }

    const handleCommentChange = (e) => {
        setOrderComment(e.target.value);

        dispatch(setBasketComment(orderComment))
    }

    const discountPercent = usersData.discount ? usersData.discount.percent : 0
    const discountBonuses = usersData.discount ? usersData.discount.bonuses_sum : 0
    const discountAmount = ((totalAmount * discountPercent) / 100)
    const discountTotalSum = (totalAmount - discountAmount) - discountBonuses


    useEffect(() => {
        !basketList.length && setTotalAmount(0);
        !basketList.length && setOrderComment(''); 
    }, [basketList])

    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{page: 'корзина'}]}/>

            <section className="cart container">

                <SectionTitle title={'Корзина'}/>

                {!getCookies("cookieToken") && <div className="cart__note">
                    <p>
                        Если Вы хотите получить персональную скидку или стать участником бонусной системы -
                        <button onClick={_ => handleOpenModal("register")}
                                className="open-popup">Зарегистрируйтесь</button> или
                        <button onClick={_ => handleOpenModal("login")} className="open-popup">Авторизуйтесь</button> в
                        личном кабинете, прежде чем
                        оформить этот заказ
                    </p>
                </div>}

                <CartList setTotalAmount={setTotalAmount} products={allProducts}/>

                <div className="cart__footer">
                    <div className="cart__footer_col">
                        <div className="cart__message">
                            <label htmlFor="order-message">Комментарий к заказу</label>
                            <p><textarea name="order-message" value={orderComment} onChange={handleCommentChange} placeholder="Введите текст" id="order-message"></textarea>
                            </p>
                        </div>
                    </div>
                    <div className="cart__footer_col">
                        <table className="cart__total">
                            <tbody>
                            {/* <tr>
                                <td>Минимальная сумма заказа</td>
                                <td>0 ₴</td>
                            </tr> */}
                            <tr className="add-hr">
                                <td>
                                    <b>Всього</b>
                                </td>
                                <td>
                                    <strong data-price-sum-result="cart-list" data-price-discount="500" data-price-currency="₴">
                                        {discountPercent && !basketList.length ? totalAmount : discountTotalSum}
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Знижка
                                </td>
                                <td>
                                    {discountAmount} ₴
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Бонуси
                                </td>
                                <td>
                                    {discountBonuses} ₴
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

                        <button onClick={_ => handleOpenModal('order')} className="cart__submit button is-mode-1 open-popup" data-href="#order-popup"
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
