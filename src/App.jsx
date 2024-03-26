import {createContext, useEffect, useState} from 'react';
import './assets/js/main'
import './assets/scss/style.scss'
import {routes} from './routes/routes'
import {Route, Routes} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Sprite} from './components/IconSprite/Sprite';
import {Footer} from './components/Footer/Footer';
import {LoginPopUp} from './components/LoginPopUp/LoginPopUp';
import {RegisterPopUp} from './components/RegisterPopUp/RegisterPopUp';
import {ResetPassPopUp} from './components/ResetPassPopUp/ResetPassPopUp';
import {OrderPopUp} from './components/OrderPopUp/OrderPopUp';
import {ThanksPopUp} from './components/ThanksPopUp/ThanksPopUp';
import {useDispatch} from "react-redux";
import {setAllProducts, setBasket, setFavorites, setUser} from "./redux/toolkitSlice";
import getCookies from "./functions/getCookies";
import axios from "axios";
import {getApiLink} from "./api/getApiLink";
import setCookie from "./functions/setCookie";
import {GetApiHeaders} from "./functions/getApiHeaders";

export const PopupContext = createContext(null);

export const App = () => {
    const [routesList] = useState(routes())
    const [modal, setModal] = useState('');
    const dispatch = useDispatch()

    const ModalList = () => {
        if (modal === 'login') {
            return <LoginPopUp modal={modal}/>
        } else if (modal === 'register') {
            return <RegisterPopUp modal={modal}/>
        } else if (modal === 'resetPass') {
            return <ResetPassPopUp modal={modal}/>
        } else if (modal === 'order') {
            return <OrderPopUp modal={modal}/>
        } else if (modal === 'thx') {
            return <ThanksPopUp modal={modal}/>
        }

    }


    useEffect(() => {

        getCookies("basket") && dispatch(setBasket(JSON.parse(getCookies("basket"))))
        getCookies("favorite") && dispatch(setFavorites(JSON.parse(getCookies("favorite"))))

        // GET ALL PRODUCTS
        axios.get(getApiLink(`/api/products/get`), {headers: GetApiHeaders()})
            .then(({data}) => {
                dispatch(setAllProducts(data.data))
            })
            .catch(error => {
                console.log('products undefined', error);
            })

        // GET USER IF WE HAVE COOKIE
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('cookieToken')}`
        axios.get(getApiLink('/api/user/profile'))
            .then(({data}) => {
                dispatch(setUser(data.data))
            })
            .catch((error) => {
                console.log('user undefined', error);
            })

        // GET USER BASKET IF WE HAVE COOKIE
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('cookieToken')}`
        axios.get(getApiLink('/api/bucket/get'))
            .then(({data}) => {
                console.log(data)
                setCookie("basket", JSON.stringify(data.data.products))
                dispatch(setBasket(data.data.products))
            })
            .catch((error) => {
                console.log('user undefined', error);
            })

    }, [])

    return (
        <>
            <Sprite/>

            <PopupContext.Provider value={setModal}>

                <Header/>

                <div className='main'>
                    <Routes>
                        {routesList.map(route => <Route key={route.path} element={route.element} path={route.path}/>)}
                    </Routes>
                </div>

                <Footer/>

                {ModalList()}

            </PopupContext.Provider>

        </>
    );
}
