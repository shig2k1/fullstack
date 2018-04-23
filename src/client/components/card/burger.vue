<template lang="pug">
  g#burger(:transform="position")

    BurgerLayer(v-for="(layer, i) in layers",
    :model="layer",
    :y="getYPosition(i)"
    :key="layer.id")

</template>

<script>
import UUID from 'uuid/v4'
import BurgerLayer from './burger-layer.vue'
import { CARD_BURGER_INGREDIENTS_DESCRIPTIONS } from '../../assets/data'

export default {
  components: {
    BurgerLayer
  },

  props: {
    model: {
      type: Object,
      default: null
    }
  },

  data: () => ({
  }),

  computed: {
    layers(){
      return !this.model ? [] :
        [ ...this.model.layers || [] ].map(layer => ({
          ...layer,
          id: UUID()
        }))
    },

    position(){
      const height = this.getYPosition(this.model.layers.length - 1)
      const posY = 155 - height
      return `translate(10,${ posY })`
    }
  },

  methods: {
    getYPosition(num){
      // get combined layer height
      let y = 0
      for(let i=0; i<num; i++){
        let iY = 0
        this.model.layers[i].ingredients.forEach(element => {
          const { height } = CARD_BURGER_INGREDIENTS_DESCRIPTIONS[element]
          if(height > iY) iY = height
        });
        y += iY
      }
      return y
    }
  }
}
</script>
