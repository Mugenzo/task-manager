import {createHttp} from "@/plugins/axios";

import {router} from "@/router";

const state = () => ({
    user: false,
    api_key: false
})

const mutations = {
    setUser: (state, {user}) => {
        state.user = user;
    },
    setApiKey: (state, {api_key}) => {
        state.api_key = api_key
    },
    setBoth: (state, {user, api_key}) => {
        state.user = user;
        state.api_key = api_key
    },
    resetUser(state) {
        state.user = false;
        state.api_key = false;
    }
}

const getters = {
    isLogged: (state) => state.api_key
}

const actions = {
    async authorise({commit}, data) {
        try {
            const response = await createHttp(false).post('/auth', data)

            commit('setBoth', response.data)

            return response.data
        } catch (exception) {
            throw exception.response.data
        }
    },

    async register({commit}, data) {
        try {
            const response = await createHttp(false).post('/register', data)

            commit('setBoth', response.data)

            return response;
        } catch (exception) {
            throw exception.response.data
        }
    },

    async me({commit}) {
        try {
            const response = await createHttp().get('/me')

            commit('setUser', response.data)
        } catch (exception) {
            commit('resetUser')
        }
    },

    async logout({commit}) {
        try {
            await createHttp().post('/logout')

            commit('resetUser')

            await router.push('/login')
        } catch (exception) {
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