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
        path: '',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: '',
                component: Dashboard
            }
        ]
    }
]

export default routes