import React from 'react'

export const OrderListItem = () => {
  return (
    <li className="orders__card">
        <a href="some" className="orders__card_body" target="_blank">
            <div className="orders__card_number">
                <strong>5124</strong>
                <span>Наказ №</span>
            </div>
            <div className="orders__card_text">
                <p>
                    “Про затвердження Типового переліку засобів навчання та обладнання для навчальних кабінетів і STEM-лабораторій»
                </p>
            </div>
            <i className="orders__card_link_icon" title="Детальніше">
                <svg width="44" height="44" viewBox="0 0 44 44">
                    <use xlinkHref="#link-arrow"></use>
                </svg>
            </i>
        </a>
    </li>
  )
}
