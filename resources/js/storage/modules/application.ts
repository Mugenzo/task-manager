const state = () => ({
    drawer: true,
    darkTheme: false,
})

const mutations = {
    initializeStore(state) {
        if (localStorage.getItem('state')) {
            this.replaceState(
                Object.assign(state, JSON.parse(localStorage.getItem('state')))
            )
        }
    },

    toggleDarkTheme(state) {
        state.darkTheme = !state.darkTheme
    },

    toggleDrawer(state) {
        state.drawer = !state.drawer
    }
}

const getters = {
    darkTheme: (state) => state.darkTheme,
    drawer: (state) => state.drawer
}

const actions = {
    toggleDarkTheme({commit}) {
        commit('toggleDarkTheme')
    },
    toggleDrawer({commit}) {
        commit('toggleDrawer')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}