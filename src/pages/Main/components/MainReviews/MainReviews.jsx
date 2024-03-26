import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import { SectionTitle } from '../../../../components/SectionTitle/SectionTitle'
import axios from 'axios';
import { getApiLink } from '../../../../api/getApiLink';
import { GetApiHeaders } from '../../../../functions/getApiHeaders';

export const MainReviews = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        axios.get(getApiLink('/api/reviews/get'), {headers: GetApiHeaders()})
            .then(({data}) => {
                setReviewsData(data.data)
            })
            .catch((error) => {
                console.error('error reviews data', error);
            })
    }, [])

    console.log(reviewsData);

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
                        {reviewsData.map(reviewItem => (
                            <SplideSlide className="reviews__slide splide__slide" key={reviewItem.id} style={{border: '1px solid #7f469b', borderRadius: '20px'}}>
                                <div className="reviews__slide_col">
                                    <svg width="36" height="39" viewBox="0 0 39 36">
                                        <use xlinkHref="#quote"></use>
                                    </svg>
                                    <div className="reviews__slide_text">
                                        <p>
                                            {reviewItem.text}
                                        </p>
                                    </div>
                                    <div className="reviews__slide_person reviews__person">
                                        <div className="reviews__person_avatar">
                                            <img src="https://picsum.photos/id/275/512/512" alt="" width="59" height="59" loading="lazy"/>
                                        </div>
                                        <div className="reviews__person_info">
                                            <h3>{reviewItem.user.name}</h3>
                                            <span>{reviewItem.user.organization.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews__slide_col">
                                    <div className="reviews__certificate">
                                        <div className="reviews__certificate_image">
                                            {reviewItem.file && (
                                                    <picture>
                                                        <img src={reviewItem.file.web_path} alt="Sertificate" width="276" height="285" loading="lazy"/>
                                                    </picture>
                                                )}
                                        </div>
                                        <a href="foo" className="reviews__certificate_link">
                                            ДИвитися подяку
                                        </a>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
					</Splide>

				</div>
				<div className="reviews__pagination slider-pagination splide__pagination"></div>
			</div>
            
		</section>
    )
}
