<template>
  <div style="float: left; width: 100%;height: 100%" >
    <div id="indexbox" class="main">
      <div class="indexHeader">
        <div class="indexNav">
          <div class="searchBar">
            <div class="location">
              <router-link to="/myLocation">
                <!--狗狗站|重庆-->
                <span class="catordog c89">狗狗站</span>
                <span class="c89">|</span>
                <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                <i></i>
              </router-link>
            </div>
            <p class="search-text">
              <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled" />
                <span class="eico serach-ico"></span>
              </a>
            </p>
            <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
              <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
            </a>
          </div>
          <div class="navbar" ref="navbar">
            <ul class="dscroll-ul">
              <li class="dscroll-li" :class="{on:currentli==index}" v-for="(li, index) in liArry" @click="isCurrent(index)">
                <router-link :to="li.link">
                  <span class="rela">{{li.title}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view ref="routerData"></router-view>
    <div class="footernav bottom_menu_bar">
      <ul class="navLists">
        <li :class="isTap==0 ? 'index-A':'index-a'" @click="tap(0)">
          <router-link to="/home">
            <div style="width: 100%;height: 100%"></div>
          </router-link>
        </li>
        <li :class="isTap==1 ? 'type-A':'type-a'" @click="tap(1)">
          <router-link to="/difClass" class="db">
            <div style="width: 100%;height: 100%"></div>
          </router-link>
        </li>
        <li :class="isTap==2 ? 'cart-a':'cart-a'" @click="tap(2)">
          <router-link to="/petFood" class="db">
            <div style="width: 100%;height: 100%"></div>
          </router-link>
        </li>
        <li :class="isTap==3 ? 'myepet-a':'myepet-a'" @click="tap(3)">
          <router-link to="/login" class="db">
            <div style="width: 100%;height: 100%"></div>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  const liArry = [
    {
      title: '首页',
      link: '/home'
    },
    {
      title: '主粮',
      link: '/petFood'
    },
    {
      title: '医疗保健',
      link: '/healthy'
    },
    {
      title: '零食玩具',
      link: '/toy'
    },
    {
      title: '日用外出',
      link: '/dailyUse'
    },
    {
      title: '日用外出',
      link: '/dailyUse'
    }]
  export default {
    data () {
      return {
        liArry: liArry,
        currentli: 0,
        isTap:0
      }
    },
    mounted () {
      this.$nextTick(() => {
        const liWidth = 74.5
        const ul = this.$refs.navbar.children[0]
        const liCount = ul.children.length
        ul.style.width = liCount * liWidth  + 'px'
        const navbar = this.$refs.navbar
        console.log(navbar)
        this.navbar = new Bscroll(navbar,{
          click: true,
          scrollX: true,
        })
      })
    },
    methods: {
      isCurrent (index) {
        this.currentli = index
      },
      tap (index) {
        this.isTap = index
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .main
    background-color #fff
    margin-bottom 3px
    width 100%
    .indexHeader
      width 100%
      height 100%
      .indexNav
        width 100%
        height 86px
        .searchBar
          display -webkit-box
          -webkit-box-align: center;
          text-align center
          width 100%
          padding 13px 10px
          .location
            margin-right 20px
            &>a
              height 100%
              position relative
              display inline-block
              color #333
              font-size 14px
              line-height 27px
              .c89
                color #898989
              .ft13
                font-size 13px
              &>i
                position: absolute;
                top: 10px;
                right: -11px;
                border-width: 4px;
                font-size: 0;
                line-height: 0;
                border-style: solid solid dotted;
                border-color: #898989 transparent transparent;
          .search-text
            -webkit-box-flex: 1
            text-align center
            position relative
            &>a
              margin auto 0px
              box-sizing border-box
              color #333
              &>input
                width: 100%;
                height: 25px;
                background: #e9e9e9;
                border-radius: 4px;
                color: #bcbcbc;
                text-indent: 10px;
                font-size: 13px;
                outline: 0;
              .serach-ico
                width: 11px;
                height: 11px;
                position: absolute;
                right: 5px;
                top: 0;
                bottom: 0;
                margin: auto 0;
                background-position: 0 0;
                background: url(./search.png) no-repeat;
                background-size: 11px auto;
          .epet-category
            display block
            &>img
              width: 25px;
              margin-left: 10px;
              vertical-align middle

        .navbar
          width: 100%;
          margin-bottom 2px
          overflow hidden
          .dscroll-ul
            white-space nowrap
            .on
              .rela
                color #459d36
                border-2px(#459d36)
            .dscroll-li
              display inline-block
              width 74.5px
              height 100%
              line-height 36px
              font-size 14px
              text-align center
              color #666
              .rela
                display inline-block
                vertical-align middle
                height 100%
                position relative
  .footernav
    background-color #fff
    border-top: 1px solid #e7e7e7;
    height: 45px;
    line-height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    .navLists
      overflow hidden
      height 45px
      &>li
        float: left;
        width: 25%;
        height: 46px;
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
