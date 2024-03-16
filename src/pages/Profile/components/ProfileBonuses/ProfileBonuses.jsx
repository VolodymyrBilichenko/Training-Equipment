import React from 'react'

export const ProfileBonuses = () => {
    return (
        <div className="account__bonuses">
            <h3 className="account__bonuses_title min-title">
                Бонусы и скидки
            </h3>
            <ul className="account__bonuses_list">
                <li>
                    <strong>12 %</strong>
                    <b>Активная скидка</b>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </li>
                <li>
                    <strong>1 000 ₴</strong>
                    <b>Банусы на счету</b>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </li>
            </ul>
        </div>
    )
}
