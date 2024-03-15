import React from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { CartList } from '../../components/CartList/CartList'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'

export const Basket = () => {
  return (
    <>
        <BackGroundDecor/>

        <BreadCrumbs pages={[{page: 'корзина'}]}/>
        
        <section class="cart container">
            
            <SectionTitle title={'Корзина'}/>

			<div class="cart__note">
				<p>
					Если Вы хотите получить персональную скидку или стать участником бонусной системы - 
					<a href="#register-popup" class="open-popup">Зарегистрируйтесь</a> или 
					<a href="#login-popup" class="open-popup">Авторизуйтесь</a>  в личном кабинете, прежде чем оформить этот заказ
				</p>
			</div>

            <CartList/>			

			<div class="cart__footer">
				<div class="cart__footer_col">
					<div class="cart__message">
						<label for="order-message">Комментарий к заказу</label>
						<p><textarea name="order-message" placeholder="Введите текст" id="order-message"></textarea></p>
					</div>
				</div>
				<div class="cart__footer_col">
					<table class="cart__total">
						<tr>
							<td>Минимальная сумма заказа</td>
							<td>2 000 ₴</td>
						</tr>
						<tr class="add-hr">
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
					</table>
					<label class="cart__checkbox checkbox">
						<input type="checkbox" name="receive-docs" class="checkbox-input"/>
						<span class="checkbox-element">
							<svg width="17" height="17" viewBox="0 0 17 17">
								<use xlinkHref="#check"></use>
							</svg>
						</span>
						<span class="checkbox-text">
							Бажаю отримати на адресу електронної пошти примірник Договору поставки та Рахунок
						</span>
					</label>
					<button class="cart__submit button is-mode-1 open-popup" data-href="#order-popup" type="button" aria-label="Оформити замовлення">
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
