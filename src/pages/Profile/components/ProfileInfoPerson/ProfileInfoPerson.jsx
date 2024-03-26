import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getApiLink} from "../../../../api/getApiLink";
import {GetApiHeaders} from "../../../../functions/getApiHeaders";
import getCookies from "../../../../functions/getCookies";
import {useSelector} from "react-redux";

const ProfileInfoPerson = () => {

    const userData = useSelector(state => state.toolkit.user)

    const [isAnimate, setIsAnimate] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [organizationName, setOrganizationName] = useState("")
    const [documentCode, setDocumentCode] = useState("")
    const [phone, setPhone] = useState("")
    const [headMasterName, setHeadMasterName] = useState("")

    useEffect(() => {

        setName(userData?.name ?? "–")
        setEmail(userData?.email ?? "–")
        setOrganizationName(userData?.organization?.name ?? "–")
        setDocumentCode(userData?.organization?.document_code ?? "–")
        setPhone(userData?.phone_number ?? "–")
        setHeadMasterName(userData?.organization?.contact_person ?? "–")

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
            "email": email,
            "name": name,
            "phone_number": phone,
            "organization": {
                "name": organizationName,
                "document_code": documentCode,
                "contact_person": headMasterName,
            }
        }

        email === userData.email && delete dataBody.email
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
                    Личные данные
                </h3>
                <button onClick={handleEdit} type="button" className="account__block_edit" title="Редактировать">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <use xlinkHref="#edit"></use>
                    </svg>
                </button>
            </div>
            <div className="account__block_wrapper">
                {!isEdit ?
                    <div className="account__block_group" style={{opacity: isAnimate ? 0 : 1}}>
                        <label className="account__block_item">
                            <span>ФИО Директора</span>
                            <span className="value">
                                {headMasterName}
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>Название организации</span>
                            <span className="value">
                                {organizationName}
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>E-mail *</span>
                            <span className="value">
                                {email}
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>Код ЄДРПОУ/ІПН</span>
                            <span className="value">
                                {documentCode}
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>Телефон *</span>
                            <span className="value">
                                {phone}
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>ФИО Контактного лица</span>
                            <span className="value">
                                {name}
                            </span>
                        </label>
                    </div> :
                    <form onSubmit={handleChangeUserInfo} className="account__block_group"
                          style={{opacity: isAnimate ? 0 : 1}}>
                        <label className="account__block_item">
                            <span>ФИО Директора</span>
                            <span className="input-label">
                                <input type="text" name="name-director" placeholder="Введите имя директора"
                                       value={headMasterName} onChange={e => setHeadMasterName(e.target.value)} required
                                       className="input"/>
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>Название организации</span>
                            <span className="input-label">
                                <input type="text" name="company-name" placeholder="Введите название организации"
                                       value={organizationName} onChange={e => setOrganizationName(e.target.value)}
                                       required className="input"/>
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span className="is-required">E-mail</span>
                            <span className="input-label">
                                <input type="email" name="email" placeholder="Введите email" value={email}
                                       onChange={e => setEmail(e.target.value)} required className="input"/>
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>Код ЄДРПОУ/ІПН</span>
                            <span className="input-label">
                                <input type="text" name="code" placeholder="Введите код ЄДРПОУ/ІПН" value={documentCode}
                                       onChange={e => setDocumentCode(e.target.value)} required className="input"/>
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span className="is-required">Телефон</span>
                            <span className="input-label">
                                <input type="tel" name="phone" placeholder="Введите номер телефона" value={phone}
                                       onChange={e => setPhone(e.target.value)} required className="input"/>
                            </span>
                        </label>
                        <label className="account__block_item">
                            <span>ФИО Контактного лица</span>
                            <span className="input-label">
                                <input type="text" name="contact-name" placeholder="Введите имя контактного лица"
                                       value={name} onChange={e => setName(e.target.value)} required className="input"/>
                            </span>
                        </label>
                        <div className="account__block_footer">
                            <button className="button is-mode-1" type={"submit"}>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#save"></use>
                                </svg>
                                <span>Сохранить</span>
                            </button>
                            <button onClick={handleEdit} type={"button"} className="button is-mode-2">
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

export default ProfileInfoPerson;