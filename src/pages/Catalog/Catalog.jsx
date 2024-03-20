import React, {useEffect, useState} from 'react'
import {BackGroundDecor} from '../../components/BackGroundDecor/BackGroundDecor'
import {BreadCrumbs} from '../../components/BreadCrumbs/BreadCrumbs'
import {ProductsList} from '../../components/ProductsList/ProductsList'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import axios from 'axios'
import {getApiLink} from '../../api/getApiLink'
import {useParams} from 'react-router-dom'
import CatalogCategories from "./components/CatalogCategories";
import {GetApiHeaders} from "../../functions/getApiHeaders";

export const Catalog = () => {
    const {category_id} = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.get(getApiLink(`/api/products/get${category_id ? `?category_id=${category_id}` : ""}`), {headers: GetApiHeaders()})
            .then(({data}) => {
                setProducts(data.data)
            })
            .catch(error => {
                console.log('products undefined', error);
            })

    }, [category_id])

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

                                <CatalogCategories/>

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

                    <ProductsList list={products} ClassNameList={'catalog__list'}/>

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
