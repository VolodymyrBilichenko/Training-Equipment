import React from 'react'
import { NavLink } from 'react-router-dom'

export const BreadCrumbs = ({ pages = [] }) => {
    return (
        <div className="breadcrumbs container">
			<NavLink to={'/'} className="breadcrumbs__link">Головна</NavLink>
			
            {pages.map((item, index) => (            
                item.route ? 
                    <React.Fragment key={`sep-${index}`}><span className="breadcrumbs__separator">-</span><NavLink key={`nav-${index}`} to={item.route} className="breadcrumbs__link">{item.page}</NavLink></React.Fragment> 
                    : 
                    <React.Fragment key={`st-${index}`}><span className="breadcrumbs__separator">-</span><span key={`kk-${index}`} className="breadcrumbs__current">{item.page}</span></React.Fragment>
            ))}
		</div>
    )
}
