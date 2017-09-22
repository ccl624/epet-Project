<template>
  <div>
    <div class="surprise">
      <div class="surprise-tit clearfix pad10 rela overflow">
        <div class="fl titimg">
          <img src="./suprice.png">
        </div>
        <div class="remindTime">距本场结束</div>
        <div class="surpriseTime">
          <span class="remindHours time" v-text="12"></span>
          <span>:</span>
          <span class="remindMinutes time" v-text="12"></span>
          <span>:</span>
          <span class="remindSeconds time" v-text="12"></span>
        </div>
        <div class="more" v-show="showMore">
          <a href="https://wap.epet.com/main.html?menu_param=121&pet_type=dog&fw=0">
            <img src="https://img2.epetbar.com/nowater/2016-10/24/20/30b2568de06cb7c96a9af9ad4be3cae5.png" alt="" />
          </a>
        </div>
      </div>
      <surpriseProduct></surpriseProduct>
    </div>
  </div>

</template>

<script>
  import surpriseProduct from './surpriseProduct.vue'
  export default {
    props: {
      showMore: Boolean
    },
    components: {
      surpriseProduct
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    overflow hidden
    position relative
    .surprise-tit
      overflow hidden
      position relative
      padding 10px
      .titimg
        float left
        &>img
          height 24px
          display block
          margin-left -20px
      .remindTime
        margin-top 1px
        margin-left 10px
        font-size 13px
        float left
      .surpriseTime
        height 40px
        margin-left 5px
        float left
        text-align center
        font-size 12px
        .time
          border 1px solid #ddd
          padding 1px 2px
      .more
        position absolute
        top 0
        right 0
        &>a
          display block
          &>img
            display block
            margin 0 0 0 auto
            width 50%
            vertical-align middle
</style>
