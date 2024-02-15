import { Categories } from "../pages/Categories/Categories"
import { Error } from "../pages/Eroor/Error"
import { Favorites } from "../pages/Favorites/Favorites"
import { Main } from "../pages/Main/Main"
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
            path: '*',
            element: <Error/>
        },
    ]
}