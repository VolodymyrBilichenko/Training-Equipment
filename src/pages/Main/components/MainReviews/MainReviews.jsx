import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
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

			
            <Swiper
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={0}               
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"

                style={{                    
                    marginTop: '40px',

                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    '--swiper-pagination-border': '1px solid #7f469b',
                }}
            >
                {reviewsData.map(reviewItem => (
                    <SwiperSlide className="reviews__slide" key={reviewItem.id} style={{border: '1px solid #7f469b', marginRight: '0'}}>
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
                    </SwiperSlide>
                ))}
            </Swiper>
            
		</section>
    )
}
