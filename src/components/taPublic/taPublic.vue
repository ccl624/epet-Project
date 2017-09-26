<template>
  <div>
    <div class="ta-bg rela loadimg-nofixed">
      <img src="https://img2.epetbar.com/nowater/2016-12/02/12/20c6bcc947e062dae210b391e2fa6a98.jpg" class="image">
      <div class="ft14 bold cfff ftc tafloat">
        <p class="mt5">截止今日，TA公益已联合E宠商城和
          <b class="bgfff cred round5 pl5 pr5 mr5 ml5">15</b>家品牌
        </p>
        <p class="mt5">累积捐赠
          <b class="cred">857,272.44</b>元
        </p>
        <p class="mt5">已合作
          <b class="ml5 mr5">7</b>
          家公益组织，举办参与
          <b class="bgfff cred round5 pl5 pr5 mr5 ml5">2</b>
          场公益活动,助养<b class="bgfff cred round5 pl5 pr5 mr5 ml5">34
          </b>位领养人
        </p>
      </div>
    </div>
    <div class="ta-brands">
      <div class="ta-brandName">
        <img v-lazy="taPublic.tagy_left_image.image">
      </div>
      <div class="ta-scrolldiv">
        <div class="ta-scroll" ref="toScroll">
          <ul>
            <li class="swiper-slide" v-for="helpImg in taPublic.list">
              <a href="">
                <div class="loadimg-fixed">
                  <img v-lazy="helpImg.logo.image" alt="">
                </div>
                <div class="ft12 help-money ell">{{helpImg.donate_money_txt}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  const helpImgs = [
    {
      imgSrc: "https://static.epetbar.com/static_wap/appmall/main/epet_brand_logo.png",
      helpMoney: 86675.85
    },
    {
      imgSrc: "https://static.epetbar.com/static_wap/appmall/main/epet_brand_logo.png",
      helpMoney: 86675.85
    },
    {
      imgSrc: "https://static.epetbar.com/static_wap/appmall/main/epet_brand_logo.png",
      helpMoney: 86675.85
    },
    {
      imgSrc: "https://static.epetbar.com/static_wap/appmall/main/epet_brand_logo.png",
      helpMoney: 86675.85
    },
    {
      imgSrc: "https://static.epetbar.com/static_wap/appmall/main/epet_brand_logo.png",
      helpMoney: 86675.85
    }
  ]
  export default {
    props: {
      taPublic:Object
    },
    data () {
      return {
        helpImgs: helpImgs
      }
    },
    mounted () {
      this.$nextTick(() => {
        const liWidth = 109.6+11
        const ul = this.$refs.toScroll.children[0]
        const liCount = ul.children.length
        ul.style.width = liCount * liWidth - 11  + 'px'
        const toScroll = this.$refs.toScroll
        this.homeContent = new Bscroll(toScroll,{
          click: true,
          scrollX: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.loadimg-nofixed
  padding-top 37%
  background: url(./default-epet.png) no-repeat center center #f4f4f4;
  background-size: 120px auto;
  position: relative;
  .image
    width 100%
    position absolute
    top 0
    left 0
    display block
    vertical-align middle
  .tafloat
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    color #fff
    font-size 14px
    font-weight 700
    text-align center
    .mt5
      font-size 14px
      font-weight 700
      text-align center
      .round5
        border-radius 5px
        background-color #fff
        color red
        padding 0 5px
        margin 0 5px
.ta-brands
  padding-left 10px
  .ta-brandName
    width 60px
    padding-top 10px
    float left
    &>img
      width 90%
      margin-top 10px
      vertical-align middle
      display block
  .ta-scrolldiv
    margin-left: 70px;
    padding: 5px 0 0 5px;
    border-left: 1px solid #e7e7e7;
    .ta-scroll
      white-space nowrap
      width 100%
      height 100%
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      &>ul
        .swiper-slide
          display inline-block
          width: 109.6px;
          margin-right: 10px;
          border-right: 1px solid #e7e7e7;
          text-align: center;
          height 100%
          position relative
          flex-shrink 0
          &>a
            display block
            margin-right 10px
            color #333
            .loadimg-fixed
              background: url(./default-epet2.jpg) no-repeat center center #fff;
              background-size: 120px auto;
              &>img
                max-width: 100%;
                height: 40px;
                margin: 0 auto;
                display block
                vertical-align middle
            .help-money
              border-top: 1px solid #e7e7e7;
              margin-top: 5px;
              padding: 3px 0;
              font-size 12px
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
</style>
