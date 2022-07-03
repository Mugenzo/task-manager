import {createRouter, createWebHistory} from "vue-router";
import isAuthenticated from "../middlewares/isAuth";

import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !isAuthenticated()) next({ name: 'login' })
    else next()
})

const initRouter = (app) => {
    app.use(router)
}

export default initRouter