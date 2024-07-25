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

    
}