<template lang="pug">
  v-app
    v-layout
      card(name="Hamburger", 
      :tier="0")
      //card(name="Cheeseburger", 
      //:tier="1")
      //card(name="Bacon double cheeseburger", 
      //:tier="2")
      //card(name="Heart attack burger", 
      //:tier="3")

</template>

<script>

import Card from './components/card.vue'

export default {

  components: {
    Card
  },

  data: () => ({
    
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