import React from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { CartItemLength } from '../../components/CartList/components/CartItemLength'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import SliderItemPh from '../../assets/img/product/product-image.jpg';

export const ProductCard = () => {

  // useEffect(() => {
  //   const sliders = document.querySelectorAll('.product__gallery');

  //   sliders.forEach(sliderElement => {
  //     const slider = new Splide(sliderElement, {
  //       type: 'fade',
  //       rewind: true,
  //       perPage: 1,
  //       arrows: false,
  //       pagination: false,
  //       speed: 700,
  //       easing: 'ease',
  //       breakpoints: {
  //         550: {
  //           speed: 400,
  //         },
  //       },
  //     });

  //     // slider.mount();
  //   });
  // }, [])
  
  return (
    <>
      <BackGroundDecor/>

      <BreadCrumbs pages={[{route: '/catalog', page: 'Каталог'},{page: 'Демонстраційна модель «Мозок. Анатомія людини» Learning resources'}]}/>

      <section className="product container">
        <div className="product__col">

          <div className="product__gallery splide">
            <div className="product__gallery_track splide__track">
              <Splide className="product__gallery_list splide__list"
                options={{}} 
              >

                <SplideSlide className="product__gallery_slide splide__slide">
                  <div className="product__gallery_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="519" height="519" loading="lazy"/>
                    </picture>
                  </div>
                </SplideSlide>

                <SplideSlide className="product__gallery_slide splide__slide">
                  <div className="product__gallery_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="519" height="519" loading="lazy"/>
                    </picture>
                  </div>
                </SplideSlide>

                <SplideSlide className="product__gallery_slide splide__slide">
                  <div className="product__gallery_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="519" height="519" loading="lazy"/>
                    </picture>
                  </div>
                </SplideSlide>

                <SplideSlide className="product__gallery_slide splide__slide">
                  <div className="product__gallery_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="519" height="519" loading="lazy"/>
                    </picture>
                  </div>
                </SplideSlide>

              </Splide>
            </div>
          </div>

          <div className="product__gallery_nav splide on-mob">
            <div className="product__gallery_nav_track splide__track">
              <ul className="product__gallery_nav_list splide__list">
                <li className="product__gallery_nav_slide splide__slide">
                  <div className="product__gallery_nav_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                    </picture>
                  </div>
                </li>
                <li className="product__gallery_nav_slide splide__slide">
                  <div className="product__gallery_nav_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                    </picture>
                  </div>
                </li>
                <li className="product__gallery_nav_slide splide__slide">
                  <div className="product__gallery_nav_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                    </picture>
                  </div>
                </li>
                <li className="product__gallery_nav_slide splide__slide">
                  <div className="product__gallery_nav_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                    </picture>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="product__col">
          <h2 className="product__title title">
            Демонстраційна модель «Мозок. Анатомія людини» Learning resources
          </h2>
          <span className="product__article-number">
            Артикул 059865
          </span>
          <span className="product__status in-stock">
            {/* <!-- .out-of-stock --> */}
            В наличии
          </span>
          <div className="product__info">
            <div className="product__info_col">
              <div className="product__price">
                {/* <!-- <strong></strong> --> */}
                <ins>3 800 ₴</ins>
                <del>3 800 ₴</del>
              </div>
              <CartItemLength/>
            </div>
            <div className="product__info_col">
              <button className="product__add-to-cart button" type="button" aria-label="Додати до кошика">
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <use xlinkHref="#cart"></use>
                </svg>
                <span>
                  Додати до кошика
                </span>
              </button>
            </div>
          </div>
          <div className="product__info">
            <div className="product__info_col">
              <table className="product__characteristics">
                <caption>Характеристики</caption>
                <tbody>
                  <tr>
                    <td>Стан</td>
                    <td>Новий</td>
                  </tr>
                  <tr>
                    <td>Виробник</td>
                    <td>Learning Resources</td>
                  </tr>
                  <tr>
                    <td>Вага</td>
                    <td>200 гр</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="product__info_col">
              <ul className="product__paymethods">
                <li>
                  <i>
                    <img src="img/product/credit_card.svg" width="40" height="40" loading="lazy" alt=""/>
                  </i>
                  <span>
                    Безнал
                  </span>
                </li>
                <li>
                  <i>
                    <img src="img/product/account_balance_wallet.svg" width="40" height="40" loading="lazy" alt=""/>
                  </i>
                  <span>
                    Наложенный платёж
                  </span>
                </li>
                <li>
                  <i>
                    <img src="img/product/assignment.svg" width="40" height="40" loading="lazy" alt=""/>
                  </i>
                  <span>
                    По договору поставки
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="product__col">
          <div className="product__gallery_nav splide on-desktop">
            <div className="product__gallery_nav_track splide__track">
              <ul className="product__gallery_nav_list splide__list">
                <li className="product__gallery_nav_slide splide__slide">
                  <div className="product__gallery_nav_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                    </picture>
                  </div>
                </li>
                <li className="product__gallery_nav_slide splide__slide">
                  <div className="product__gallery_nav_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                    </picture>
                  </div>
                </li>
                <li className="product__gallery_nav_slide splide__slide">
                  <div className="product__gallery_nav_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                    </picture>
                  </div>
                </li>
                <li className="product__gallery_nav_slide splide__slide">
                  <div className="product__gallery_nav_image image-aspect-ratio">
                    <picture>
                      <img src={SliderItemPh} alt="" width="90" height="90" loading="lazy"/>
                    </picture>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <ul className="product__orders">
            <li>
              <h3>Відповідає Наказу </h3>
              <strong>№574</strong>
              <p>
                Про затвердження типового переліку засобів навчання та обладнання для навчальних кабінетів і STEM-лабораторій
              </p>
            </li>
            <li>
              <h3>Відповідає Наказу </h3>
              <strong>№574</strong>
              <p>
                Про затвердження типового переліку засобів навчання та обладнання для навчальних кабінетів і STEM-лабораторій
              </p>
            </li>
            <li>
              <h3>Відповідає Наказу </h3>
              <strong>№574</strong>
              <p>
                Про затвердження типового переліку засобів навчання та обладнання для навчальних кабінетів і STEM-лабораторій
              </p>
            </li>
          </ul>
        </div>

        <div className="product__col">
          <div className="product__description">
            <h3>
              Опис
            </h3>
            <p>Демонстраційна модель мозку людини наочно покаже учням його внутрішній устрій, пояснить, як частини мозку взаємодіють один з одним, допоможе розібратися у функціонуванні центральної нервової системи.</p>
            <p>Модель складається з 31 пластикового елемента, які надійно кріпляться за допомогою шарнірів. Надзвичайна деталізація кожної частини макета, допоможе легко визначити і зіставити всі складові частини мозку: мозочок, лобова, тім'яна, скронева і потилична частки, мозолисте тіло, стовбур мозку, гіпокампу, шлуночки, інсула, смугасте тіло, внутрішня капсула, лентіформное ядро. У зібраному вигляді модель мозку має в висоту 10 см і зручно кріпиться до підставки для демонстрації. В ілюстрованій інструкції наведені назви і перераховані функції всіх частин мозку.</p>
            <p>Компанія Learning Resources ставить перед собою завдання допомогти педагогам і батькам, надаючи високоякісні освітні продукти, які забезпечують захоплюючий навчальний процес, беручи до уваги при цьому здатності, рівень розвитку кожної дитини.</p>
            <p>У набір входить:</p>
            <ul>
              <li>10-и см модель мозку з 31 елементів;</li>
              <li>Підставка для демонстрації;</li>
              <li>Ілюстрована інструкція по збірці.</li>
            </ul>
            <p>Матеріал - пластик.</p>
            <p>Вік - 8-12 років.</p>
            <p>Вага - 200 гр.</p>
            <p>Розмір упаковки - 22 * 17 * 5 см.</p>
            <p>Виробник - Learning Resources, США.</p>
          </div>
        </div>
      </section>



      <section className="recommended container">
        <div className="recommended__decor" aria-hidden="true">
          <picture>
            <img src="img/decor-element.png" alt="" width="0" height="0" loading="lazy"/>
          </picture>
        </div>
        <div className="recommended__container">
          <h2 className="recommended__title title">
            Рекомендованные
          </h2>

          <ProductsList ClassNameList={'recommended__list'}/>

        </div>
      </section>
    </>
  )
}
