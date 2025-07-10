import React, {useContext} from 'react'
import ProfileInfoAddress from "../ProfileInfoAddress/ProfileInfoAddress";
import ProfileInfoPerson from "../ProfileInfoPerson/ProfileInfoPerson";
import {PopupContext} from "../../../../App";
import { useTranslation } from 'react-i18next';

export const ProfileInfo = () => {
    const { t } = useTranslation();

    const setModal = useContext(PopupContext)

    const handleOpenModal = () => {
        setModal("changePass")
    }

    return (
        <>
            <ProfileInfoPerson/>

            <ProfileInfoAddress/>

            <div className="account__block">
                <div className="account__block_header">
                    <h3 className="account__block_title min-title">
                        {t('account_settings')}
                    </h3>
                </div>
                <div className="account__block_wrapper">
                    <div className="account__block_group">
                        <button type={"button"} onClick={handleOpenModal} className="account__change_password button is-mode-2"
                           aria-label={t('change_password')}>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <use xlinkHref="#edit-2"></use>
                            </svg>
                            <span>
                                {t('change_password')}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
