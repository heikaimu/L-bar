<template>
  <div class="article-send-container">
    <div class="title">
      <p>标题</p>
      <label for=""><input type="text" v-model="title"></label>
    </div>
    <div class="action-wrapper">
      <div class="left-wrapper">
        <span class="icon icon-smile" @click="faceShow = true"></span>
        <span class="icon icon-picture" @click="imgShow = true; faceShow = false"></span>
      </div>
      <label class="input-wrapper" @click="inputBlur">
        <textarea name="" v-model="message" id="" cols="30" rows="10" ref="inputForm" placeholder="我想说点什么..."></textarea>
      </label>
      <div class="sub-wrapper">
        <button @click="submit()">提交</button>
      </div>
    </div>
    <div class="face" v-show="faceShow">
      <ul class="face-wrapper">
        <li class="face-item" v-for = "(item, index) in faces"><img :src="'../../static/images/face/fFace_'+item.id+'.png'" @click="appendThisFace(item)"></li>
      </ul>
    </div>
    <ImgUpload v-show="imgShow" :imgList="imgList" @imgUpload="imgUpload" @imgRemove="imgRemove"></ImgUpload>
  </div>
</template>

<script type="text/ecmascript-6">
  import ImgUpload from '@/base/ImgUpload/ImgUpload'
  export default {
    props: {
      replyScroll: {
        type: Number
      }
    },
    data() {
      return {
        title: '',
        message: '',
        faces: [{id: '01', name: '#(呵呵)'}, {id: '02', name: '#(哈哈)'}, {id: '03', name: '#(吐舌)'}, {id: '04', name: '#(啊)'}, {id: '05', name: '#(酷)'}, {id: '06', name: '#(怒)'}, {id: '07', name: '#(开心)'}, {id: '08', name: '#(汗)'}, {id: '09', name: '#(泪)'}, {id: '10', name: '#(黑线)'}, {id: '11', name: '#(鄙视)'}, {id: '12', name: '#(不高兴)'}, {id: '13', name: '#(真棒)'}, {id: '14', name: '#(钱)'}, {id: '15', name: '#(疑问)'}, {id: '16', name: '#(阴险)'}, {id: '17', name: '#(吐)'}, {id: '18', name: '#(咦)'}, {id: '19', name: '#(委屈)'}, {id: '20', name: '#(开心)'}, {id: '21', name: '#(呼)'}, {id: '22', name: '#(笑眼)'}, {id: '23', name: '#(冷)'}, {id: '24', name: '#(太开心)'}, {id: '25', name: '#(斜眼)'}, {id: '26', name: '#(勉强)'}, {id: '27', name: '#(狂汗)'}, {id: '28', name: '#(乖)'}, {id: '29', name: '#(睡觉)'}, {id: '30', name: '#(惊吓)'}, {id: '31', name: '#(生气)'}, {id: '32', name: '#(惊讶)'}, {id: '33', name: '#(喷)'}],
        faceShow: false,
        imgList: [],
        imgShow: false
      }
    },
    methods: {
      appendThisFace(item) {
        this.message += item.name
      },
      imgUpload(img) {
        this.imgList.push(img)
      },
      imgRemove(index) {
        this.imgList.splice(index, 1)
      },
      inputBlur() {
        this.faceShow = false
        setTimeout(() => {
          document.body.scrollTop = document.body.scrollHeight
        }, 100)
      },
      submit() {
        this.$emit('sub-article', {
          title: this.title,
          details: this.message,
          img: JSON.stringify(this.imgList)
        })
        this._reset()
      },
      _reset() {
        this.title = ''
        this.msg = ''
        this.message = ''
        this.imgList = []
        this.faceShow = false
        this.imgShow = false
      }
    },
    watch: {
      replyScroll() {
        if (this.active) {
          this._reset()
          setTimeout(() => {
            document.body.scrollTop = document.body.scrollHeight
          }, 100)
        }
      }
    },
    components: {
      ImgUpload
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl';
  @import '../../common/stylus/mixin.styl';
  .article-send-container
    width: 100%
    position: absolute
    bottom: 0px
    border-top: 1px solid #ddd
    box-shadow: 0 -1px 6px #ddd
    z-index: 2333
    background: $color-white
    .title
      width: 100%
      height: 40px
      align-items: center
      display: flex
      border-1px($color-border)
      &>p
        flex: 0 0 60px
        text-align: center
      &>label
        flex: 1
        margin-right: 5px
        &>input
          width: 100%
          height: 30px
          line-height: 30px
          text-indent: 5px
          font-size: $size-middle
          border: 1px solid $color-border
    .action-wrapper
      display: flex
      padding: 10px 0
      justify-content: space-between
      align-items: center
      width: 100%
      background: #fff
      border-1px(#ddd)
      .left-wrapper
        flex: 0 0 60px
        width: 60px
        justify-content: space-around
        align-items: center
        .icon
          display: block
          margin: 0 auto
          width: 30px
          height: 30px
          border-radius: 15px
          background: $color-white
          text-align: center
          line-height: 30px
          font-size: 24px
          color: #ccc
      .input-wrapper
        flex: 1
        height: 70px
        margin: 0 5px 0 0
        &>textarea
          width: 100%
          height: 60px
          overflow: visible
          text-indent: 5px
          padding: 4px 0 0 0
          background: $color-white
          font-size: 14px
          color: #333
          border: 1px solid #dddddd
      .sub-wrapper
        display: flex
        justify-content: space-around
        align-items: center
        flex: 0 0 50px
        width: 50px
        margin-right: 5px
        &>button
          width: 100%
          height: 30px
          padding: 0
          border-radius: 3px
          background: #444
          border: none
          color: #fff
          font-size: 14px
          line-height: 30px
          &:active
            background: #111
    .face
      .face-wrapper
        display: flex
        flex-wrap: wrap
        background: #fff
        .face-item
          display: flex
          width: 40px
          height: 40px
          justify-content: space-around
          align-items: center
          &:active
            background: #e7e7e7
          &>img
            width: 24px
</style>
