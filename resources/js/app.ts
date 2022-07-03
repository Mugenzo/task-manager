import {createApp} from "vue";

import initRouter from '@/router'
import initStore from "@/storage";
import initVuetify from "@/plugins/vuetify";
import App from '@/App.vue'

const app = createApp(App)

initStore(app)
initRouter(app)
initVuetify(app)

app.mount('#app')