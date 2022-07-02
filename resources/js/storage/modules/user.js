const state = () => ({
    user: false,
    api_key: false
})

const mutations = {

}

const getters = {
    isLogged: (state) => state.api_key
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}