import {createStore} from "vuex";

import application from "./modules/application";

const store = createStore({
    modules: {
        application
    }
})

store.subscribe((mutation, state) => {
    localStorage.setItem('state', JSON.stringify(state))
})

const initStore = (app) => {
    app.use(store)
}

export default initStore