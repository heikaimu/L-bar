<template>
    <ul class="collect-theme-container">
      <li class="theme-item" v-for = "item in theme" @click="$router.push({path:`/post_bar/${item.theme_id}`})">
        <p @click = "select(item)">{{item.theme}}</p>
      </li>
    </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      theme: {
        type: Array,
        default: []
      }
    },
    methods: {
      select(item) {
        this.$emit('select', item)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/variable.styl'
  @import '../../../common/stylus/mixin.styl'
  .collect-theme-container
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    padding: 10px
    .theme-item
      width: 48%
      border-1px(#e7e7e7)
      &>p
        display: block
        padding: 15px 0
        font-size: 14px
        color: #333
</style>
