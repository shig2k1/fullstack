<template lang="pug">
  page-layout
    div(slot="top")
      h3 Lobby
    
    div(slot="middle")
      pairs-game

    div(slot="bottom")
      p bottom
</template>

<script>
import pageLayout from './page-layout.vue'
import pairsGame from './pairs-game.vue'

export default {
  components: {
    pageLayout,
    pairsGame
  }
}
</script>
