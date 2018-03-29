<template lang="pug">
  div(:class="{ sideA: !flipped, sideB: flipped }",
  @click="clicked").tile
    div.inner
</template>

<script>
import { GAME_EVENTS } from '../../enums/socketio-events'
import { mapGetters } from 'vuex'

export default {
  props: {
    flipped: {
      type: Boolean,
      default: false
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },

  computed: {
    ...mapGetters([
      'game'
    ])
  },

  watch: {
    flipped(nv){
      console.log('flip!', nv)
    }
  },
  
  methods: {
    clicked(){
      const isFlipped = !this.flipped
      const { x, y } = this
      this.$emit('flip', { x, y, isFlipped})
    }
  }
}
</script>

<style lang="scss" scoped>
  $size: 60px;
  $innerSize: $size - 4;

  $card-bg-a: lightgray;
  $card-bg-b: darken($card-bg-a, 20%);
  $side-b: red; 
  $side-a: linear-gradient(210deg, red, darken(red, 25%));

  div.tile {
    display: inline-block;
    width: $size;
    height: $size;

    &.sideA {
      background:$card-bg-a;
      div.inner {
        background: $side-a;
        cursor: pointer;
      }
    }
    &.sideB {
      background:$card-bg-b;
      div.inner {
        background: white;
      }
    }

    div.inner {
      width: $innerSize;
      height: $innerSize;
      margin: 2px;
    }
  }
</style>
