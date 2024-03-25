import React, { useState } from 'react'

export const ProfileNav = ({ onProfInfo, onProfOrders, onProfBonus }) => {
	const [activeTab, setActiveTab] = useState('Личные данные');

	const handleClickTab = (tabName) => {
		setActiveTab(tabName)
	}

	return (
		<ul className="account__aside_nav aside_nav sticky" data-margin-top="30px">
			<li>
				<button
				 	onClick={() => {handleClickTab('Личные данные'); onProfInfo();}}
				 	aria-label="Личные данные"
					className={activeTab === 'Личные данные' ? 'is-current' : ''}
				>
					<span>Личные данные</span>
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
					<span>Мои заказы</span>
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
					<span>Бонусы и скидки</span>
					<svg width="20" height="20" viewBox="0 0 20 20">
						<use xlinkHref="#arrow-next"></use>
					</svg>
				</button>
			</li>
			<li>
				<a href="some" aria-label="Електронні освітні ресурси">
					<span>Електронні освітні ресурси</span>
					<svg width="20" height="20" viewBox="0 0 20 20">
						<use xlinkHref="#arrow-next"></use>
					</svg>
				</a>
			</li>
		</ul>
	)
}
