import React from 'react'

import ArrowLoader from '../../assets/img/loader.svg'
import { useTranslation } from 'react-i18next';

export const CustomLoading = () => {
    const { t } = useTranslation();
    return (
        // style="display: none;"
        <div className="catalog__loader" >
            <div className="catalog__loader_block">
                <img src={ArrowLoader} width="53" height="53" alt=""/>
                <span>
                    {t('loading...')}
                </span>
            </div>
        </div>
    )
}
