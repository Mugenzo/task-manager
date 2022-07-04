import axios from "axios";
import {router} from "@/router";

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        router.push('/login')
    }
    return error;
});

const createHttp = (secured = true) => {
    if (secured) {
        let localData = JSON.parse(localStorage.getItem('state'))

        return axios.create({
            headers: {"Authorization": `Bearer ${localData.user.api_key}`}
        });
    } else {
        return axios.create();
    }
}

const $http = {
    install(app, options) {
        app.config.globalProperties.$http = () => {
            return createHttp()
        }

        app.provide('http', app.config.globalProperties.$http)
    }
}

const initHttp = (app) => {
    app.use($http)
}

export {createHttp, initHttp}