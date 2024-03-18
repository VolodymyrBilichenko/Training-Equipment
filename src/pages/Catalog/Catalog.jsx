import React, { useEffect, useState } from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import { useParams } from 'react-router-dom'

export const Catalog = () => {
	const { category_id } = useParams();

	const [categoryProducts, setCategoryProducts] = useState([]);

	useEffect(() => {
		axios.get(getApiLink(`/api/products/get?category_id=${category_id}`))
		.then(({data}) => {
			setCategoryProducts(data.data)
		})
		.catch((error) => {
			console.log('category undefined', error);
		})
	}, [category_id])

	console.log(categoryProducts);

  return (
    <>
        <BackGroundDecor/>

        <BreadCrumbs pages={[{page: 'каталог'}]}/>

        <section className="catalog container">
			<div className="catalog__decor" aria-hidden="true">
				<picture>
					<img src="img/decor-element.png" alt="" width="0" height="0" loading="lazy"/>
				</picture>
			</div>

			<SectionTitle title={'Каталог'} ClassTitle={'catalog__title'}/>
			
			<div className="catalog__aside" data-sticky-container>
				<div className="catalog__categories sticky" data-margin-top="30">
					<button className="catalog__categories_target button visible-on-mob" type="button">
						Категории
					</button>
					<div className="catalog__categories_block">
						<div>

							<ul className="catalog__categories_list">
								<li>
									<a href="some">
										<span>STEM-лабораторії МОН №574</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Мультимедійне презентаційне обладнання</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Лінгафонний клас</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Комп'ютерний клас</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Комп'ютерна, акустична та периферійна техніка</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Інтерактивна підлога</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Дошкільна освіта (ДНЗ)</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Початкова школа НУШ</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Фізика</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Біологія</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>Географія</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>STEM-лабораторії МОН №574</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
								<li>
									<a href="some">
										<span>STEM-лабораторії МОН №574</span>
										<i>
											<svg width="20" height="20" viewBox="0 0 20 20">
												<use xlinkHref="#arrow-next"></use>
											</svg>
										</i>
									</a>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</div>
			<div className="catalog__main">
				<search className="catalog__search" role="search">
					<form>
						<input type="search" name="search" placeholder="Пошук по каталогу" required/>
						<button type="submit" title="Поиск">
							<svg width="26" height="26" viewBox="0 0 48 48">
								<use xlinkHref="#search"></use>
							</svg>
						</button>
					</form>
				</search>

                <ProductsList ClassNameList={'catalog__list'} />
                
				<div className="catalog__pagination pagination">
					<a href="some" className="pagination__link">
						Перша
					</a>
					<div className="pagination__list">
						<a href="some">1</a>
						<a href="some">2</a>
						<a href="some">3</a>
						<a href="some" className="is-current">4</a>
						<span>...</span>
						<a href="some">8</a>
						<a href="some">9</a>
					</div>
					<a href="some" className="pagination__link">
						Остання
					</a>
				</div>
			</div>
		</section>
    </>
  )
}
