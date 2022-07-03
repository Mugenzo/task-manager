import {createRouter, createWebHistory} from "vue-router";
import isAuthenticated from "../middlewares/isAuth";

import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (!['login', 'register'].includes(to.name) && !isAuthenticated()) next({name: 'login'})
    else next()
})

const initRouter = (app) => {
    app.use(router)
}

export default initRouter