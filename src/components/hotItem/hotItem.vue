<template>
  <div class="divboximg flex">
    <div class="divimg" style="width: 42.53%; height: auto">
      <router-link to="/goods" v-if="hotList.content_images && hotList.content_images[0]">
        <img name="319x379" v-lazy="hotList.content_images[0][0].image">
      </router-link>
    </div>
    <div class="divimg" style="width: 57.33%;">
      <router-link to="/goods">
        <img name="430x189" v-lazy="hotList.content_images[1][0].image">
      </router-link>
      <router-link to="/goods">
        <img name="430x189" v-lazy="hotList.content_images[1][1].image">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      hotList: Object
    },
    mounted() {
      console.log("this.hotList",this.hotList)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.divboximg
  border-top 1px solid #e7e7e7
  display flex
  .divimg
    &>a
      display block
      color #333
      &>img
        vertical-align middle
        border-bottom: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        width 100%
</style>
