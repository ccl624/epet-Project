<template>
  <div class="home" ref="homeContent">
    <div>
      <homeBanner></homeBanner>
      <div class="oneYuan">
        <a href="https://sale.epet.com/m/1706/newWelfare.html?fw=0" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-07/03/8/747562c921cd37cf0dafbe24ccfe62bd.gif">
        </a>
      </div>
      <div class="petClass">
        <ul class="clearfix">
          <li class="fl" style="width: 25%;" v-for="epetbar in epetbars">
            <a :href="epetbar.link"><img :src="epetbar.epetbarImg" lazy="loaded"></a>
          </li>
        </ul>
      </div>
      <splitLine></splitLine>
      <surprise :showMore="true"></surprise>
      <splitLine></splitLine>
      <listTile :showMore="'no'" :width1="100+'%'"
                :src1="`https://img2.epetbar.com/nowater/2017-03/09/18/ca98c516add7611e3d0d810d58c087bf.jpg`"
                :moreSrc="`https://img2.epetbar.com/nowater/2017-07/06/10/54d9f002646c397b6b19abefbe6c155b.png`"></listTile>
      <hotItem></hotItem>
      <splitLine></splitLine>
      <listTile :showMore="'more'" :width1="50+'%'"
                :src1="`https://img2.epetbar.com/nowater/2017-07/06/8/7b40d88fc2263cf593bf07559e71cec0.png`"
                :moreSrc="`https://img2.epetbar.com/nowater/2017-07/06/10/54d9f002646c397b6b19abefbe6c155b.png`"></listTile>
      <hotVideo></hotVideo>
      <splitLine></splitLine>
      <listTile :showMore="'more'" :width1="50+'%'"
                :src1="`https://img2.epetbar.com/nowater/2017-04/19/18/9cfe1253127a6fa47de6e711e216d1ee.png`"
                :moreSrc="`https://img2.epetbar.com/nowater/2017-07/06/10/54d9f002646c397b6b19abefbe6c155b.png`"></listTile>
      <homeBanner></homeBanner>
      <splitLine></splitLine>
      <div style="border-bottom: 1px solid rgb(231, 231, 231)">
        <listTile :showMore="'no'" :width1="50+'%'"
                  :src1="`https://img2.epetbar.com/nowater/2017-04/19/20/7f62736d64ad9222875ff3f36d094997.png`"
                  :moreSrc="`https://img2.epetbar.com/nowater/2017-07/06/10/54d9f002646c397b6b19abefbe6c155b.png`"></listTile>
      </div>
      <brandSpePrice></brandSpePrice>
      <listTile :showMore="'TA'" :width1="'auto'" :height="45"
                :src1="`https://img2.epetbar.com/nowater/2016-12/02/12/617e8ae8c72da60d562a30170c26c118.jpg`"
                :moreSrc="`https://img2.epetbar.com/nowater/2016-12/02/16/0d2acd3b4d742a510dfa0142d493e145.png`"></listTile>
      <taPublic></taPublic>
      <listTile :showMore="'isLike'" :width1="'auto'" :height="45"
                :src1="`https://img2.epetbar.com/nowater/2017-01/13/20/a1225213b3d2bc9067676102e629bf1e.png`"></listTile>
      <reputation></reputation>
      <splitLine></splitLine>
      <mainFooter></mainFooter>
    </div>
  </div>

</template>

<script>
  import Bscroll from 'better-scroll'
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

  const epetbars = [
    {
      link: "http://wap.epet.com/group/main.html?pet_type=dog&amp;fw=0",
      epetbarImg: "https://img1.epetbar.com/2017-09/20/19/e77641bc5e038c17069fc3b0953ed82a.png@!water"
    },
    {
      link: "http://wap.epet.com/brandsale.html?pet_type=dog&amp;fw=0",
      epetbarImg: "https://img1.epetbar.com/2017-09/20/19/93e48869e3da723f9248c27718f39956.png@!water"
    },
    {
      link: "http://wap.epet.com/trial/?pet_type=dog&amp;fw=0",
        epetbarImg: "https://img1.epetbar.com/2017-09/20/19/c8eb54f31278c068ec5d731ec650a886.png@!water"
    },
    {
      link: "http://wap.epet.com/activity/cleargoods.html?pet_type=dog&amp;fw=0",
      epetbarImg: "https://img1.epetbar.com/2017-09/20/19/0b7132cfff063d7f17f614c25ce9da1c.png@!water"
    },
    {
      link: "https://wap.epet.com/main.html?menu_param=121&amp;is_single=1&amp;pet_type=dog&amp;fw=0",
      epetbarImg: "https://img1.epetbar.com/2017-09/20/19/b3fa851021c844ae8a7493567c26e8ce.png@!water"
    },
    {
      link: "https://wap.epet.com/main.html?menu_param=4&amp;is_single=1&amp;pet_type=dog&amp;fw=0",
        epetbarImg: "https://img1.epetbar.com/2017-09/20/19/4335b268a53422a205c1f322370d31c1.png@!water"
    },
    {
      link: "https://sale.epet.com/m/mould/activity/ztMjQ5Mw%3D%3D.html?tid=2493&amp;version=356&amp;fw=2&amp;pet_type=dog",
      epetbarImg: "https://img1.epetbar.com/2017-09/20/19/cca7810f68fe70fa82aff20f53c2eaa0.jpg@!water"
    },
    {
      link: "https://sale.epet.com/m/mould/activity/ztMjQ5Mw%3D%3D.html?tid=2493&amp;version=356&amp;fw=2&amp;pet_type=dog",
      epetbarImg: "https://img1.epetbar.com/2017-09/21/10/34570dec4ee213b0b998563f687c0ebf.jpg@!water"
    }
  ]
  export default {
    data () {
      return {
        epetbars: epetbars,
      }
    },
    mounted () {
      this.$nextTick(() => {
        const homeContent = this.$refs.homeContent
        console.log(homeContent)
        this.homeContent = new Bscroll(homeContent,{
          click: true,
          probeType: 3,
        })
      })
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
    .clearfix
      overflow hidden
      .fl
        float left
        &>a
          display block
          &>img
            width 100%
</style>
