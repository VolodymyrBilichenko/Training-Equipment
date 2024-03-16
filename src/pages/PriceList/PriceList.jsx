import React from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'

export const PriceList = () => {
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
			<div className="pricelist__block">
				<h3 className="pricelist__block_title title">
					Прайси по категоріям
				</h3>
				<ul className="pricelist__list">
					<li>
						<a href="some" className="pricelist__item">
							<span>
								Химия
							</span>
							<i>
								<svg width="26" height="26" viewBox="0 0 26 26">
									<use xlinkHref="#download"></use>
								</svg>
							</i>
						</a>
					</li>
					<li>
						<a href="some" className="pricelist__item">
							<span>
								Биология
							</span>
							<i>
								<svg width="26" height="26" viewBox="0 0 26 26">
									<use xlinkHref="#download"></use>
								</svg>
							</i>
						</a>
					</li>
					<li>
						<a href="some" className="pricelist__item">
							<span>
								Математика
							</span>
							<i>
								<svg width="26" height="26" viewBox="0 0 26 26">
									<use xlinkHref="#download"></use>
								</svg>
							</i>
						</a>
					</li>
					<li>
						<a href="some" className="pricelist__item">
							<span>
								Математика
							</span>
							<i>
								<svg width="26" height="26" viewBox="0 0 26 26">
									<use xlinkHref="#download"></use>
								</svg>
							</i>
						</a>
					</li>
					<li>
						<a href="some" className="pricelist__item">
							<span>
								Химия
							</span>
							<i>
								<svg width="26" height="26" viewBox="0 0 26 26">
									<use xlinkHref="#download"></use>
								</svg>
							</i>
						</a>
					</li>
					<li>
						<a href="some" className="pricelist__item">
							<span>
								Биология
							</span>
							<i>
								<svg width="26" height="26" viewBox="0 0 26 26">
									<use xlinkHref="#download"></use>
								</svg>
							</i>
						</a>
					</li>
					<li>
						<a href="some" className="pricelist__item">
							<span>
								Химия
							</span>
							<i>
								<svg width="26" height="26" viewBox="0 0 26 26">
									<use xlinkHref="#download"></use>
								</svg>
							</i>
						</a>
					</li>
				</ul>
			</div>
		</section>
    </>
  )
}
