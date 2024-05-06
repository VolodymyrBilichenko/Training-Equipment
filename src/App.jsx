import {createContext, useEffect, useState} from 'react';
import './assets/js/main'
import './assets/scss/style.scss'
import 'react-toastify/dist/ReactToastify.css';
import {routes} from './routes/routes'
import {Route, Routes, useLocation} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Sprite} from './components/IconSprite/Sprite';
import {Footer} from './components/Footer/Footer';
import {useDispatch} from "react-redux";
import {setAllCategories, setAllProducts, setBasket, setFavorites, setUser} from "./redux/toolkitSlice";
import getCookies from "./functions/getCookies";
import axios from "axios";
import {getApiLink} from "./api/getApiLink";
import setCookie from "./functions/setCookie";
import {GetApiHeaders} from "./functions/getApiHeaders";
import {toast, ToastContainer} from "react-toastify";
import {Modals} from "./components/Modals/Modals";

export const PopupContext = createContext(null);

export const App = () => {
    const location = useLocation();
    const [routesList] = useState(routes())
    const [modal, setModal] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const hasCookieToken = getCookies('cookieToken');

    useEffect(() => {
        window.scrollTo(0, 0)

        getCookies("basket") && dispatch(setBasket(JSON.parse(getCookies("basket"))))
        getCookies("favorite") && dispatch(setFavorites(JSON.parse(getCookies("favorite"))))

        // GET ALL PRODUCTS
        axios.get(getApiLink(`/api/products/get?active=1`), {headers: GetApiHeaders()})
            .then(({data}) => {
                dispatch(setAllProducts(data.data))
            })
            .catch(error => {
                toast.error("Возникла неизведанная ошибка")
            })

        // GET ALL CATEGORIES
        axios.get(getApiLink(`/api/categories/get?active=1`), {headers: GetApiHeaders()})
            .then(({data}) => {
                dispatch(setAllCategories(data.data))
            })
            .catch(error => {
                toast.error("Возникла неизведанная ошибка")
            })

        if (hasCookieToken) {
        // GET USER IF WE HAVE COOKIE
            axios.defaults.headers.get['Authorization'] = `Bearer ${hasCookieToken}`
            axios.get(getApiLink('/api/user/profile'), {headers: GetApiHeaders()})
                .then(({data}) => {
                    dispatch(setUser(data.data))
                })
                .catch((error) => {
                    toast.error("Возникла неизведанная ошибка")
                })
        }

        // GET USER BASKET IF WE HAVE COOKIE
        if (hasCookieToken) {
            axios.defaults.headers.get['Authorization'] = `Bearer ${hasCookieToken}`
            axios.get(getApiLink('/api/bucket/get'), {headers: GetApiHeaders()})
                .then(({data}) => {
                    setCookie("basket", JSON.stringify(data.data.products))
                    dispatch(setBasket(data.data.products))
                })
                .catch((error) => {
                    toast.error("Возникла неизведанная ошибка")
                })
        }

        // GET USER FAVORITE IF WE HAVE COOKIE
        if (hasCookieToken) {
            axios.defaults.headers.get['Authorization'] = `Bearer ${hasCookieToken}`
            axios.get(getApiLink('/api/favorites/get?page=1'), {headers: GetApiHeaders()})
                .then(({data}) => {

                    const newArrFavorite = data.data.map((item) => {
                        return {
                            id: item.id,
                            name: item.name,
                            files: [{
                                web_path: item?.files[0]?.web_path
                            }],
                            original_price: item.original_price,
                            price: item.price,
                        }
                    })

                    dispatch(setFavorites(newArrFavorite))

                })
                .catch((error) => {
                    toast.error("Возникла неизведанная ошибка")
                })
        }

    }, [hasCookieToken, dispatch])

    return (
        <>
            <Sprite/>

            <PopupContext.Provider value={setModal}>

                <Header/>

                    <div className='main'>
                        <Routes location={location}>
                            {routesList.map(route => <Route key={route.path} element={route.element}
                                                            path={route.path}/>)}
                        </Routes>
                    </div>

                <Footer/>

                <Modals modal={modal} />

                <ToastContainer/>

            </PopupContext.Provider>

        </>
    );
}
