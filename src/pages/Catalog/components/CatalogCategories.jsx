import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getApiLink} from "../../../api/getApiLink";
import {NavLink, useParams} from "react-router-dom";
import {GetApiHeaders} from "../../../functions/getApiHeaders";

export const CatalogCategories = () => {
    const {category_id} = useParams();
    const [categoriesList, setCategoriesList] = useState([]);

    console.log(category_id);

    useEffect(() => {
        axios.get(getApiLink("/api/categories/get"), {headers: GetApiHeaders()}).then(({data}) => {
            setCategoriesList(data.data)
            console.log(data)
        }).catch(er => console.log(er))
    }, [])

    return (
        <ul className="catalog__categories_list">

            {
                categoriesList.map(cat =>
                    <li key={cat.id}>
                        <NavLink to={`/catalog/${cat.id}`} className={({isActive}) => isActive ? 'is-current' : '' }>
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