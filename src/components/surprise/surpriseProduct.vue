<template>
  <div class="surpriseProduct" ref="surpriseProduct">
    <ul class="productsList" v-if="">
      <li class="product" v-for="(supgood, index) in supgoods" :key="index">
        <router-link to="/goods">
          <img v-lazy="supgood.image.image" alt="">
          <div class="currentPrice">
            <span class="ft12">¥</span>
            <span class="ft14">{{supgood.sale_price}}</span>
          </div>
          <p class="reducePrice">{{supgood.little_price}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    props: {
      supgoods: Array
    },
    mounted () {
      this.$nextTick(() => {
        const liWidth = 109
        const ul = this.$refs.surpriseProduct.children[0]
        const liCount = ul.children.length
        ul.style.width = liCount * liWidth + 10 + 'px'
        const surpriseProduct = this.$refs.surpriseProduct
        console.log(surpriseProduct)
        this.surpriseProduct = new Bscroll(surpriseProduct,{
          click: true,
          scrollX: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surpriseProduct
    width 100%
    padding-left 5px
    margin-bottom 10px
    .productsList
      margin 0 .5em
      /*overflow hidden*/
      white-space nowrap
      .product
        /*float left*/
        display inline-block
        width 98.571px
        margin-right 10px
        & > a
          margin 0 .5em
          display block
          & > img
            display block
            width 100%
          .currentPrice
            margin-top 5px
            color red
            text-align center
            .ft12
              font-size 12px
            .ft14
              font-size 14px
          .reducePrice
            display block
            font-size 12px
            color #999
            text-align center

</style>
