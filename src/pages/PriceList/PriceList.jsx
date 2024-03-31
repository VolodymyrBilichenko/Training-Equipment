import React, { useEffect, useState } from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import { GetApiHeaders } from '../../functions/getApiHeaders'

export const PriceList = () => {
	const [priceData, setPriceData] = useState([]);

	useEffect(() => {
		axios.get(getApiLink('/api/price-list/get'), {headers: GetApiHeaders()})
			.then(({data}) => {
				console.log(data.data);
				setPriceData(data.data);
			})
			.catch(error => {
				console.error(error);
			})
	}, [])

	return (
		<>
			<BackGroundDecor/>

			<BreadCrumbs pages={[{page: 'Прайс-лист'}]}/>


			<section className="pricelist container">

				<SectionTitle title={'Прайс-лист'} ClassTitle={'pricelist__title'}/>

				<a href="some" className="pricelist__item">
					<span>
						Скачати повниій прайс
					</span>
					<i>
						<svg width="26" height="26" viewBox="0 0 26 26">
							<use xlinkHref="#download"></use>
						</svg>
					</i>
				</a>
				{!!priceData.length && <div className="pricelist__block">
					<h3 className="pricelist__block_title title">
						Прайси по категоріям
					</h3>

					<ul className="pricelist__list">
						{priceData.map(item => (
							<li key={item.id}>
								<a href={item.file.web_path} className="pricelist__item">
									<span>
										{item.category.name}
									</span>
									<i>
										<svg width="26" height="26" viewBox="0 0 26 26">
											<use xlinkHref="#download"></use>
										</svg>
									</i>
								</a>
							</li>
						))}

					</ul>

				</div>}
			</section>
		</>
	)
}
