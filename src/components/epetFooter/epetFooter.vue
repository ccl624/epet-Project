<template>
  <div class="footernav bottom_menu_bar">
    <ul class="clearfix">
      <li :class="isTap==0 ? 'index-A':'index-a'" @click="tap(0)">
        <router-link to="/home"></router-link>
      </li>
      <li :class="isTap==1 ? 'type-A':'type-a'" @click="tap(1)">
        <a href="https://wap.epet.com/category.html?pet_type=dog" class="db"></a>
      </li>
      <li :class="isTap==2 ? 'cart-a':'cart-a'" @click="tap(2)">
        <a href="https://wap.epet.com/cart/main.html" class="db"></a>
      </li>
      <li :class="isTap==3 ? 'myepet-a':'myepet-a'" @click="tap(3)">
        <a href="https://wap.epet.com/user/UserCenter.html" class="db"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  //import { Tabbar, TabItem } from 'mint-ui';
  export default {
    data () {
      return {
        isTap:0
      }
    },
    methods: {
      tap (index) {
        this.isTap = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.footernav
  background-color #fff
  border-top: 1px solid #e7e7e7;
  height: 45px;
  line-height: 45px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  .clearfix
    &>li
      float: left;
      width: 25%;
      height: 45px;
      background-size auto 40px
      background-repeat no-repeat
      background-position center 2px
    .index-a
      background-image url("./main_tab_1.png")
    .index-A
      background-image url("./main_tab_1_sel.png")
    .type-a
      background-image url("./main_tab_2.png")
    .type-A
      background-image url("./main_tab_2_sel.png")
    .cart-a
      background-image url("./main_tab_3.png")
    .myepet-a
      background-image url("./main_tab_4.png")
</style>
