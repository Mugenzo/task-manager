// User part
const DefaultLayout = () => import('@/views/layouts/Default.vue')
const Dashboard = () => import('@/views/pages/Dashboard.vue')

// Guest part
const Login = () => import('@/views/auth/Login.vue')

const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'dashboard',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                component: Dashboard
            }
        ]
    }
]

export default routes