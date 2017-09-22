<template>
  <div class="footernav bottom_menu_bar">
    <ul class="clearfix">
      <li class="indexA">
        <a href="https://wap.epet.com/main.html?pet_type=dog" class="db"></a>
      </li>
      <li class="type-a">
        <a href="https://wap.epet.com/category.html?pet_type=dog" class="db"></a>
      </li>
      <li class="cart-a">
        <a href="https://wap.epet.com/cart/main.html" class="db"></a>
      </li>
      <li class="myepet-a">
        <a href="https://wap.epet.com/user/UserCenter.html" class="db"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  //import { Tabbar, TabItem } from 'mint-ui';
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.footernav
  background-color #fff
  border-top: 1px solid #e7e7e7;
  height: 45px;
  line-height: 45px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 103;
  .clearfix
    &>li
      float: left;
      width: 25%;
      height: 55px;
      background-size auto 40px
      background-repeat no-repeat
      background-position center 2px
    .indexA
      bg-highlight-image("./main_tab_1")
    .index-a
      background-image url("./main_tab_1_sel.png")
    .type-a
      background-image url("./main_tab_2.png")
    .cart-a
      background-image url("./main_tab_3.png")
    .myepet-a
      background-image url("./main_tab_4.png")
</style>
