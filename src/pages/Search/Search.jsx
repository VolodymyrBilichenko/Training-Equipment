import React, {useEffect, useState} from 'react'
import {BreadCrumbs} from '../../components/BreadCrumbs/BreadCrumbs'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import {MainHeroSearch} from '../Main/components/MainHero/components/MainHeroSearch'
import {ProductsList} from '../../components/ProductsList/ProductsList'
import {PaginationProducts} from '../../components/PaginationProducts/PaginationProducts'
import {BackGroundDecor} from '../../components/BackGroundDecor/BackGroundDecor'
import {useParams} from 'react-router-dom'
import axios from "axios";
import {getApiLink} from "../../api/getApiLink";
import {GetApiHeaders} from "../../functions/getApiHeaders";
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export const Search = () => {
    const { t } = useTranslation();

    const {search} = useParams();

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(!search) return;

        axios.get(getApiLink(`/api/products/get${search ? `?search=${search}` : ""}`), {headers: GetApiHeaders()})
            .then(({data}) => {
                setProducts(data.data)
                setIsLoading(false)
            })
            .catch(error => {
                toast.error('Произошла неизвестная ошибка', error)
                setIsLoading(false)
            })

    }, [search])

    return (
        <>
            {/* <BackGroundDecor/> */}

            <BreadCrumbs pages={[{page: `${t('search_by')} ${search}`}]}/>

            <div className='favorites container'>

                <SectionTitle title={`${t('search_by')} ${search}`}/>

                <MainHeroSearch searchPlaceholder={'Пошук'}/>

                <ProductsList isLoading={isLoading} list={products} ClassNameList={'favorites__list'}/>

                <PaginationProducts ClassName={'favorites__pagination'}/>

            </div>
        </>
    )
}
