<template>
  <div v-if="brandsSpePrice.brands">
    <div v-for="brand in brandsSpePrice.brands">
      <div class="brandDetail">
        <span class="brandName">{{brand.title}}</span>
        <span class="brandInfo">{{brand.sub_title}}</span>
      </div>
      <div class="soleimg loadimg-nofixed rela overflow">
        <router-link to="/goods">
          <img class="image" v-lazy="brand.content_images[0].image" lazy="loaded">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      brandsSpePrice:Object
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
