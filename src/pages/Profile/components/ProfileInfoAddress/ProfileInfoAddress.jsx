import React, {useEffect, useState} from 'react';
import axios from "axios";
import getCookies from "../../../../functions/getCookies";
import {getApiLink} from "../../../../api/getApiLink";
import {GetApiHeaders} from "../../../../functions/getApiHeaders";
import {useSelector} from "react-redux";

const ProfileInfoAddress = () => {

    const userData = useSelector(state => state.toolkit.user)

    const [isAnimate, setIsAnimate] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    
    const [deliveryName, setDeliveryName] = useState("")
    const [deliveryAddress, setDeliveryAddress] = useState("")
    const [deliveryPhone, setDeliveryPhone] = useState("")
    const [deliveryBox, setDeliveryBox] = useState("")
    

    useEffect(() => {

        setDeliveryName(userData?.address_delivery?.full_name ?? "–")
        setDeliveryAddress(userData?.address_delivery?.address_line ?? "–")
        setDeliveryPhone(userData?.address_delivery?.phone_number ?? "–")
        setDeliveryBox(userData?.address_delivery?.po_box ?? "–")

    }, [userData])

    const handleEdit = () => {
        setIsAnimate(true)

        setTimeout(() => {
            setIsEdit(prev => !prev)

            setTimeout(() => {
                setIsAnimate(false)
            }, 10)
        }, 350)
    }

    const handleChangeUserInfo = (e) => {
        e.preventDefault()

        const dataBody = {
            "address_delivery": {
                "address_line": deliveryAddress,
                "po_box": deliveryBox,
                "full_name": deliveryName,
                "phone_number": deliveryPhone
            }
        }
        
        delete dataBody.updated_at
        delete dataBody.created_at
        delete dataBody.id

        axios.defaults.headers.common['Authorization'] = `Bearer ${getCookies("cookieToken")}`;
        axios.put(getApiLink("/api/user/update"), dataBody, {headers: GetApiHeaders()}).then(({data}) => {
            handleEdit()
        }).catch(er => console.log(er))
    }

    return (
        <div className={`account__block ${isEdit && "is-editing"}`}>
            <div className="account__block_header">
                <h3 className="account__block_title min-title">
                    Адрес доставки
                </h3>
                <button onClick={handleEdit} type="button" className="account__block_edit" title="Редактировать">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <use xlinkHref="#edit"></use>
                    </svg>
                </button>
            </div>
            <div className="account__block_wrapper">
                {!isEdit ? <div className="account__block_group" style={{opacity: isAnimate ? 0 : 1}}>
                        <label className="account__block_item">
                            <span>Адрес</span>
                            <span className="value">
                                {deliveryAddress}
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>ФИО Получателя</span>
                            <span className="value">
                                {deliveryName}
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>Отделение Новой Почты</span>
                            <span className="value">
                                {deliveryBox}
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>Телефон получателя</span>
                            <span className="value">
                            {deliveryPhone}
                        </span>
                        </label>
                    </div> :
                    <form onSubmit={handleChangeUserInfo} className="account__block_group"
                          style={{opacity: isAnimate ? 0 : 1}}>
                        <label className="account__block_item">
                            <span>Адрес</span>
                            <span className="input-label">
                                <input type="text" name="address" placeholder="Введите адрес" value={deliveryAddress} onChange={e => setDeliveryAddress(e.target.value)} required className="input"/>
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>ФИО Получателя</span>
                            <span className="input-label">
                                <input type="text" name="receiver-name" placeholder="Введите имя получателя" value={deliveryName} onChange={e => setDeliveryName(e.target.value)} required className="input"/>
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>Отделение Новой Почты</span>
                            <span className="input-label">
                                <input type="text" name="new-post-address" placeholder="Введите отделение Новой Почты" value={deliveryBox} onChange={e => setDeliveryBox(e.target.value)} required className="input"/>
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>Телефон получателя</span>
                            <span className="input-label">
                                <input type="tel" name="receiver-phone" placeholder="Введите номер телефона" value={deliveryPhone} onChange={e => setDeliveryPhone(e.target.value)} required className="input"/>
                            </span>
                        </label>
                        <div className="account__block_footer">
                            <button className="button is-mode-1" type="submit">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#save"></use>
                                </svg>
                                <span>Сохранить</span>
                            </button>
                            <button onClick={handleEdit} className="button is-mode-2" type="button">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#cancel"></use>
                                </svg>
                                <span>Отменить</span>
                            </button>
                        </div>
                    </form>}
            </div>
        </div>
    );
};

export default ProfileInfoAddress;