import React, {useEffect, useState} from 'react'
import {BackGroundDecor} from '../../components/BackGroundDecor/BackGroundDecor'
import {BreadCrumbs} from '../../components/BreadCrumbs/BreadCrumbs'
import {ProductsList} from '../../components/ProductsList/ProductsList'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import axios from 'axios'
import {getApiLink} from '../../api/getApiLink'
import {useNavigate, useParams} from 'react-router-dom'
import {CatalogCategories} from "./components/CatalogCategories";
import {GetApiHeaders} from "../../functions/getApiHeaders";
import { PaginationProducts } from '../../components/PaginationProducts/PaginationProducts'

export const Catalog = () => {
    const {category_id, search} = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(search);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!searchQuery) return;

        navigate(`/search/${searchQuery}`)
    }

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)

        axios.get(getApiLink(`/api/products/get${category_id ? `?category_id=${category_id}` : ""}`), {headers: GetApiHeaders()})
            .then(({data}) => {
                setProducts(data.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log('products undefined', error);
                setIsLoading(false)
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
                        <form onSubmit={handleSubmit}>
                            <input onChange={e => setSearchQuery(e.target.value)} type="search" name="search" placeholder="Пошук по каталогу" required/>
                            <button type="submit" title="Поиск">
                                <svg width="26" height="26" viewBox="0 0 48 48">
                                    <use xlinkHref="#search"></use>
                                </svg>
                            </button>
                        </form>
                    </search>

                    <ProductsList list={products} ClassNameList={'catalog__list'} isLoading={isLoading}/>

                    <PaginationProducts/>
                </div>
            </section>
        </>
    )
}

