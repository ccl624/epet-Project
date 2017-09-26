<template>
  <div>
    <header class="clearfix rela top ">
      <div id="1" class="sort nav-sort">
        <a href="#tab1">
          <span :class="{active:true}">分类</span>
        </a>
      </div>
      <div id="2" class="brand nav-sort">
        <a href="#tab2">
          <span :class="{active:false}">品牌</span>
        </a>
      </div>
      <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" class="abs search">
      </a>
    </header>
    <div class="leftbox" ref="leftbox">
      <ul>
        <li :class="{on:isCurrent == index}" v-for="(category, index) in difClass.categorys"
            @click="showCurrent(index)">{{category.name}}</li>
      </ul>
    </div>
    <div class="rightbox" v-if="difClass.categorys">
      <div class="sort-recom">
        <div class="hot-recom">
          <a href="javascript:;" class="title">{{difClass.categorys[isCurrent].cate_list[0].title}}</a>
          <ul class="hotItems">
            <li v-for="list in difClass.categorys[isCurrent].cate_list[0].list">
              <router-link to="/goods">
                <div class="rela loadimg-nofixed">
                  <img class=" image" v-lazy="list.photo" lazy="loaded">
                </div>
                <p class="ft12">{{list.name}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Bscroll from 'better-scroll'
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        difClass: {},
        isCurrent: 0
      }
    },
    mounted () {
      PubSub.publish('isHome',1)
      axios.get('/api/difClass').then((res) => {

        this.difClass = res.data

        this.$nextTick(() => {
          const leftbox = this.$refs.leftbox
          console.log(leftbox)
          this.homeContent = new Bscroll(leftbox,{
            click: true
          })
        })
      })
    },

    methods: {
      showCurrent (index) {
        this.isCurrent = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top
    background-color #fff
    position fixed
    top 0
    padding: 0 15px;
    width 100%
    border-bottom: 1px solid #cbcbcb;
    height: 40px;
    color #fff
    z-index 333
    .nav-sort
      padding-right: 5%;
      width: 50%;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      float left
      font-weight: 700;
      & > a
        & > span
          display: inline-block;
          height: 40px;
          padding: 0 4px;
          cursor: pointer;
        .active
          color: #ed4044;
          border-bottom: 2px solid #ed4044;
    .sort
      text-align: right;
    & > a
      color #333
      .search
        position absolute
        top: 13px;
        right: 15px;
        width: 14px;
        height: 14px;

  .leftbox
    border-right 5px solid #f3f4f5
    position: fixed;
    top: 40px;
    left: 0;
    bottom: 45px;
    padding-bottom: 45px;
    background-color #fff
    &>ul
      .on
        background: #f3f4f5;
        color: #ed4044;
      &>li
        padding: 15px 0;
        border-bottom: 1px solid #f3f4f5;
        width: 70px;
        height: 50px;
        font-size: 13px;
        text-align: center;
  .rightbox
    position: fixed;
    top: 40px;
    left: 75px;
    bottom: 0;
    right 0
    background-color #fff
    height 100%
    .sort-recom
      .hot-recom
        padding: 15px 5px 20px;
        border-top: 1px solid #f3f4f5;
        .title
          display block
          font-size 12px
          color #999
          padding-left: 5px;
          margin-top: 10px;
        .hotItems
          overflow hidden
          &>li
            float left
            width 33.33%
            padding: 0 5px;
            margin-top: 10px;
            &>a
              display block
              .loadimg-nofixed
                background: url(./default-epet.png) no-repeat center center #f4f4f4;
                background-size: 120px auto;
                position: relative;
                padding-top: 100%;
                .image
                  top: 0;
                  left: 0;
                  position: absolute;
                  width 100%
                  vertical-align middle
              &>p
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                height: 20px;
                font-size 12px
                color #333
                margin-top 10px
                text-align center

</style>
