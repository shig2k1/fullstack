<template lang="pug">
  div(:class="{ 'side-a':!flipped, 'side-b':flipped }",
  @click="clicked").tile
    div.inner(:class="tileClass")
</template>

<script>
import { GAME_EVENTS } from '../../enums/socketio-events'
import { CARD_VARIATIONS as CV } from '../../enums/card-variations'
import { mapGetters } from 'vuex'

export default {
  props: {
    flipped: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
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
    ]),
    tileClass(){
      return `${ CV[this.color].toLowerCase() }`
    }
  },

  methods: {
    clicked(){
      const { x, y } = this
      this.$emit('flip', { x, y })
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

    &.side-a {
      background:$card-bg-a;
      div.inner {
        background: $side-a;
        cursor: pointer;
      }
    }
    &.side-b {
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
