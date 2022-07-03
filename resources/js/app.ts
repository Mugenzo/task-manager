import {createApp} from "vue";

import initRouter from '@/router'
import initStore from "@/storage";
import initVuetify from "@/plugins/vuetify";
import {initHttp} from "@/plugins/axios";
import App from '@/App.vue'

const app = createApp(App)

initStore(app)
initRouter(app)
initVuetify(app)
initHttp(app)

app.mount('#app')