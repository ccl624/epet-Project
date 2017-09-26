<template>
  <div class="myLocation" ref="myLocation">
    <div ref="scrollArea">
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
          <div class="defaultLocation" :class="{scrolled:isScrollY}" ref="dflocation">
            <span>当前默认地址：{{locationDetail}}</span>
          </div>
          <ul class="data-reactid">
            <li v-for="mylocation in locations" @click="nextLevel(mylocation)">{{mylocation.name ? mylocation.name:mylocation}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data () {
      return {
        locations: [],
        locationDetail:'重庆',
        isScrollY: false
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
            probeType: 3,
            click: true
          })

          this.myLocation.on('scroll', (pos) => {
            console.log(pos);
            if(pos.y < 0){
              this.isScrollY = true
              this.$refs.dflocation.style.top = -pos.y+'px'
            }else {
              this.isScrollY = false
            }
          })
        })


      })
      this.locationDetail = localStorage.getItem('mylocation')
      //localStorage.clear('mylocation')
    },
    methods: {
      backPage () {
        history.back()
      },
      nextLevel (mylocation) {
        if(mylocation.name){
          if(mylocation.hasOwnProperty('city')){
            this.locationDetail = ''
          }
          this.locationDetail = this.locationDetail+' '+mylocation.name
          PubSub.publish('mylocation',this.locationDetail)
        }else{
          this.locationDetail = this.locationDetail+' '+mylocation
          location.href="#/home"
          localStorage.setItem('mylocation', this.locationDetail)
        }
        if(mylocation.hasOwnProperty('city')){
          this.locations = mylocation.city
        }else if(mylocation.hasOwnProperty('area')){
          this.locations = mylocation.area
        }
        this.$nextTick(()=>{
          this.myLocation.refresh()
          this.isScrollY = false
          this.$refs.scrollArea.style.transform = 'translate(0px, 0px)'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.myLocation
  position absolute
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
  .scrolled
    z-index: 200;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
</style>
