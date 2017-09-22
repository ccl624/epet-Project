<template>
  <div class="titleWrap">
    <div class="titleImg">
      <img :src="src1" alt="" :style="`width:${width1};height:${height}px`">
    </div>
    <div :class="{more:showMore == 'more'}" v-show="showMore == 'more'">
      <a href="https://wap.epet.com/main.html?menu_param=121&pet_type=dog&fw=0">
        <img :src="moreSrc" alt="" />
      </a>
    </div>
    <div :class="{taPublic:showMore == 'TA'}" v-show="showMore == 'TA'">
      <a href="https://wap.epet.com/main.html?menu_param=121&pet_type=dog&fw=0">
        <img :src="moreSrc" alt="" />
      </a>
    </div>
    <div :class="{isLike:showMore == 'isLike'}" v-show="showMore == 'isLike'">
      <a href="javascript:;">好评率99.64%</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      showMore: String,
      src1: String,
      width1: String,
      height: Number,
      moreSrc: String
    },
    mounted () {
      console.log(this.src1);
      console.log(this.width1);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.titleWrap
  width 100%
  position relative
  .titleImg
    overflow hidden
    text-align center
    width 100%
    &>img
      vertical-align middle
  .more
    position absolute
    top 0
    right 0
    &>a
      display block
      &>img
        vertical-align middle
        display block
        margin 0 0 0 auto
        width 50%
  .taPublic
    position: absolute;
    top: 7px;
    right: 0;
    z-index: 0;
    &>a
      display block
      &>img
        vertical-align middle
        width: 75px;
        height: auto;
        margin: 10px 5px 0 0;
  .isLike
    position: absolute;
    top: 14px;
    right: -4px;
    background: url(./index_icon_comment_sanjiao.png) no-repeat right;
    background-size: 8px 9px;
    padding-right: 10px;
    transform: scale(0.84);
    font-size 12px
    color #999
    &>a
      font-size 12px
</style>
