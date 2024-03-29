import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getApiLink} from "../../../api/getApiLink";
import {NavLink} from "react-router-dom";
import {GetApiHeaders} from "../../../functions/getApiHeaders";
import {useSelector} from "react-redux";

const CatalogCategories = () => {

    const allCategories = useSelector(state => state.toolkit.allCategories)

    return (
        <ul className="catalog__categories_list">

            {
                allCategories.map(cat =>
                    <li key={cat.id}>
                        <NavLink to={`/catalog/${cat.id}`}>
                            <span>
                                {cat.name}
                            </span>
                            <i>
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                    <use xlinkHref="#arrow-next"></use>
                                </svg>
                            </i>
                        </NavLink>
                    </li>
                )
            }

        </ul>
    );
};

export default CatalogCategories;