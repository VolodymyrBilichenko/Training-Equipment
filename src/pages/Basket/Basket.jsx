import React, { useEffect } from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { CartList } from '../../components/CartList/CartList'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import getCookies from '../../functions/getCookies'
import { setBasket } from '../../redux/toolkitSlice'

export const Basket = () => {
	const dispatch = useDispatch();
	const reduxProductData = useSelector(state => state.toolkit.basket);

	// const dispatchData = dispatch(setBasket(parsedCookieProductData))
	useEffect(() => {
		if (!getCookies('basketItem')) return; 
		const cookieProductData = getCookies('basketItem');
		console.log('parse', cookieProductData);
		
		const parsedCookieProductData = JSON.parse(cookieProductData);
		dispatch(setBasket(parsedCookieProductData))

	}, [])


  return (
    <>
        <BackGroundDecor/>

        <BreadCrumbs pages={[{page: 'корзина'}]}/>
        
        <section className="cart container">
            
            <SectionTitle title={'Корзина'}/>

			<div className="cart__note">
				<p>
					Если Вы хотите получить персональную скидку или стать участником бонусной системы - 
					<a href="#register-popup" className="open-popup">Зарегистрируйтесь</a> или 
					<a href="#login-popup" className="open-popup">Авторизуйтесь</a>  в личном кабинете, прежде чем оформить этот заказ
				</p>
			</div>

            <CartList ProductData={reduxProductData}/>			

			<div className="cart__footer">
				<div className="cart__footer_col">
					<div className="cart__message">
						<label htmlFor="order-message">Комментарий к заказу</label>
						<p><textarea name="order-message" placeholder="Введите текст" id="order-message"></textarea></p>
					</div>
				</div>
				<div className="cart__footer_col">
					<table className="cart__total">
						<tbody>
							<tr>
								<td>Минимальная сумма заказа</td>
								<td>2 000 ₴</td>
							</tr>
							<tr className="add-hr">
								<td>
									<b>Всього</b>
								</td>
								<td>
									<strong data-price-sum-result="cart-list" data-price-discount="500" data-price-currency="₴"></strong>
								</td>
							</tr>
							<tr>
								<td>
									Знижка
								</td>
								<td>
									500 ₴
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
					<button className="cart__submit button is-mode-1 open-popup" data-href="#order-popup" type="button" aria-label="Оформити замовлення">
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
