<template>
  <div class="goods" ref="goodsItems">
    <div>
      <header class="headTop">
        <span class="back" @click="backPage"></span>
        <span class="title">商品列表</span>
        <span class="pullRight"></span>
      </header>
      <div class="proList">
        <div class="searchBox">
          <i></i>
          <div class="inputArea">
            <input type="search" placeholder="点击搜索商品">
          </div>
        </div>
        <div class="navArea">
          <ul>
            <li></li>
          </ul>
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="goodsItem">
          <ul class="brandsList">
            <li v-for="good in goods.list">
              <a href="">
                <div class="brandImg">
                  <img :src="good.photo" alt="">
                  <div class="countryImg">
                    <img :src="good.country_photo" alt="">
                  </div>
                  <div :class="{soldOut:good.stock==0}"></div>
                </div>
              </a>
              <div class="goodInfo">
                <a href="https://wap.epet.com/goods/171477.html?fw=0"></a>
                <a href="https://wap.epet.com/goods/171477.html?fw=0">
                  <h1>
                    <img :src="good.gtype_icon.image" alt="">
                    {{good.subject}}
                  </h1>
                </a>
                <div class="price">
                  <span>¥{{good.market_price}}</span>
                  <span class="prePrice">{{good.dprice}}</span>
                </div>
                <div class="rating">
                  <span>{{good.comments}}</span>
                  <span class="sellCount">{{good.sold}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import axios from 'axios'
  export default {
    data () {
      return {
        goods: []
      }
    },
    mounted () {
      axios.get('/api/goods').then((res) => {
        console.log(res.data)
        this.goods = res.data

        this.$nextTick(() => {
          const goodsItems = this.$refs.goodsItems
          console.log(goodsItems)
          this.goodsItems = new Bscroll(goodsItems,{
            click: true
          })
        })
      })
    },
    methods: {
      backPage () {
        history.back()
      }
    }
  }
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
        font-size 18px
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

    .proList
      padding 10px
      .searchBox
        background-color #f6f6f6
        height 40px
        border-radius 5px
        -webkit-flex 1
        position relative
        padding 0 10px
        &>i
          float left
          background: url(./brands-ico.png) no-repeat;
          width: 20px;
          height: 20px;
          background-size: 200px auto;
          background-position: -51px -76px;
          margin: 8px 0 0 4px;
        .inputArea
          margin-left 15px
          font-size 14px
          color #666
          &>input
            height: 40px;
            border-radius: 3px;
            border: none;
            background: #f6f6f6;
            font-family: "Microsoft Yahei",tahoma,arial;
            padding: 0px;
            outline: none;
            width: 90%;
            text-indent: 5px;
      .goodsItem
        background-color #fff
        .brandsList
          &>li
            padding 10px
            position relative
            &:before
              content ''
              position absolute
              top 0
              left 0
              background #d7d7d7
              width 100%
              height 1px
              transform scaleY(0.5)
            &>a
              display block
              .brandImg
                width 100px
                height 100px
                background: url(./default-epet.png) no-repeat center center #f4f4f4;
                background-size: 120px auto;
                position: relative;
                float left
                &>img
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  vertical-align middle
                .countryImg
                  width: 25px;
                  height: 25px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  overflow: hidden;
                  border-radius: 50%;
                  //border: 1px solid #d7d7d7;
                  &>img
                    position: absolute;
                    top: -3px;
                    left: -14px;
                    width: auto;
                    height: auto;
                    vertical-align middle
                .soldOut
                  position: absolute;
                  top: 20px;
                  left: 20px;
                  width: 60px;
                  height: 60px;
                  background: url(./sole-out.png) no-repeat;
                  background-size: contain;
            .goodInfo
              margin-left: 110px
              &>a
                display block
                &>h1
                  color #333
                  height: 32px;
                  overflow: hidden;
                  line-height: 16px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  font-size 12px
                  font-weight 400
                  &>img
                    width: auto;
                    height: 17px;
                    margin-right: 3px;
                    vertical-align: -4px;
                    display: inline-block;
                    font-size 12px
              .price
                padding-top 30px
                &>span
                  font-size 14px
                  color red
                .prePrice
                  margin-left 10px
                  font-size 12px
                  color #999
              .rating
                font-size 12px
                color #999
                .sellCount
                  margin-left 5px
</style>
