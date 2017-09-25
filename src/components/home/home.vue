<template>
  <div class="home" ref="homeContent">
    <div style="padding-top: 170px;margin-top: -170px" v-if="homeData.hotList" @touchstart="refreshScroll">
      <homeBanner :bannerInfo="homeData.bannerImg"></homeBanner>
      <div class="oneYuan">
        <a href="https://sale.epet.com/m/1706/newWelfare.html?fw=0" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-07/03/8/747562c921cd37cf0dafbe24ccfe62bd.gif">
        </a>
      </div>
      <div class="petClass">
        <ul class="petImgs" v-if="homeData.classMenu">
          <li class="fl" style="width: 25%;" v-for="(menu, index) in homeData.classMenu.menus" :key="index">
            <router-link to="/goods"><img :src="menu.image"></router-link>
          </li>
        </ul>
      </div>
      <splitLine></splitLine>
      <surprise :showMore="true" :surprise="homeData.surprise"></surprise>
      <splitLine></splitLine>
      <listTile :showMore="'no'" :width1="100+'%'"
                :src1="homeData.hotList.center_image.image"
                :moreSrc="homeData.hotList.right_image.image"></listTile>
      <hotItem :hotList="homeData.hotList" v-if="homeData.hotList"></hotItem>
      <splitLine></splitLine>
      <listTile :showMore="'more'" :width1="50+'%'"
                :src1="homeData.hotVideo.center.img.image"
                :moreSrc="homeData.hotVideo.right.img.image"></listTile>
      <hotVideo :hotVideos="homeData.hotVideo.value"></hotVideo>
      <splitLine></splitLine>
      <listTile :showMore="'more'" :width1="50+'%'"
                :src1="homeData.tasteArea.center.img.image"
                :moreSrc="homeData.tasteArea.right.img.image"></listTile>
      <homeBanner :bannerInfo="homeData.bannerImg"></homeBanner>
      <splitLine></splitLine>
      <div style="border-bottom: 1px solid rgb(231, 231, 231)" >
        <listTile :showMore="'no'" :width1="50+'%'"
                  :src1="homeData.brandsSpePrice.center.img.image"></listTile>
      </div>
      <brandSpePrice :brandsSpePrice="homeData.brandsSpePrice"></brandSpePrice>
      <listTile :showMore="'TA'" :width1="'auto'" :height="45"
                :src1="homeData.taPublic.center_image.image"
                :moreSrc="homeData.taPublic.right_image.image"></listTile>
      <taPublic :taPublic="homeData.taPublic"></taPublic>
      <listTile :showMore="'isLike'" :width1="'auto'" :height="45"
                :src1="homeData.ratings.center_image.image"></listTile>
      <reputation :ratings="homeData.ratings"></reputation>
      <splitLine></splitLine>
      <mainFooter></mainFooter>
    </div>
  </div>

</template>

<script>
  import Bscroll from 'better-scroll'
  import axios from 'axios'

  import homeBanner from '../banner/banner.vue'
  import splitLine from '../split/split.vue'
  import listTile from '../listTitle/listTile.vue'
  import surprise from '../surprise/surprise.vue'
  import hotItem from '../hotItem/hotItem.vue'
  import hotVideo from '../hotVideo/hotVideo.vue'
  import brandSpePrice from '../brandSpePrice/brandSpePrice.vue'
  import taPublic from '../taPublic/taPublic.vue'
  import reputation from '../reputation/reputation.vue'
  import mainFooter from '../mainFooter/mainFooter.vue'

  import { Indicator } from 'mint-ui'
  export default {
    data () {
      return {
        homeData:{}
      }
    },
    mounted () {
      axios.get('/api/homeData').then( res => {
        //console.log('home',res.data);
        this.homeData = res.data
        console.log(this.homeData);
        this.$nextTick(() => {
          const homeContent = this.$refs.homeContent
          //console.log(homeContent)
          this.homeContent = new Bscroll(homeContent,{
            click: true
          })
        })
      })
    },
    methods: {
      refreshScroll () {
        if(this.homeContent){
          this.homeContent.refresh()
        }
      }
    },
    computed : {

    },
    components: {
      homeBanner,
      splitLine,
      listTile,
      surprise,
      hotItem,
      hotVideo,
      brandSpePrice,
      taPublic,
      reputation,
      mainFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home
  //margin-top -184px
  //padding-top 144px
  height 100%
  width 100%
  overflow hidden
  .oneYuan
    & > a
      & > img
        width 100%
  .petClass
    padding-bottom 10px
    padding-top 10px
    .petImgs
      overflow hidden
      .fl
        float left
        &>a
          display block
          &>img
            width 100%
</style>
