import { useDispatch } from "react-redux";
import {
  setAllCategories,
  setAllProducts,
  setBasket,
  setFavorites,
  setUser,
} from "./../redux/toolkitSlice";
import getCookies from "./../functions/getCookies";
import axios from "axios";
import { getApiLink } from "./../api/getApiLink";
import setCookie from "./../functions/setCookie";
import { GetApiHeaders } from "./../functions/getApiHeaders";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { getAllCartProducts, getFavoriteProducts } from "../utils/db";

export const useGetBeginerAPIs = () => {
  const hasCookieToken = getCookies("cookieToken");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    getAllCartProducts().then((products) => {
      dispatch(setBasket(products));
    });
      
    getFavoriteProducts().then((products) => {
      dispatch(setFavorites(products));
    });

    // GET ALL PRODUCTS
    axios
      .get(getApiLink(`/api/products/get?active=1`), {
        headers: GetApiHeaders(),
      })
      .then(({ data }) => {
        dispatch(setAllProducts(data.data));
      })
      .catch((error) => {
        toast.error("Возникла неизведанная ошибка");
      });

    // GET ALL CATEGORIES
    axios
      .get(getApiLink(`/api/categories/get?active=1`), {
        headers: GetApiHeaders(),
      })
      .then(({ data }) => {
        console.log(data);
        dispatch(setAllCategories(data.data));
      })
      .catch((error) => {
        toast.error("Возникла неизведанная ошибка");
      });

    if (hasCookieToken) {
      // GET USER IF WE HAVE COOKIE
      axios.defaults.headers.get["Authorization"] = `Bearer ${hasCookieToken}`;
      axios
        .get(getApiLink("/api/user/profile"), { headers: GetApiHeaders() })
        .then(({ data }) => {
          dispatch(setUser(data.data));
        })
        .catch((error) => {
          toast.error("Возникла неизведанная ошибка");
        });
    }

    // GET USER BASKET IF WE HAVE COOKIE
    if (hasCookieToken) {
      axios.defaults.headers.get["Authorization"] = `Bearer ${hasCookieToken}`;
      axios
        .get(getApiLink("/api/bucket/get"), { headers: GetApiHeaders() })
        .then(({ data }) => {
          // setCookie("basket", JSON.stringify(data.data.products));
          // dispatch(setBasket(data.data.products));
        })
        .catch((error) => {
          toast.error("Возникла неизведанная ошибка");
        });
    }

    // GET USER FAVORITE IF WE HAVE COOKIE
    if (hasCookieToken) {
      axios.defaults.headers.get["Authorization"] = `Bearer ${hasCookieToken}`;
      axios
        .get(getApiLink("/api/favorites/get?page=1"), {
          headers: GetApiHeaders(),
        })
        .then(({ data }) => {
          const newArrFavorite = data.data.map((item) => {
            return {
              id: item.id,
              name: item.name,
              files: [
                {
                  web_path: item?.files[0]?.web_path,
                },
              ],
              original_price: item.original_price,
              price: item.price,
            };
          });

          dispatch(setFavorites(newArrFavorite));
        })
        .catch((error) => {
          toast.error("Возникла неизведанная ошибка");
        });
    }
  }, [hasCookieToken]);
};
