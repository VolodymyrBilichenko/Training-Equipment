import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export const CatalogCategories = () => {
    const {category_id} = useParams();
    const [categoriesList, setCategoriesList] = useState([]);

    const allCategories = useSelector(state => state.toolkit.allCategories)

    return (
        <ul className="catalog__categories_list">

            {
                allCategories.map(cat =>
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