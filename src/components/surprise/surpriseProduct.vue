<template>
  <div class="surpriseProduct" ref="surpriseProduct">
    <ul class="productsList">
      <li class="product">
        <a href="https://wap.epet.com/surprise/Main.html?fw=0">
          <img src="https://img1.epetbar.com/2017-05/15/16/b7c678fac22af05f7c8e02e2c80c3a3c.jpg" alt="">
          <div class="currentPrice">
            <span class="ft12">¥</span>
            <span class="ft14">119.00</span>
          </div>
          <p class="reducePrice">省￥19.00</p>
        </a>
      </li>
      <li class="product">
        <a href="https://wap.epet.com/surprise/Main.html?fw=0">
          <img src="https://img1.epetbar.com/2017-05/15/16/b7c678fac22af05f7c8e02e2c80c3a3c.jpg" alt="">
          <div class="currentPrice">
            <span class="ft12">¥</span>
            <span class="ft14">119.00</span>
          </div>
          <p class="reducePrice">省￥19.00</p>
        </a>
      </li>
      <li class="product">
        <a href="https://wap.epet.com/surprise/Main.html?fw=0">
          <img src="https://img1.epetbar.com/2017-05/15/16/b7c678fac22af05f7c8e02e2c80c3a3c.jpg" alt="">
          <div class="currentPrice">
            <span class="ft12">¥</span>
            <span class="ft14">119.00</span>
          </div>
          <p class="reducePrice">省￥19.00</p>
        </a>
      </li>
      <li class="product">
        <a href="https://wap.epet.com/surprise/Main.html?fw=0">
          <img src="https://img1.epetbar.com/2017-05/15/16/b7c678fac22af05f7c8e02e2c80c3a3c.jpg" alt="">
          <div class="currentPrice">
            <span class="ft12">¥</span>
            <span class="ft14">119.00</span>
          </div>
          <p class="reducePrice">省￥19.00</p>
        </a>
      </li>
      <li class="product">
        <a href="https://wap.epet.com/surprise/Main.html?fw=0">
          <img src="https://img1.epetbar.com/2017-05/15/16/b7c678fac22af05f7c8e02e2c80c3a3c.jpg" alt="">
          <div class="currentPrice">
            <span class="ft12">¥</span>
            <span class="ft14">119.00</span>
          </div>
          <p class="reducePrice">省￥19.00</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
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
