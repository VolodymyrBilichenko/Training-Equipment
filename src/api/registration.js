import axios from "axios"
import { getApiLink } from "./getApiLink";
import {setUser} from "../redux/toolkitSlice";
import setCookie from "../functions/setCookie";

export const handleRegistration = (
    e,
    name,
    email,
    phone,
    pass,
    setSuccess,
    setError,
    setName,
    setEmail,
    setPhone,
    setPass,
    navigate,
    dispatch,
    SetPopContext
) => {
    e.preventDefault()

    axios.post(getApiLink('/api/auth/registration'), {
        name: name,
        email: email,
        phone_number: phone,
        password: pass
    }).then((res) => {

        if (res.status === 201) {
            setSuccess('You have been registered. Wait for redirecting')
            setError('')

            setName('')
            setEmail('')
            setPhone('')
            setPass('')

            console.log(res.data)

            setTimeout(() => {
                navigate('/profile')
                dispatch(setUser(res.data.data))
                setCookie('cookieToken', res.data.data.token );
                SetPopContext("")
            }, 2000)


        }
    }).catch(err => {
        setError(err.response.data.message)
    })
}