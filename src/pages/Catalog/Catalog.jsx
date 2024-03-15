import React from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { ProductsList } from '../../components/ProductsList/ProductsList'

export const Catalog = () => {
  return (
    <>
        <BackGroundDecor/>

        <BreadCrumbs pages={[{page: 'каталог'}]}/>

        <section class="catalog container">
			<div class="catalog__decor" aria-hidden="true">
				<picture>
					<img src="img/decor-element.png" alt="" width="0" height="0" loading="lazy"/>
				</picture>
			</div>
			<h2 class="catalog__title section-title">
				Каталог
			</h2>
			<div class="catalog__aside" data-sticky-container>
				<div class="catalog__categories sticky" data-margin-top="30">
					<button class="catalog__categories_target button visible-on-mob" type="button">
						Категории
					</button>
					<div class="catalog__categories_block">
						<div>

							<ul class="catalog__categories_list">
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
			<div class="catalog__main">
				<search class="catalog__search" role="search">
					<form>
						<input type="search" name="search" placeholder="Пошук по каталогу" required/>
						<button type="submit" title="Поиск">
							<svg width="26" height="26" viewBox="0 0 48 48">
								<use xlinkHref="#search"></use>
							</svg>
						</button>
					</form>
				</search>

                <ProductsList ClassNameList={'catalog__list'}/>
                
				<div class="catalog__pagination pagination">
					<a href="some" class="pagination__link">
						Перша
					</a>
					<div class="pagination__list">
						<a href="some">1</a>
						<a href="some">2</a>
						<a href="some">3</a>
						<a href="some" class="is-current">4</a>
						<span>...</span>
						<a href="some">8</a>
						<a href="some">9</a>
					</div>
					<a href="some" class="pagination__link">
						Остання
					</a>
				</div>
			</div>
		</section>
    </>
  )
}
