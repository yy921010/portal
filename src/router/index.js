import {NotFound, DashBoard, Login, User} from '@pages'


export default [
    {
        name: 'login',
        path: '/login',
        component: Login,
    },
    {
        name: 'notFound',
        path: '/notFound',
        component: NotFound,
    },
    {
        name: 'notFound',
        path: '/admin',
        component: NotFound,
        isAuth: '',
        children: [
            {
                name: 'user',
                path: '/user',
                component: User,
                isAuth: '',
            },
            {
                name: 'dashboard',
                path: '/dashboard',
                component: DashBoard,
                isAuth: '',
            }
        ]
    }
]

