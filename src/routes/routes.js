import { Basket } from "../pages/Basket/Basket"
import { Catalog } from "../pages/Catalog/Catalog"
import { Categories } from "../pages/Categories/Categories"
import { Error } from "../pages/Eroor/Error"
import { Favorites } from "../pages/Favorites/Favorites"
import { Main } from "../pages/Main/Main"
import { ProductCard } from "../pages/ProductCard/ProductCard"
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
            path: '/search',
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
            path: '/product',
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
            path: '/certificate',
            element: <Сertificate/>
        },
        {
            path: '*',
            element: <Error/>
        },
    ]
}