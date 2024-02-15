import { Error } from "../pages/Eroor/Error"
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
            path: '*',
            element: <Error/>
        },
    ]
}