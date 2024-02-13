import React from 'react'
import { NavLink } from 'react-router-dom'

export const BreadCrumbs = ({ pages }) => {
    return (
        <div className="breadcrumbs container">
			<NavLink to={'/'} className="breadcrumbs__link">Головна</NavLink>
			<span className="breadcrumbs__separator">-</span>
            {pages.map((item, index) => (                
                item.route ? <NavLink to={item.route} key={index} className="breadcrumbs__link">{item.page}</NavLink> : <span key={index} className="breadcrumbs__current">{item.page}</span>
            ))}
		</div>
    )
}
