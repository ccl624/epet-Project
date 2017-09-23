<template>
  <div class="mainHeader">
    <div class="downloadApp">
      <span class="closeBtn">
        <img id="close_down_bar" src="./closebtn_03.png">
      </span>
      <div class="downloadImg">
        <a href="http://wap.epet.com/download.html?appname=epetmall" style="display: block;">
          <img src="https://img2.epetbar.com/nowater/2017-07/03/10/211547bb51dd23758f74fb86e9d7aae5.png@!water">
        </a>
      </div>
    </div>
    <indexHeader></indexHeader>
  </div>
</template>

<script>
  //import { Header } from 'mint-ui'
  import indexHeader from '../indexHeader/indexHeader.vue'
  export default {
    components: {
      indexHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.mainHeader
  width 100%
  position fixed
  top 0
  height 100%
  .downloadApp
    float left
    width 100%
    margin 0 auto
    .closeBtn
      display inline-block;
      width 5%
      margin-right 2%
      vertical-align middle
      position absolute
      top: 12px
      left: 2%
      &>img
        height 100%
        width 100%
    .downloadImg
      &>a
        img
          vertical-align middle
          width 100%
</style>
