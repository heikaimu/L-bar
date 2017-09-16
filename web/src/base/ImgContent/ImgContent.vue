<template>
  <div class="img-box">
    <div class="img-item" v-for="imgSrc in imgList"><img width="100%" :src="imgSrc" alt="" @load="loadImg"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        imgList: {
          type: Array,
          default() {
            return []
          }
        }
      },
      methods: {
        loadImg() {
          const l = this.imgList.length
          console.log(l)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .img-box
    padding: 15px 0px
</style>
