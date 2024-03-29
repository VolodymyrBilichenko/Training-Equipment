import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import { NavLink } from 'react-router-dom';
import {GetApiHeaders} from "../../functions/getApiHeaders";
import {useSelector} from "react-redux";

export const CategoriesList = ({ClassNameList}) => {

    const allCategories = useSelector(state => state.toolkit.allCategories)

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
