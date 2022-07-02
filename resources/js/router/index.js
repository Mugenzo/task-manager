import {createRouter, createWebHistory} from "vue-router";
import isAuthenticated from "../middlewares/isAuth";

import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from) => {
    if (!isAuthenticated && to.name !== 'Login') {
        return {name: 'Login'}
    }
})

const initRouter = (app) => {
    app.use(router)
}

export default initRouter