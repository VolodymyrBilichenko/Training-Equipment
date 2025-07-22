import axios from "axios";
import { getApiLink } from "../api/getApiLink";
import { useState } from "react";
import { setUser } from "../redux/toolkitSlice";
import { useDispatch } from "react-redux";
import setCookie from "../functions/setCookie";
import { useTranslation } from "react-i18next";

export const useRegistration = ({ body }) => {
  const { i18n } = useTranslation();

  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'\-\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+380 \(\d{2}\) \d{3} \d{2} \d{2}$/;
    const passwordRegex =
      /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,32}$/;

    if (!nameRegex.test(body.name.trim())) {
      getError("invalid_name");
      return;
    } else if (!emailRegex.test(body.email.trim())) {
      getError("invalid_email");
      return;
    } else if (!phoneRegex.test(body.phone_number.trim())) {
      getError("invalid_phone");
      return;
    } else if (!passwordRegex.test(body.password.trim())) {
      getError("invalid_password");
      return;
    }

    function getError(error) {
      setErrorMessage(error);
      setIsLoading(false);
    }

    setErrorMessage("");

    axios
      .post(getApiLink("/api/auth/registration"), body, {
        headers: {
          "Accept-Language": i18n.language || "en", // или указать вручную "ru" / "en"
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          setIsSuccess(true);
        }
      })
      .catch((err) => {
        setErrorMessage(err?.response?.data?.errors?.email[0] ?? "");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { handleSubmit, isSuccess, errorMessage, isLoading };
};
