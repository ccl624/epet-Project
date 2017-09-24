<template>
  <div>
    <epetHeader :isShow="isShow"></epetHeader>
    <div class="dog"></div>
    <!--<epetFooter :isShow="isShow"></epetFooter>-->
  </div>
</template>

<script>
  import epetHeader from './components/epetHeader/epetHeader.vue'
  import epetFooter from './components/epetFooter/epetFooter.vue'

  export default {
    data () {
      return {
        isShow:true
      }
    },
    components: {
      epetHeader,
      epetFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.dog
  background: url(./components/epetHeader/godog.png) no-repeat;
  width: 41px;
  height: 46px;
  background-size: 80px auto;
  position: fixed;
  bottom: 15%;
  right: -1px;
  z-index: 2;
  -webkit-animation: nnh 2.5s steps(2) infinite;
  animation: nnh 2.5s steps(2) infinite;
  cursor: pointer;
@keyframes nnh {
  from {
    background-position 0
  }
  to{
    background-position -80px
  }
}
</style>
