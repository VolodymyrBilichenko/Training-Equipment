import axios from "axios";
import { getApiLink } from "../api/getApiLink";
import { useState } from "react";
import { setUser } from "../redux/toolkitSlice";
import { useDispatch } from "react-redux";
import setCookie from "../functions/setCookie";

export const useRegistration = ({ body }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    axios
      .post(getApiLink("/api/auth/registration"), body)
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status < 300) {
          setIsSuccess(true);
          dispatch(setUser(res?.data?.data));
          setCookie("cookieToken", res?.data?.data?.token);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err?.response?.data?.errors?.email[0] ?? "");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { handleSubmit, isSuccess, errorMessage, isLoading };
};
