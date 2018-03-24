<template lang="pug">
  div
    h1 {{ message }}
</template>

<script>
export default {
  data:()=>({
    message: 'not loaded yet...',
    timer: null
  }),

  methods: {
    loadData(){
      console.log('load data...')
      this.$http.get('/api')
      .then(success=>{
        this.message = success.body
      }, err=>{
        console.log('error: ', err)
      })
    }
  },

  mounted(){
    // this.timer = setInterval(()=>{
    //   this.loadData()
    // }, 1000)
  },

  beforeDestroy(){
    // clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color:green;
}

div {
  margin: 20px;
}
</style>
