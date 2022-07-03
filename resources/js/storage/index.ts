import {createStore} from "vuex";

import application from "@/storage/modules/application";
import user from "@/storage/modules/user";

const store = createStore({
    modules: {
        application,
        user
    }
})

store.subscribe((mutation, state) => {
    localStorage.setItem('state', JSON.stringify(state))
})

const initStore = (app) => {
    app.use(store)
}

export default initStore