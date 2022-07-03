import axios from "axios";

const state = () => ({
    user: false,
    api_key: false
})

const mutations = {}

const getters = {
    isLogged: (state) => state.api_key
}

const actions = {
    async authorise({commit}, data) {
        try {
            return await axios.post('/auth', data)
        } catch (exception) {
            throw exception.response.data
        }
    },

    async register({commit}, data) {
        try {
            return await axios.post('/register', data)
        } catch (exception) {
            throw exception.response.data
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}