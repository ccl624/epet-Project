<template>
  <mt-swipe :auto="4000" v-if="bannerInfo">
    <mt-swipe-item v-for="(banner, index) in bannerInfo.value" :key="index">
      <router-link to="/goods" class="pointer">
        <img v-lazy="banner.image">
      </router-link>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    props: {
      bannerInfo: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-swipe
    width 100%
    height 160px
    .mint-swipe-indicators
      .mint-swipe-indicator
        bottom 10px
        background-color #fff
        opacity 1
        width 6px
        height 6px
      .is-active
        width 16px
        border-radius 3px
    .mint-swipe-items-wrap
      .mint-swipe-item
        &>a
          width 100%
          display block
          &>img
            width 100%
</style>
