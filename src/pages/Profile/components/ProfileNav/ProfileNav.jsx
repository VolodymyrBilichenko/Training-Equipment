import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import setCookie from "../../../../functions/setCookie";
import {useDispatch} from "react-redux";
import {setUser} from "../../../../redux/toolkitSlice";
import { useTranslation } from 'react-i18next';

export const ProfileNav = ({ onProfInfo, onProfOrders, onProfBonus }) => {
	const { t } = useTranslation();

	const [activeTab, setActiveTab] = useState('Личные данные');

	const handleClickTab = (tabName) => {
		setActiveTab(tabName)
	}

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleExit = () => {
		navigate("/")
		setCookie("cookieToken", "")
		dispatch(setUser({}))
	}

	return (
		<ul className="account__aside_nav aside_nav sticky" data-margin-top="30px">
			<li>
				<button
				 	onClick={() => {handleClickTab('Личные данные'); onProfInfo();}}
				 	aria-label="Личные данные"
					className={activeTab === 'Личные данные' ? 'is-current' : ''}
				>
					<span>
						{t('personal_info')}
					</span>
					<svg width="20" height="20" viewBox="0 0 20 20">
						<use xlinkHref="#arrow-next"></use>
					</svg>
				</button>
			</li>
			<li>
				<button 
					onClick={() => {handleClickTab('Мои заказы'); onProfOrders();}} 
					aria-label="Мои заказы"
					className={activeTab === 'Мои заказы' ? 'is-current' : ''}
				>
					<span>
						{t('my_orders')}
					</span>
					<svg width="20" height="20" viewBox="0 0 20 20">
						<use xlinkHref="#arrow-next"></use>
					</svg>
				</button>
			</li>
			<li>
				<button 
					onClick={() => {handleClickTab('Бонусы и скидки'); onProfBonus();}} 
					aria-label="Бонусы и скидки"
					className={activeTab === 'Бонусы и скидки' ? 'is-current' : ''}
				>
					<span>
						{t('bonuses_and_sales')}
					</span>
					<svg width="20" height="20" viewBox="0 0 20 20">
						<use xlinkHref="#arrow-next"></use>
					</svg>
				</button>
			</li>
			{/* <li>
				<button 
					aria-label="Бонусы и скидки"
					// className={activeTab === 'Бонусы и скидки' ? 'is-current' : ''}
				>
					<span>Електронні освітні ресурси (ЕОР)</span>
					<svg width="20" height="20" viewBox="0 0 20 20">
						<use xlinkHref="#arrow-next"></use>
					</svg>
				</button>
			</li> */}
			<li>
				<br/>
				<button onClick={handleExit} aria-label="Електронні освітні ресурси">
					<span>
						{t('exit')}
					</span>
					{/*<svg width="20" height="20" viewBox="0 0 20 20">*/}
					{/*	<use xlinkHref="#arrow-next"></use>*/}
					{/*</svg>*/}
				</button>
			</li>
		</ul>
	)
}
