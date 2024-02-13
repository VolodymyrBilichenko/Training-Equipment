import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import { SectionTitle } from '../../../../components/SectionTitle/SectionTitle'

import Sertificate from '../../../../assets/img/index/reviews/certificate-image.png'

export const MainReviews = () => {

    return (
        <section className="reviews container">

            <SectionTitle title={'Відгуки'}/>

			<div className="reviews__slider splide">
				<div className="reviews__track splide__track">

					<Splide className="reviews__list splide__list" style={{border: '1px solid #7f469b', borderRadius: '20px'}}
                        options={{
                            type: "loop",
                            perPage: 2,
                            arrows: false,
                            speed: 700,
                            easing: "ease",
                            // pagination: true,
                    
                            breakpoints: {
                    
                                768: {
                                    perPage: 1,
                                },
                    
                                550: {
                                    speed: 300,
                                }
                            }
                        }} 
                    >
                        <SplideSlide className="reviews__slide splide__slide">
                            <div className="reviews__slide_col">
                                <svg width="36" height="39" viewBox="0 0 39 36">
                                    <use xlinkHref="#quote"></use>
                                </svg>
                                <div className="reviews__slide_text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="reviews__slide_person reviews__person">
                                    <div className="reviews__person_avatar">
                                        <img src="https://picsum.photos/id/275/512/512" alt="" width="59" height="59" loading="lazy"/>
                                    </div>
                                    <div className="reviews__person_info">
                                        <h3>Олена петрівна</h3>
                                        <span>директор lohou</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__slide_col">
                                <div className="reviews__certificate">
                                    <div className="reviews__certificate_image">
                                        <picture>
                                            <img src={Sertificate} alt="Sertificate" width="276" height="285" loading="lazy"/>
                                        </picture>
                                    </div>
                                    <a href="foo" className="reviews__certificate_link">
                                        ДИвитися подяку
                                    </a>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="reviews__slide splide__slide">
                            <div className="reviews__slide_col">
                                <svg width="36" height="39" viewBox="0 0 39 36">
                                    <use xlinkHref="#quote"></use>
                                </svg>
                                <div className="reviews__slide_text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="reviews__slide_person reviews__person">
                                    <div className="reviews__person_avatar">
                                        <img src="https://picsum.photos/id/275/512/512" alt="" width="59" height="59" loading="lazy"/>
                                    </div>
                                    <div className="reviews__person_info">
                                        <h3>Олена петрівна</h3>
                                        <span>директор lohou</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__slide_col">
                                <div className="reviews__certificate">
                                    <div className="reviews__certificate_image">
                                        <picture>
                                            <img src={Sertificate} alt="Sertificate" width="276" height="285" loading="lazy"/>
                                        </picture>
                                    </div>
                                    <a href="foo" className="reviews__certificate_link">
                                        ДИвитися подяку
                                    </a>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="reviews__slide splide__slide">
                            <div className="reviews__slide_col">
                                <svg width="36" height="39" viewBox="0 0 39 36">
                                    <use xlinkHref="#quote"></use>
                                </svg>
                                <div className="reviews__slide_text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="reviews__slide_person reviews__person">
                                    <div className="reviews__person_avatar">
                                        <img src="https://picsum.photos/id/275/512/512" alt="" width="59" height="59" loading="lazy"/>
                                    </div>
                                    <div className="reviews__person_info">
                                        <h3>Олена петрівна</h3>
                                        <span>директор lohou</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__slide_col">
                                <div className="reviews__certificate">
                                    <div className="reviews__certificate_image">
                                        <picture>
                                            <img src={Sertificate} alt="Sertificate" width="276" height="285" loading="lazy"/>
                                        </picture>
                                    </div>
                                    <a href="foo" className="reviews__certificate_link">
                                        ДИвитися подяку
                                    </a>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="reviews__slide splide__slide">
                            <div className="reviews__slide_col">
                                <svg width="36" height="39" viewBox="0 0 39 36">
                                    <use xlinkHref="#quote"></use>
                                </svg>
                                <div className="reviews__slide_text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="reviews__slide_person reviews__person">
                                    <div className="reviews__person_avatar">
                                        <img src="https://picsum.photos/id/275/512/512" alt="" width="59" height="59" loading="lazy"/>
                                    </div>
                                    <div className="reviews__person_info">
                                        <h3>Олена петрівна</h3>
                                        <span>директор lohou</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__slide_col">
                                <div className="reviews__certificate">
                                    <div className="reviews__certificate_image">
                                        <picture>
                                            <img src={Sertificate} alt="Sertificate" width="276" height="285" loading="lazy"/>
                                        </picture>
                                    </div>
                                    <a href="foo" className="reviews__certificate_link">
                                        ДИвитися подяку
                                    </a>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="reviews__slide splide__slide">
                            <div className="reviews__slide_col">
                                <svg width="36" height="39" viewBox="0 0 39 36">
                                    <use xlinkHref="#quote"></use>
                                </svg>
                                <div className="reviews__slide_text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="reviews__slide_person reviews__person">
                                    <div className="reviews__person_avatar">
                                        <img src="https://picsum.photos/id/275/512/512" alt="" width="59" height="59" loading="lazy"/>
                                    </div>
                                    <div className="reviews__person_info">
                                        <h3>Олена петрівна</h3>
                                        <span>директор lohou</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__slide_col">
                                <div className="reviews__certificate">
                                    <div className="reviews__certificate_image">
                                        <picture>
                                            <img src={Sertificate} alt="Sertificate" width="276" height="285" loading="lazy"/>
                                        </picture>
                                    </div>
                                    <a href="foo" className="reviews__certificate_link">
                                        ДИвитися подяку
                                    </a>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="reviews__slide splide__slide">
                            <div className="reviews__slide_col">
                                <svg width="36" height="39" viewBox="0 0 39 36">
                                    <use xlinkHref="#quote"></use>
                                </svg>
                                <div className="reviews__slide_text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="reviews__slide_person reviews__person">
                                    <div className="reviews__person_avatar">
                                        <img src="https://picsum.photos/id/275/512/512" alt="" width="59" height="59" loading="lazy"/>
                                    </div>
                                    <div className="reviews__person_info">
                                        <h3>Олена петрівна</h3>
                                        <span>директор lohou</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__slide_col">
                                <div className="reviews__certificate">
                                    <div className="reviews__certificate_image">
                                        <picture>
                                            <img src={Sertificate} alt="Sertificate" width="276" height="285" loading="lazy"/>
                                        </picture>
                                    </div>
                                    <a href="foo" className="reviews__certificate_link">
                                        ДИвитися подяку
                                    </a>
                                </div>
                            </div>
                        </SplideSlide>
					</Splide>

				</div>
				<div className="reviews__pagination slider-pagination splide__pagination"></div>
			</div>
            
		</section>
    )
}
