import React, {useContext, useEffect, useState} from 'react';
import {LoginPopUp} from "../LoginPopUp/LoginPopUp";
import {RegisterPopUp} from "../RegisterPopUp/RegisterPopUp";
import {ResetPassPopUp} from "../ResetPassPopUp/ResetPassPopUp";
import {OrderPopUp} from "../OrderPopUp/OrderPopUp";
import {ThanksPopUp} from "../ThanksPopUp/ThanksPopUp";
import {PopupContext} from "../../App";

export const Modals = ({modal}) => {

    const SetPopContext = useContext(PopupContext);

    const [_modal, set_modal] = useState("")

    const handleClosePopUp = () => {
        set_modal("")
        setTimeout(() => {
            SetPopContext('');
        }, 300)
    }

    useEffect(() => {
        set_modal(modal)
    }, [modal])

    const modalsList = {
        "login": <LoginPopUp handleClosePopUp={handleClosePopUp}/>,
        "register": <RegisterPopUp handleClosePopUp={handleClosePopUp}/>,
        "resetPass": <ResetPassPopUp handleClosePopUp={handleClosePopUp}/>,
        "order": <OrderPopUp handleClosePopUp={handleClosePopUp}/>,
        "thx": <ThanksPopUp handleClosePopUp={handleClosePopUp}/>,
    }

    return (
        <div className={`popup ${_modal ? 'is-active' : ''}`} id="login-popup">
            {
                modalsList[modal]
            }
        </div>
    );
};