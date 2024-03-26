import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItemPh from '../../../assets/img/product/product-image.jpg';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import './styles.css';

export const ProductSwiper = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

//     <div className="product__gallery_slide">
    //     <div className="product__gallery_image swiper-slide">
    //         <picture>
    //             <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
    //         </picture>
    //     </div>
    // </div>

    return (
        <div className="product__col">
            {/* <div className="product__gallery"> */}
                {/* <div className="product__gallery_track "> */}

                    

                    <Swiper
                        style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        margin: '0',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 product__swiper"
                        
                    >
                        <SwiperSlide className="product__swiper_slide">
                            <div className="">
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__swiper_slide">
                            <div className="product__swiper_image">
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__swiper_slide">
                            <div className="product__swiper_image">
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__swiper_slide">
                            <div className="product__swiper_image">
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__swiper_slide">
                            <div className="product__swiper_image">
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__swiper_slide">
                            <div className="product__swiper_image">
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__swiper_slide">
                            <div className="product__swiper_image">
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__swiper_slide">
                            <div className="product__swiper_image">
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__swiper_slide">
                            <div className="product__swiper_image">
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__swiper_slide">
                            <div className="product__swiper_image">
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt=''/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='1'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='2'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='3'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='4'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='5'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt='6'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt='7'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt='8'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt='9'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt='10'/>
                        </SwiperSlide>
                    </Swiper>
                {/* </div> */}
            {/* </div> */}

            {/* <div class="product__gallery_nav splide on-mob">
                <div class="product__gallery_nav_track splide__track">
                    <ul class="product__gallery_nav_list splide__list">
                        <li class="product__gallery_nav_slide splide__slide">
                            <div class="product__gallery_nav_image image-aspect-ratio">
                                <picture>
                                    <img src="img/product/product-image.jpg" alt="" width="90" height="90" loading="lazy"/>
                                </picture>
                            </div>
                        </li>
                        <li class="product__gallery_nav_slide splide__slide">
                            <div class="product__gallery_nav_image image-aspect-ratio">
                                <picture>
                                    <img src="img/product/product-image.jpg" alt="" width="90" height="90" loading="lazy"/>
                                </picture>
                            </div>
                        </li>
                        <li class="product__gallery_nav_slide splide__slide">
                            <div class="product__gallery_nav_image image-aspect-ratio">
                                <picture>
                                    <img src="img/product/product-image.jpg" alt="" width="90" height="90" loading="lazy"/>
                                </picture>
                            </div>
                        </li>
                        <li class="product__gallery_nav_slide splide__slide">
                            <div class="product__gallery_nav_image image-aspect-ratio">
                                <picture>
                                    <img src="img/product/product-image.jpg" alt="" width="90" height="90" loading="lazy"/>
                                </picture>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}
        </div>   
    )
}