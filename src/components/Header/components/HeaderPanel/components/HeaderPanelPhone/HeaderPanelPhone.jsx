import React from 'react'

export const HeaderPanelPhone = ({ staticData }) => {

    const phoneNumbers = staticData.filter(number => number.key === 'phone_number')

  return (
    <ul className="header__tel">
        {phoneNumbers.map(staticD => (
            <li key={staticD.id}>
                <a href={`tel:${staticD.value}`}>
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <use xlinkHref="#tel"></use>
                    </svg>
                    <span>
                        {staticD.value}
                    </span>
                </a>
            </li>
        ))}
    </ul>
  )
}
