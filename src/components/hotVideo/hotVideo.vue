<template>
  <div>
    <ul class="cmVideoList cmVideoListIndex">
      <li>
        <a href="https://wap.epet.com/article/video/View.html?vid=50&amp;fw=0">
        <div class="imgBox">
          <img src="https://img1.epetbar.com/2017-07/28/13/2506a15cf4e969125891d29f869b8572.jpg@!500w0h" lazy="loaded">
          <span class="cmallPlayIco"></span>
        </div>
        <div class="productDetail">
          <div class="textover">神奇饮水除口臭</div>
          <div class="watchedCount">
            <span class="cmallViewIco mr3"></span>
            <i>23671</i>
            <span class="spaceline">|</span>01:13
          </div>
        </div>
      </a>
      </li>
      <li>
        <a href="https://wap.epet.com/article/video/View.html?vid=50&amp;fw=0">
          <div class="imgBox">
            <img src="https://img1.epetbar.com/2017-07/28/13/2506a15cf4e969125891d29f869b8572.jpg@!500w0h" lazy="loaded">
            <span class="cmallPlayIco"></span>
          </div>
          <div class="productDetail">
            <div class="textover">神奇饮水除口臭</div>
            <div class="watchedCount">
              <span class="cmallViewIco mr3"></span>
              <i>23671</i>
              <span class="spaceline">|</span>01:13
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
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
