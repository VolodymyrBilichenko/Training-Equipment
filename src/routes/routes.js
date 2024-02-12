import { Main } from "../pages/Main/Main"

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
            path: '*',
            element: 'qq not found'
        },
    ]
}