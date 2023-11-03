import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Explore from '~/Pages/explore'
import Notification from '~/Pages/notification'
import MainLayout from '~/assets/layout/main/main'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'explore',
                element: <Explore />,
            },
            {
                path: 'notification',
                element: <Notification />,
            },
            {
                path: '*',
                element: 'HATA!',
            },
        ],
    },
])

export default routes
