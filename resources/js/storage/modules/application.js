const state = () => ({
    darkTheme: false,
})

const mutations = {
    initializeStore(state) {
        if (localStorage.getItem('state')) {
            this.replaceState(
                Object.assign(state, JSON.parse(localStorage.getItem('state')))
            )
        }
    }
}

const getters = {
    darkTheme: (state) => state.darkTheme
}

const actions = {
    toggleDarkTheme({commit}) {
        console.log(commit)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}