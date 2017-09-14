<template>
  <div class="left-delete">
    <div class="move"
         @touchstart="_touchStart"
         @touchmove="_touchMove"
         @touchend="_touchEnd"
         :style="txtStyle">
      <slot></slot>
    </div>
    <div class="deleteIcon" @click.prevent="deleteItem(index)"><span class="icon">删除</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      index: {
        type: Number,
        default() {
          return 0
        }
      }
    },
    data() {
      return {
        startX: 0,
        moveX: 0,
        disX: 0,
        txtStyle: '',
        delWidth: 80,
        top: ''
      }
    },
    methods: {
      _touchStart(ev) {
        ev = ev || event
        if (ev.touches.length === 1) {
          // 手指按下的时候记录按下的位置
          this.startX = ev.touches[0].clientX
          // console.log(this.startX)
        }
      },
      _touchMove(ev) {
        ev = ev || event
        if (ev.touches.length === 1) {
          // 滑动过程中的实时位置
          this.moveX = ev.touches[0].clientX
          // 滑动过程中实时计算滑动距离
          this.disX = this.startX - this.moveX
          // console.log('disX==>',this.disX)
          // 如果是向右滑动或者只是点击，不改变滑动位置
          if (this.disX < 0 || this.disX === 0) {
            // console.log('没有移动')
            this.txtStyle = 'transform:translateX(0)'
          } else if (this.disX > 0) {
            this.txtStyle = 'transform:translateX(-' + this.disX + 'px)'
            if (this.disX >= this.delWidth) {
              this.txtStyle = 'transform:translateX(-' + this.delWidth + 'px)'
            }
          }
        }
      },
      _touchEnd(ev) {
        if (event.changedTouches.length === 1) {
          // console.log(event.changedTouches[0].clientX)
          // 手指移动结束后的水平位置
          let endX = event.changedTouches[0].clientX
          // 触摸开始与结束,手指移动的距离
          this.disX = this.startX - endX
          if (this.disX < this.delWidth / 2) {
            this.txtStyle = 'transform:translateX(0)'
          } else {
            this.txtStyle = 'transform:translateX(-' + this.delWidth + 'px)'
          }
        }
      },
      deleteItem(index) {
        this.$emit('deleteItem', index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left-delete
    width: 100%
    height: 100%
    background: #ccc
    position: relative
    z-index: 2
    .move
      position: relative
      width: 100%
      height: 100%
      transition: all .5s ease-in-out
    .deleteIcon
      display: flex
      justify-content: center
      align-items:center
      width: 80px
      height: 100%
      background: #c9302c
      position: absolute
      right:0
      top:0
      z-index: -1
      .icon
        font-size: 14px
        color: #ffffff
</style>
