<template lang="pug">
  div
    h1 {{ count }}
    p We are getting somewhere though...
    p Yes, that's much better - as long as the state doesn't change, everything seems to be fine
    v-btn(@click="btn_onClick") Click me!
</template>

<script>
import {ACTIONS} from '../store'
export default {
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
    }
  }
}
</script>

