<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item>
      <a href="http://sale.epet.com/m/mould/activity/ztMjMwMg%3D%3D.html?tid=2302&amp;fw=0" class="pointer">
        <img src="https://img2.epetbar.com/nowater/2017-09/18/10/c3d406e9e2219ab08e083548161061d4.jpg@!water">
      </a>
    </mt-swipe-item>
    <mt-swipe-item>
      <a href="http://sale.epet.com/m/mould/activity/ztMjMwMg%3D%3D.html?tid=2302&amp;fw=0" class="pointer">
        <img src="https://img2.epetbar.com/nowater/2017-09/18/15/409553239265ca47621c007fb11c3241.jpg@!water">
      </a>
    </mt-swipe-item>
    <mt-swipe-item>
      <a href="http://sale.epet.com/m/mould/activity/ztMjMwMg%3D%3D.html?tid=2302&amp;fw=0" class="pointer">
        <img src="https://img2.epetbar.com/nowater/2017-09/20/10/4288b3a722d59db33b34181caa7ef1e4.jpg@!water">
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {}
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
