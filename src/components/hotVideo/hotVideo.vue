<template>
  <div>
    <ul class="cmVideoList cmVideoListIndex">
      <li v-for="(hotVideo, index) in hotVideos" :key="index">
        <a :href="hotVideo.link">
        <div class="imgBox">
          <img v-lazy="hotVideo.cover.image">
          <span class="cmallPlayIco"></span>
        </div>
        <div class="productDetail">
          <div class="textover">{{hotVideo.title}}</div>
          <div class="watchedCount">
            <span class="cmallViewIco mr3"></span>
            <i>{{hotVideo.visit}}</i>
            <span class="spaceline">|</span>{{hotVideo.time}}
          </div>
        </div>
      </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      hotVideos:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cmVideoListIndex
  width 100%
  overflow hidden
  &>li
    width 100%
    &>a
      display block
      .imgBox
        position relative
        overflow hidden
        &>img
          width 100%
          display block
          vertical-align middle
        .cmallPlayIco
          background: url(./play.png) 0 0 no-repeat;
          background-size: contain;
          width: 20px;
          height: 20px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -10px;
          margin-top: -10px;
      .productDetail
        font-size 12px
        color #999
        padding 10px
        text-align center
        .textover
          color #333
          overflow: hidden;
          white-space: nowrap;
          word-wrap: normal;
          text-overflow: ellipsis;
        .watchedCount
          .cmallViewIco
            display: inline-block;
            width: 10px;
            height: 9px;
            background: url(./view-black.png) 0 0 no-repeat;
            background-size: contain;
          .spaceline
            margin 0 10px

</style>
