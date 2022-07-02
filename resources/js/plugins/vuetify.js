import {createVuetify} from "vuetify";
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

const initVuetify = (app) => {
    app.use(vuetify)
}

export default initVuetify