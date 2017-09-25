<template>
  <div>
    <div class="surprise">
      <div class="surprise-tit">
        <div class="titimg" v-if="surprise && surprise.surprise_icon">
          <img v-lazy="surprise.surprise_icon.image">
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
          <router-link to="/goods">
            <img v-lazy="surprise.right_image.image" alt="" />
          </router-link>
        </div>
      </div>
      <surpriseProduct :supgoods="surprise.goods"></surpriseProduct>
    </div>
  </div>

</template>

<script>
  import surpriseProduct from './surpriseProduct.vue'
  const date = new Date
  export default {
    props: {
      showMore: Boolean,
      surprise: Object,
      hour:2,
      mins:60,
      secs:60
    },
    mounted () {

      console.log("surprise",this.surprise.goods)
//      setInterval(() => {
//        this.secs = 60 - date.getSeconds()
//        this.mins = 60 - date.getMinutes()
//        this.hour = 2
//      },1000)
    },
    computed: {

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
