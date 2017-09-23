<template>
  <div class="myLocation" ref="myLocation">
    <div>
      <header class="headTop">
        <span class="back" @click="backPage"></span>
        <span class="title">选择收货地区</span>
        <span class="pullRight"></span>
      </header>
      <div class="locationDetail">
        <div class="petStation">
          <span class="petClass">猫猫站</span>
          <span class="currentArea petClass">狗狗站</span>
          <span class="petClass">水族站</span>
        </div>
        <div>
          <div class="defaultLocation">
            <span>当前默认地址：天津 和平区</span>
          </div>
          <ul class="data-reactid">
            <li v-for="location in locations">{{location.name}}</li>
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
        locations: [],
      }
    },
    mounted () {
      axios.get('/api/sheng').then((res) => {
        //console.log(JSON.parse(res.data));
        const cities = res.data
        this.locations = res.data.data

        this.$nextTick(() => {
          const myLocation = this.$refs.myLocation
          console.log(myLocation)
          this.myLocation = new Bscroll(myLocation,{
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
.myLocation
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
  .locationDetail
    .petStation
      padding 10px
      display flex
      .petClass
        display block
        width 33.33%
        float left
        background: #b9b9b9;
        color: #666;
        border-radius: 5px;
        font-size: 15px;
        padding 5px 0
        margin 0 5px
        text-align center
      .currentArea
        background: #ff0000;
        color: #fff;
  .data-reactid
    &>li
      text-align left
      border-bottom: 1px solid #e7e7e7;
      font-size 13px
      padding 10px
  .defaultLocation
    border-bottom: 1px solid #e7e7e7;
    background-color #ffe6d9
    font-size: 14px;
    padding: 10px;
    text-align left
</style>
