<template lang="pug">
  // background
  g
    rect#bg-cost(
      :x="bg.x",
      :y="bg.y",
      :width="bg.width",
      :height="bg.height"
    )
  
    IngredientsListItem(v-for="(ingredient, i) in ingredientsList", 
    :ingredient="ingredient", 
    :key="i",
    :num="i")
</template>

<script>
import { CARD_DIMENSIONS, BURGER_INGREDIENTS, CARD_BURGER_INGREDIENTS_DESCRIPTIONS } from '../../assets/data'

import IngredientsListItem from './ingredients-list-item.vue'

export default {
  components: {
    IngredientsListItem
  },

  props: {
    ingredients: {
      type: Object,
      default: null
    }
  },

  data: () => {
    const bg = {
      x: CARD_DIMENSIONS.BORDER_SIZE,
      y: (CARD_DIMENSIONS.HEIGHT - (CARD_DIMENSIONS.BORDER_SIZE / 2)) - CARD_DIMENSIONS.COST_AREA_HEIGHT,
      width: CARD_DIMENSIONS.WIDTH - (CARD_DIMENSIONS.BORDER_SIZE * 2),
      height: CARD_DIMENSIONS.COST_AREA_HEIGHT
    }

    return {
      bg
    }
  },

  computed: {
    ingredientsList(){
      return Object.keys(this.ingredients).map(key => {
        console.log('key', key)
        return {
          type: key,
          quantity: this.ingredients[key],
          icon: CARD_BURGER_INGREDIENTS_DESCRIPTIONS[key].icon
        }
      })
    }
  }

}
</script>
