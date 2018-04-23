import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

import App from './app.vue'

Vue.use(VueResource)
Vue.use(Vuetify)

new Vue({
    el: '#app',
    render: h => h(App)
})