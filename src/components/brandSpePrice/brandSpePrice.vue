<template>
  <div>
    <div v-for="brand in brandsArr">
      <div class="brandDetail">
        <span class="brandName">{{brand.name}}</span>
        <span class="brandInfo">{{brand.info}}</span>
      </div>
      <div class="soleimg loadimg-nofixed rela overflow">
        <a :href="brand.link">
          <img class="image" :src="brand.brandimg" lazy="loaded">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  const brandsArr = [
    {
      name: "ZIWI",
      info: "参与征集，巅峰带你免费畅游新西兰",
      link: "http://sale.epet.com/m/mould/activity/ztMjQ4OA%3D%3D.html?tid=2488",
      brandimg: "https://img2.epetbar.com/nowater/2017-09/17/22/9e519832fe6f79d3e8b8f4a6ff2b0344.jpg@!water"
    },
    {
      name: "ZIWI",
      info: "参与征集，巅峰带你免费畅游新西兰",
      link: "http://sale.epet.com/m/mould/activity/ztMjQ4OA%3D%3D.html?tid=2488",
      brandimg: "https://img2.epetbar.com/nowater/2017-09/17/22/9e519832fe6f79d3e8b8f4a6ff2b0344.jpg@!water"
    },
    {
      name: "ZIWI",
      info: "参与征集，巅峰带你免费畅游新西兰",
      link: "http://sale.epet.com/m/mould/activity/ztMjQ4OA%3D%3D.html?tid=2488",
      brandimg: "https://img2.epetbar.com/nowater/2017-09/17/22/9e519832fe6f79d3e8b8f4a6ff2b0344.jpg@!water"
    },
    {
      name: "ZIWI",
      info: "参与征集，巅峰带你免费畅游新西兰",
      link: "http://sale.epet.com/m/mould/activity/ztMjQ4OA%3D%3D.html?tid=2488",
      brandimg: "https://img2.epetbar.com/nowater/2017-09/17/22/9e519832fe6f79d3e8b8f4a6ff2b0344.jpg@!water"
    }
  ]

  export default {
    data () {
      return {
        brandsArr: brandsArr
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.brandDetail
  padding 10px
  .brandName
    font-size 15px
  .brandInfo
    font-size 12px
    color #999
    margin-left 5px
.soleimg
  overflow hidden
  padding-top 41%
  background: url(./default-epet.png) no-repeat center center #f4f4f4;
  background-size: 120px auto;
  position: relative;
  &>a
    color #333
    .image
      position absolute
      top 0
      left 0
      display block
      width 100%
      vertical-align middle
</style>
