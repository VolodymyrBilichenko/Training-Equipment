import React, { useContext, useEffect, useState } from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { PaginationProducts } from '../../components/PaginationProducts/PaginationProducts'
import { useSelector } from "react-redux";
import { PopupContext } from '../../App'

export const Favorites = () => {
    // TODO переделать избраное, что бы отправляло на бек 

    const favorites = useSelector(state => state.toolkit.favorites)
    // const allProducts = useSelector(state => state.toolkit.allProducts)

    // const favoritesList = allProducts.filter(item => favorites.some(item2 => item2 === item.id))

    console.log(favorites);
    const [isLoading, setIsLoading] = useState(false)

    const FavModal = useContext(PopupContext);

    const handleFavModal = () => {
        FavModal('favorites')
    }


    // useEffect(() => {
    //     if(!favorites.length && !allProducts.length && !favoritesList.length) return;

    //     setIsLoading(false)
    // }, [favoritesList])

    return (
        <>
            <BackGroundDecor/>

            <BreadCrumbs pages={[{page: 'Избранное'}]}/>

            <div className='favorites container'>

                <SectionTitle title={'Избранное'}/>

                <button onClick={handleFavModal} className="favorites__receive_email open-popup">
                    Желаю получить Коммерческое предложение по Email для товаров в Избранное
                </button>

                <ProductsList isLoading={isLoading} list={favorites} ClassNameList={'favorites__list'}/>

                <PaginationProducts ClassName={'favorites__pagination'}/>
            </div>
        </>
    )
}
