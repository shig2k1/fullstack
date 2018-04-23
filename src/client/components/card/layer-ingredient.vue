<template lang="pug">
  g(:transform="transform")
    use(:width='ingredient.width', 
    :height='ingredient.height',
    :transform='ingredient.transform', 
    :xlink:href="'#' + ingredient.id")
</template>

<script>
import { BURGER_INGREDIENTS } from '../../assets/data'

export default {
  props: {
    ingredient: {
      type: Object,
      default: null
    }
  },

  data: () => ({
    BURGER_INGREDIENTS
  }),

  computed: {
    transform(){
      const { x, y } = this.ingredient
      return `translate(${x || 0} ${y || 0})`
    }
  },

  created(){
  }
}
</script>

