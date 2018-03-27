<template lang="pug">
  div.layout
    div.top.pa-2
      slot(name="top")

    div.middle
      slot(name="middle")

    div.bottom.pa-2
      slot(name="bottom")

</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
div.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  div.top, div.bottom {
    width: 100%;
    height: 60px;
  }

  div.middle {
    flex: 1;
  }
}
</style>

