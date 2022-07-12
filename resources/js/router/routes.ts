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
            },
            {
                path: ':project_id',
                name: 'project',
                component: () => import('@/views/pages/Project.vue'),
                children: [
                    {
                        path: ':desk_id',
                        name: 'desk',
                        component: () => import('@/views/pages/Desk.vue')
                    }
                ]
            }
        ]
    }
]

export default routes