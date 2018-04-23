<template lang="pug">
  g.layer(:transform="translate")
    layer-ingredient(v-for="(ingredient, i) in ingredients",
    :ingredient="ingredient",
    :key="i")

</template>

<script>
import { BURGER_INGREDIENTS, CARD_BURGER_INGREDIENTS_DESCRIPTIONS } from '../../assets/data'
import LayerIngredient from './layer-ingredient.vue'

export default {
  components: {
    LayerIngredient
  },

  props: {
    model: {
      type: Object,
      default: null
    },
    num: {
      type: Number,
      default: null
    },
    y: {
      type: Number,
      default: 0
    }
  },

  computed: {
    ingredients(){
      return !this.model ? [] : 
      [ ...this.model.ingredients || [] ].map(ingredient => CARD_BURGER_INGREDIENTS_DESCRIPTIONS[ingredient])
    },

    translate(){
      return `translate(0 ${this.y})`
    }
  }
}
</script>
