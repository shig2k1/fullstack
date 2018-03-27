<template lang="pug">
  div
    pre {{ tilemap }}
</template>

<script>
export default {
  computed: {
    game(){
      return { ...this.$store.state.availableGames[this.$store.state.game] || {} }
    },
    tilemap(){
      return [ ...this.game.tilemap ]
    }
  }
}
</script>
