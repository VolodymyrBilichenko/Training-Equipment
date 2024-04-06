import React from 'react'
import {useSelector} from "react-redux";

export const ProfileBonuses = () => {

    const user = useSelector(state => state.toolkit.user)

    return (
        <div className="account__bonuses">
            <h3 className="account__bonuses_title min-title">
                Бонусы и скидки
            </h3>
            <ul className="account__bonuses_list">
                {!!user?.discount?.percent && <li>
                    <strong>{user.discount.percent} %</strong>
                    <b>Активная скидка</b>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p> */}
                </li>}
                {!!user?.discount?.bonuses_sum && <li>
                    <strong>{user?.discount?.bonuses_sum} ₴</strong>
                    <b>Банусы на счету</b>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p> */}
                </li>}
            </ul>
        </div>
    )
}
