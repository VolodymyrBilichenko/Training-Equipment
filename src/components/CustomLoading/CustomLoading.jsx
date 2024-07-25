import React from 'react'

import ArrowLoader from '../../assets/img/loader.svg'

export const CustomLoading = () => {
    return (
        // style="display: none;"
        <div className="catalog__loader" >
            <div className="catalog__loader_block">
                <img src={ArrowLoader} width="53" height="53" alt=""/>
                <span>Loading...</span>
            </div>
        </div>
    )
}
