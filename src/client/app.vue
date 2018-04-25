<template lang="pug">
  v-app
    v-layout
      card(name="Hamburger", 
      :tier="0",
      :model="burger")
      card(name="Cheeseburger", 
      :tier="1",
      :model="cheeseburger")
      //card(name="Bacon double cheeseburger", 
      //:tier="2")
      //card(name="Heart attack burger", 
      //:tier="3")

</template>

<script>

import Card from './components/card/card.vue'

import { burger, cheeseburger } from './assets/data/models'

export default {

  components: {
    Card
  },

  data: () => ({
    burger,
    cheeseburger
  }),

  computed: {
    
  },

  methods: {
   
  },

  beforeCreate(){
  }
}
</script>

<style lang="scss">
@import '../../node_modules/vuetify/dist/vuetify.min.css';

</style>