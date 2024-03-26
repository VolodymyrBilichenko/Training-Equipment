import React, {useContext} from 'react'
import ProfileInfoAddress from "../ProfileInfoAddress/ProfileInfoAddress";
import ProfileInfoPerson from "../ProfileInfoPerson/ProfileInfoPerson";
import {PopupContext} from "../../../../App";

export const ProfileInfo = () => {

    const setModal = useContext(PopupContext)

    const handleOpenModal = () => {
        setModal("resetPass")
    }

    return (
        <>
            <ProfileInfoPerson/>

            <ProfileInfoAddress/>

            <div className="account__block">
                <div className="account__block_header">
                    <h3 className="account__block_title min-title">
                        Настройки аккаунта
                    </h3>
                </div>
                <div className="account__block_wrapper">
                    <div className="account__block_group">
                        <button type={"button"} onClick={handleOpenModal} className="account__change_password button is-mode-2"
                           aria-label="Изенить пароль">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <use xlinkHref="#edit-2"></use>
                            </svg>
                            <span>Изенить пароль</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
