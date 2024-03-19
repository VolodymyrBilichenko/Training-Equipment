import { Basket } from "../pages/Basket/Basket"
import { Catalog } from "../pages/Catalog/Catalog"
import { Categories } from "../pages/Categories/Categories"
import { Error } from "../pages/Eroor/Error"
import { Favorites } from "../pages/Favorites/Favorites"
import { Main } from "../pages/Main/Main"
import { PriceList } from "../pages/PriceList/PriceList"
import { ProductCard } from "../pages/ProductCard/ProductCard"
import { Profile } from "../pages/Profile/Profile"
import { Search } from "../pages/Search/Search"
import { Сertificate } from "../pages/Сertificate/Сertificate"

export const routes = () => {
    return [
        {
            path: '/Training-Equipment',
            element: <Main/>
        },
        {
            path: '/',
            element: <Main/>
        },
        {
            path: '/search/:search',
            element: <Search/>
        },
        {
            path: '/favorites',
            element: <Favorites/>
        },
        {
            path: '/categories',
            element: <Categories/>
        },
        {
            path: '/catalog',
            element: <Catalog/>
        },
        {
            path: '/catalog/:category_id',
            element: <Catalog/>
        },
        {
            path: '/product/:id',
            element: <ProductCard/>
        },
        {
            path: '/basket',
            element: <Basket/>
        },
        {
            path: '/certificate',
            element: <Сertificate/>
        },
        {
            path: '/pricelist',
            element: <PriceList/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '*',
            element: <Error/>
        },
    ]
}