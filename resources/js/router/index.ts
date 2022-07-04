import {createRouter, createWebHistory} from "vue-router";
import isAuthenticated from "../middlewares/isAuth";

import routes from "./routes";

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let name = String(to.name);
    if (!['login', 'register'].includes(name) && !isAuthenticated()) next({name: 'login'})
    else next()
})

const initRouter = (app) => {
    app.use(router)
}

export default initRouter