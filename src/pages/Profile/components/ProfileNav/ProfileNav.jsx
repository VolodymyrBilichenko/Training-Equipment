import React from 'react'

export const ProfileNav = () => {
  return (
    <ul className="account__aside_nav aside_nav sticky" data-margin-top="30px">
	<li>
		<a href="account.html" aria-label="Личные данные" className="is-current">
			<span>Личные данные</span>
			<svg width="20" height="20" viewBox="0 0 20 20">
				<use xlinkHref="#arrow-next"></use>
			</svg>
		</a>
	</li>
	<li>
		<a href="account-my-orders.html" aria-label="Мои заказы">
			<span>Мои заказы</span>
			<svg width="20" height="20" viewBox="0 0 20 20">
				<use xlinkHref="#arrow-next"></use>
			</svg>
		</a>
	</li>
	<li>
		<a href="account-bonuses.html" aria-label="Бонусы и скидки">
			<span>Бонусы и скидки</span>
			<svg width="20" height="20" viewBox="0 0 20 20">
				<use xlinkHref="#arrow-next"></use>
			</svg>
		</a>
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
