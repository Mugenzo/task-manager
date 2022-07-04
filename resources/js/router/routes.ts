const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/auth/Login.vue')
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('@/views/auth/Registration.vue')
    },
    {
        path: '/',
        component: () => import('@/views/layouts/Default.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/views/pages/Dashboard.vue')
            },
            {
                path: '/users',
                name: 'users.index',
                component: () => import('@/views/pages/Users.vue')
            }
        ]
    }
]

export default routes