import { Catalog } from "../pages/Catalog/Catalog"
import { Categories } from "../pages/Categories/Categories"
import { Error } from "../pages/Eroor/Error"
import { Favorites } from "../pages/Favorites/Favorites"
import { Main } from "../pages/Main/Main"
import { ProductCard } from "../pages/ProductCard/ProductCard"
import { Search } from "../pages/Search/Search"

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
            path: '*',
            element: <Error/>
        },
    ]
}