import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import photoPlaceholder from '../../../assets/img/null-card-image.png'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const ProductSwiper = ({ dataCard }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    console.log('dataph',dataCard);

    return (
        <div className="product__col">
            {dataCard && Array.isArray(dataCard) && dataCard.length > 0 ? (
                <>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                            margin: '0',
                            width: '100%',
                            maxWidth: '520px',
                        }}
                        spaceBetween={20}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 product__swiper"
                    >
                        {dataCard?.map(item => (                            
                            <SwiperSlide className="product__swiper_slide" key={item.id}>
                                <div className="product__swiper_image">
                                    <img src={item.web_path ? item.web_path : ''} alt='prod ph'/>
                                </div>
                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper product__swiper_nav"
                    >
                        {dataCard?.map(items => (
                            <SwiperSlide key={items.id}>
                                <img src={items.web_path ? items.web_path : ''} alt='prod ph'/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>

            ) : <img src={photoPlaceholder} style={{width: '100%'}} alt='prod ph'/>}

        </div>   
    )
}