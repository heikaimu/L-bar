<template>
  <div class="reply">
    <Warn></Warn>
    <VHeader :title="details.theme"></VHeader>
    <BScroll class="reply-container" :data="replyList">
      <div>
        <PostBarDetails :details="details"></PostBarDetails>
        <ReplyList :reply="replyList" :details="details"></ReplyList>
      </div>
    </BScroll>
    <MessageSend @sub-message="submit"></MessageSend>
  </div>
</template>

<script>
  import VHeader from '@/components/Common/Header/Header'
  import BScroll from '@/base/BScroll/BScroll'
  import PostBarDetails from '@/components/Common/PostBarDetails/PostBarDetails'
  import ReplyList from '@/components/Common/ReplyList/ReplyList'
  import MessageSend from '@/base/MessageSend/MessageSend'
  import {getPostBarDetails} from '@/api/postBar'
  import {getReplyList, submitReply} from '@/api/reply'
  import Warn from '@/base/Warn/Warn'
  export default {
    data() {
      return {
        details: {},
        replyList: []
      }
    },
    created() {
      this._getDetails()
      this._getReplyList()
    },
    methods: {
      async submit(data) {
        data.postBarId = this.$route.params.id
        const {code, msg} = await submitReply(data)
        if (code === 1) {
          this._getReplyList()
          this.$store.dispatch('setShowWarn', '回复成功~')
        } else {
          this.$store.dispatch('setShowWarn', msg)
        }
      },
      async _getReplyList() {
        const {data} = await getReplyList(this.$route.params.id)
        for (let i = 0; i < data.list.length; i++) {
          const imgStr = data.list[i].img
          data.list[i].img = JSON.parse(imgStr)
        }
        this.replyList = data.list
      },
      async _getDetails() {
        const {data} = await getPostBarDetails(this.$route.params.id)
        data.details.img = JSON.parse(data.details.img)
        this.details = data.details
      }
    },
    components: {
      VHeader,
      BScroll,
      ReplyList,
      PostBarDetails,
      MessageSend,
      Warn
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl';
  @import '../../common/stylus/mixin.styl';
  .reply
    width: 100%
    position: fixed
    top: 0
    bottom: 0
    background: $color-white
    .reply-container
      width: 100%
      position: absolute
      top: 40px
      bottom: 50px
      background: $color-white
      overflow: hidden
</style>
