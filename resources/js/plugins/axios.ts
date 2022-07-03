import axios from "axios";

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
    }
}

const initHttp = (app) => {
    app.use($http)
}

export {createHttp, initHttp}