import axios from "axios"
import { getApiLink } from "./getApiLink"

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
    navigate
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

            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }).catch(err => {
        setError(err.response.data.message)
    })
}