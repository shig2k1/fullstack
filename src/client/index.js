import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

import App from './app.vue'

import {store} from './store'

Vue.use(VueResource)
Vue.use(Vuetify)

new Vue({
    el: '#app',

    store,

    render: h => h(App)
})