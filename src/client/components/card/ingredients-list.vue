<template lang="pug">
  // background
  rect#bg-cost(
    :x="bg.x",
    :y="bg.y",
    :width="bg.width",
    :height="bg.height"
  )

</template>

<script>
import { CARD_DIMENSIONS, BURGER_INGREDIENTS, CARD_BURGER_INGREDIENTS_DESCRIPTIONS } from '../../assets/data'

export default {
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
  }
}
</script>
