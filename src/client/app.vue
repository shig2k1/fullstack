<template lang="pug">
  v-app
    test
    timed-poll
</template>

<script>
import test from './components/test.vue'
import timedPoll from './components/timed-poll.vue'

export default {
  components: {
      test,
      timedPoll
  }
}
</script>

<style lang="scss">
@import '../../node_modules/vuetify/dist/vuetify.min.css';
</style>