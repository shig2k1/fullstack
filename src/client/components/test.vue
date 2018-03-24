<template lang="pug">
  div
    h1 {{ count }}
    p(v-if="isConnected") We're connected to the server
    pre {{ socketMessage }}
    v-btn(@click="btn_onClick") Click me!
    v-btn.primary(@click="server_event") No! click me
</template>

<script>
import {ACTIONS} from '../store'
export default {
  data:()=>({
    isConnected: false,
    socketMessage: ''
  }),

  sockets: {
    connect(){
      this.isConnected = true;
    },

    // fired when the server sends something on the 'messageChannel'
    messageChannel(data){
      this.socketMessage = data;
    }
  },

  computed: {
    count(){
      return this.$store.state.count
    }
  },

  methods: {
    btn_onClick(){
      console.log('woo')
      this.$store.dispatch(ACTIONS.INCREMENT)

      this.$nextTick(()=>{
        console.log(this.$store.state.count)
      })
    },

    server_event(){
      this.$http.post('api/data')
      .then(success=>{
        console.log('success', success)
      }, err=>{
        console.log('error!')
      })
    }
  }
}
</script>

