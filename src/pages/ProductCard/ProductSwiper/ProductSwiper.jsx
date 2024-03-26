// import React from 'react'
// import SliderItemPh from '../../../assets/img/product/product-image.jpg';
// import Swiper from 'swiper';

// export const ProductSwiper = () => {

//     const swiper = new Swiper('.mySwiper2', {
//         // configure Swiper to use modules
//     });

//     return (
//         <div className="product__col">
//             <div className="product__gallery">
//                 <div className="product__gallery_track ">

//                     <div className="product__gallery_list swiper mySwiper2"
//                         // options={{
//                         //     rewind: true,
//                         //     autoWidth: true,
//                         //     fixedWidth: "90px",
//                         //     arrows: false,
//                         //     pagination: false,
                            
//                         //     gap: 16,
//                         //     isNavigation: true,
//                         //     mediaQuery: "min",
                    
//                         //     breakpoints: {
//                         //         992: {
//                         //             speed: 700,
//                         //             easing: "ease",
//                         //         }
//                         //     }
//                         // }}
//                     >
//                         <div className="swiper-wrapper">

//                             <div className="product__gallery_slide">
//                                 <div className="product__gallery_image swiper-slide">
//                                     <picture>
//                                         <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
//                                     </picture>
//                                 </div>
//                             </div>
//                             <div className="product__gallery_slide">
//                                 <div className="product__gallery_image swiper-slide">
//                                     <picture>
//                                         <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
//                                     </picture>
//                                 </div>
//                             </div>
//                             <div className="product__gallery_slide">
//                                 <div className="product__gallery_image swiper-slide">
//                                     <picture>
//                                         <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
//                                     </picture>
//                                 </div>
//                             </div>
//                             <div className="product__gallery_slide">
//                                 <div className="product__gallery_image swiper-slide">
//                                     <picture>
//                                         <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
//                                     </picture>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </div>

//             {/* <div class="product__gallery_nav splide on-mob">
//                 <div class="product__gallery_nav_track splide__track">
//                     <ul class="product__gallery_nav_list splide__list">
//                         <li class="product__gallery_nav_slide splide__slide">
//                             <div class="product__gallery_nav_image image-aspect-ratio">
//                                 <picture>
//                                     <img src="img/product/product-image.jpg" alt="" width="90" height="90" loading="lazy"/>
//                                 </picture>
//                             </div>
//                         </li>
//                         <li class="product__gallery_nav_slide splide__slide">
//                             <div class="product__gallery_nav_image image-aspect-ratio">
//                                 <picture>
//                                     <img src="img/product/product-image.jpg" alt="" width="90" height="90" loading="lazy"/>
//                                 </picture>
//                             </div>
//                         </li>
//                         <li class="product__gallery_nav_slide splide__slide">
//                             <div class="product__gallery_nav_image image-aspect-ratio">
//                                 <picture>
//                                     <img src="img/product/product-image.jpg" alt="" width="90" height="90" loading="lazy"/>
//                                 </picture>
//                             </div>
//                         </li>
//                         <li class="product__gallery_nav_slide splide__slide">
//                             <div class="product__gallery_nav_image image-aspect-ratio">
//                                 <picture>
//                                     <img src="img/product/product-image.jpg" alt="" width="90" height="90" loading="lazy"/>
//                                 </picture>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div> */}
//         </div>   
//     )
// }



import React, { useEffect, useState } from 'react';
import SliderItemPh from '../../../assets/img/product/product-image.jpg';
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';

export const ProductSwiper = () => {
    const [swiper, setSwiper] = useState(null);
    

    const images = [
        {
          id: 1,
          src: SliderItemPh,
          alt: 'Image 1',
          thumb: SliderItemPh,
        },
        {
          id: 2,
          src: SliderItemPh,
          alt: 'Image 2',
          thumb: SliderItemPh,
        },
        {
          id: 3,
          src: SliderItemPh,
          alt: 'Image 3',
          thumb: SliderItemPh,
        },
        {
          id: 4,
          src: SliderItemPh,
          alt: 'Image 4',
          thumb: SliderItemPh,
        },
        {
          id: 5,
          src: SliderItemPh,
          alt: 'Image 5',
          thumb: SliderItemPh,
        },
        {
          id: 6,
          src: SliderItemPh,
          alt: 'Image 6',
          thumb: SliderItemPh,
        },
        {
          id: 7,
          src: SliderItemPh,
          alt: 'Image 7',
          thumb: SliderItemPh,
        },
      ];
  
      useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
          slidesPerView: 1, // <-- Установите 1 для отображения одного слайда
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          thumbs: {
            swiper: new Swiper('.swiper-thumbs', {
              spaceBetween: 10,
              slidesPerView: 4,
              freeMode: true,
              watchSlidesProgress: true,
            }),
          },
        });
    
        setSwiper(swiper);
      }, []);
    
      useEffect(() => {
        if (swiper) {
        //   swiper.update();
        }
      }, [swiper]);
    
  
    return (
      <div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {images.map((image) => (
              <div className="swiper-slide" key={image.id}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
  
        <div className="swiper-container swiper-thumbs">
          <div className="swiper-wrapper">
            {images.map((image) => (
              <div className="swiper-slide" key={image.id}>
                <img src={image.thumb} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };