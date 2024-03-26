import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import { NavLink } from 'react-router-dom';
import {GetApiHeaders} from "../../functions/getApiHeaders";

export const CategoriesList = ({ClassNameList}) => {

    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {

        axios.get(getApiLink('/api/categories/get?active=1'), {headers: GetApiHeaders()})
            .then(({ data }) => {
                setAllCategories(data.data);

                console.log('categor',data.data);
            })
            .catch((error) => {
                console.log('categories undefined', error);
            });
    }, [])

    return (
        <ul className={`categories__list ${ClassNameList}`}>

            {allCategories.map((category) => {            
              return  <li key={category.id}>
                    <NavLink to={`/catalog/${category.id}`}>
                        <img src={category.icon_link} width="52" height="52" loading="lazy" alt="categories ic"/>
                        <h3>{category.name}</h3>
                    </NavLink>
                </li>
            })}

        </ul>
    )
}
