<template>
  <div class="goods" ref="goods">
    <div>
      <header class="headTop">
        <span class="back"></span>
        <span class="title">商品列表</span>
        <span class="pullRight"></span>
      </header>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods
    position fixed
    top 0
    width 100%
    height 100%
    z-index 104
    background-color #fff
    color #333
    text-align center
    .headTop
      height: 50px;
      line-height: 50px;
      position: relative;
      padding: 0 1em;
      border-bottom: 1px solid #f3f3f3;
      .back
        background: url(./personal-bico1.png) no-repeat;
        background-size: 9px 17px;
        display: block;
        width: 22px;
        height: 20px;
        position: absolute;
        margin-top: 17px;
      .title
        width: 90%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        margin: 0 auto;
      .pullRight
        background: url(./imgtk-new.png) no-repeat;
        background-size: 20px 20px;
        position: absolute;
        top: 0;
        right: 1em;
        width: 20px;
        height: 20px;
        margin-top: 14px;
        z-index: 100;
        cursor: pointer;

</style>
