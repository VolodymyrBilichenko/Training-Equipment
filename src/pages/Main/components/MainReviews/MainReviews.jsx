import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { SectionTitle } from '../../../../components/SectionTitle/SectionTitle'
import axios from 'axios';
import { getApiLink } from '../../../../api/getApiLink';
import { GetApiHeaders } from '../../../../functions/getApiHeaders';
import {toast} from "react-toastify";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const MainReviews = ({id}) => {
    const [reviewsData, setReviewsData] = useState([]);

    const Fancybox = (props) => {
        const containerRef = useRef(null);
      
        useEffect(() => {
          const container = containerRef.current;
      
          const delegate = props.delegate || "[data-fancybox]";
          const options = props.options || {};
      
          NativeFancybox.bind(container, delegate, options);
      
          return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
          };
        }, []);
      
        return <div ref={containerRef}>{props.children}</div>;
    }

    useEffect(() => {
        axios.get(getApiLink('/api/reviews/get'), {headers: GetApiHeaders()})
            .then(({data}) => {
                setReviewsData(data.data)
            })
            .catch((error) => {
                toast.error("Возникла неизведанная ошибка")
                console.error('error reviews data', error);
            })
    }, [])


    return (
        <section className="reviews container" id={id}>

            <SectionTitle title={'Відгуки'}/>

			
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
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
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
            >
                {reviewsData.map(reviewItem => (
                    <SwiperSlide className="reviews__slide" key={reviewItem.id} style={{border: '1px solid #7f469b', marginRight: '0', height: 'auto'}}>
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
                                    <svg width="26" height="26" viewBox="0 0 48 48">
                                        <use xlinkHref="#user"></use>
                                    </svg>
                                    {/* <img src="https://picsum.photos/id/275/512/512" alt="" width="59" height="59" loading="lazy"/> */}
                                </div>
                                <div className="reviews__person_info">
                                    <h3>{reviewItem.user.name}</h3>
                                    <span>{reviewItem.user.organization.name}</span>
                                </div>
                            </div>
                        </div>
                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            
                            <div className="reviews__slide_col">
                                <div className="reviews__certificate">
                                {reviewItem?.file && <a href={reviewItem.file && reviewItem.file.web_path} className="reviews__certificate_link" data-fancybox="gallery">
                                    <div>
                                        {reviewItem.file && (
                                                    <img src={reviewItem.file.web_path} alt="Sertificate" width="100%" loading="lazy" style={{marginBottom: "30px"}}/>
                                            )}
                                    </div>
                                    
                                        ДИвитися подяку
                                </a>}
                                </div>
                            </div>
                        </Fancybox>
                    </SwiperSlide>
                ))}
            </Swiper>
            
		</section>
    )
}
