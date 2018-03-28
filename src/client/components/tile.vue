<template lang="pug">
  div(:class="{ sideA: !isFlipped, sideB: isFlipped }",
  @clicked="clicked")
    div.inner
</template>

<script>
export default {
  props: {
    flipped: {
      type: Boolean,
      default: false
    }
  },

  data:() => ({
    isFlipped: false
  }),

  methods: {
    clicked(){
      this.isFlipped = !this.isFlipped
      this.$emit('flip', this.isFlipped)
    }
  }
}
</script>

<style lang="scss" scoped>
  $size: 100px;
  $innerSize: $size - 4;

  $sideA: gray;
  $sideB: red; 

  div.tile {
    display: inline-block;
    width: $size;
    height: $size;

    div.inner {
      width: $innerSize;
      height: $innerSize;

    }
  }
</style>
