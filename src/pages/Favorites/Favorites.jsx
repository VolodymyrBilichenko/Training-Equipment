import React, { useContext, useEffect, useState } from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { PaginationProducts } from '../../components/PaginationProducts/PaginationProducts'
import { useSelector } from "react-redux";
import { PopupContext } from '../../App'
import { useTranslation } from 'react-i18next';

export const Favorites = () => {
    const { t } = useTranslation();

    const favorites = useSelector(state => state.toolkit.favorites)

    const [isLoading, setIsLoading] = useState(false)

    const FavModal = useContext(PopupContext);

    const handleFavModal = () => {
        FavModal('favorites')
    }

    return (
        <>
            {/* <BackGroundDecor/> */}

            <BreadCrumbs pages={[{page: t('favorites_title')}]}/>

            <div className='favorites container'>

                <SectionTitle title={t('favorites_title')}/>

                <button onClick={handleFavModal} className="favorites__receive_email open-popup">
                    {t('want_to_get_text')}
                </button>

                <ProductsList isLoading={isLoading} isShowMore={true} list={favorites} ClassNameList={'favorites__list'}/>

                <PaginationProducts ClassName={'favorites__pagination'}/>
            </div>
        </>
    )
}
