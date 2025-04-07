import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GetApiHeaders } from "../../../../../functions/getApiHeaders";
import { getApiLink } from "../../../../../api/getApiLink";
import photoPlaceholder from "../../../../../assets/img/null-card-image.png";

export const MainHeroSearch = ({ searchPlaceholder }) => {
  const { search } = useParams();

  const [searchQuery, setSearchQuery] = useState(search);
  const navigate = useNavigate();

  const handleInputQuery = (evt) => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery.length === 0) {
      toast.error("Пошуковий запит не може бути порожнім");
      return;
    }

    const forbiddenChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (forbiddenChars.test(searchQuery)) {
      toast.error("Пошуковий запит містить неприпустимі символи");
      return;
    }

    navigate(`/search/${searchQuery}`);
  };

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowList, setIsShowList] = useState(true);

  useEffect(() => {
    if (!searchQuery) return setIsShowList(false);

    axios
      .get(
        getApiLink(`/api/products/get${searchQuery ? `?search=${searchQuery}` : ""}`),
        { headers: GetApiHeaders() }
      )
      .then(({ data }) => {
        setProducts(data.data);
        setIsLoading(false);
        setIsShowList(!!data.data)
      })
      .catch((error) => {
        toast.error("Произошла неизвестная ошибка", error);
        setIsLoading(false);
      });
  }, [searchQuery]);
  

  return (
    <search className="index-hero__search">
      <form
        className="index-hero__search--form"
        method="post"
        onSubmit={handleSubmit}
      >
        <label>
          <input
            onChange={handleInputQuery}
            type="search"
            name="search"
            placeholder={searchPlaceholder}
            value={searchQuery}
            required
          />
        </label>
        <button type="submit" title="Пошук">
          <svg width="26" height="26" viewBox="0 0 48 48">
            <use xlinkHref="#search"></use>
          </svg>
        </button>
      </form>
      {isShowList && <ul className="finding_list">

        {
            products.length ? products.map(item => (
                <li>
                    <NavLink to={`/product/${item.id}`}>
                        <img src={item.files[0]?.web_path ?? photoPlaceholder} alt="" />
                        <span>
                            {item.name}
                        </span>
                    </NavLink>
                </li>
            )) : "Товаров не найдено"
        }
      </ul>}
    </search>
  );
};
