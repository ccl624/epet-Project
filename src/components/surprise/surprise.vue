<template>
  <div>
    <div class="surprise">
      <div class="surprise-tit">
        <div class="titimg" v-if="surprise && surprise.surprise_icon">
          <img v-lazy="surprise.surprise_icon.image">
        </div>
        <div class="remindTime">距本场结束</div>
        <div class="surpriseTime">
          <span class="remindHours time" v-text="hour"></span>
          <span>:</span>
          <span class="remindMinutes time" v-text="mins"></span>
          <span>:</span>
          <span class="remindSeconds time" v-text="secs"></span>
        </div>
        <div class="more" v-show="showMore">
          <router-link to="/goods">
            <img v-lazy="surprise.right_image.image" alt="" />
          </router-link>
        </div>
      </div>
      <surpriseProduct :supgoods="surprise.goods"></surpriseProduct>
    </div>
  </div>

</template>

<script>
  import surpriseProduct from './surpriseProduct.vue'
  const date = new Date
  export default {
    props: {
      showMore: Boolean,
      surprise: Object,
    },
    data () {
      return {
        hour:'00',
        mins:'00',
        secs:'00',
        t:0
      }
    },
    methods: {
     fix(num, length) {
        return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
      }
    },
    mounted () {
      let t = setInterval(()=>{
        let EndTime= new Date('2017/09/26 08:37:00')
        let NowTime = new Date()
        this.t = EndTime.getTime() - NowTime.getTime()
//      let d=Math.floor(t/1000/60/60/24)
        this.hour = this.fix(Math.floor(this.t /1000/60/60%24), 2)
        this.mins = this.fix(Math.floor(this.t /1000/60%60), 2)
        this.secs = this.fix(Math.floor(this.t /1000%60), 2)

        if( this.t <= 0 ){
          clearInterval(t)
          this.hour = '00'
          this.mins = '00'
          this.secs = '00'
        }
      },1000)
    },
    computed: {

    },
    components: {
      surpriseProduct
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    overflow hidden
    position relative
    .surprise-tit
      overflow hidden
      position relative
      padding 10px
      .titimg
        float left
        &>img
          height 24px
          display block
          margin-left -20px
      .remindTime
        margin-top 1px
        margin-left 10px
        font-size 13px
        float left
      .surpriseTime
        height 40px
        margin-left 5px
        float left
        text-align center
        font-size 12px
        .time
          border 1px solid #ddd
          padding 1px 2px
      .more
        position absolute
        top 0
        right 0
        &>a
          display block
          &>img
            display block
            margin 0 0 0 auto
            width 50%
            vertical-align middle
</style>
