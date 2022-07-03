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
        name: 'dashboard',
        path: '',
        component: () => import('@/views/layouts/Default.vue'),
        children: [
            {
                path: '/',
                name: '',
                component: () => import('@/views/pages/Dashboard.vue')
            }
        ]
    }
]

export default routes