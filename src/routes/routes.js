export const routes = () => {
    return [
        {
            path: '/Training-Equipment',
            element: 'main'
        },
        {
            path: '/',
            element: 'main'
        },
        {
            path: '*',
            element: 'qq not found'
        },
    ]
}