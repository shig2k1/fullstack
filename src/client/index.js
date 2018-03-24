import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import App from './app.vue'

import {store} from './store'

export const SocketInstance = socketio('http://localhost:3000')

Vue.use(VueSocketIO, SocketInstance)
Vue.use(VueResource)
Vue.use(Vuetify)

new Vue({
    el: '#app',

    store,

    render: h => h(App)
})