<template>
  <div class="loginSuccess">
    <a href="javascript:;" @click="backToHome" class="backToHome">回到首页</a>
    <p class="username">{{username}}</p>
    <a href="javascript:;" @click="logOut" class="logout">退出</a>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        username:'',
        isLogin: true
      }
    },
    mounted () {
      PubSub.subscribe('msg',(msg, data) => {
        this.username = data
      })
      PubSub.publish('isLogin', this.isLogin)
      this.username = localStorage.getItem('username')

      if(!this.username){
        location.href="#/login"
      }
    },
    methods: {
      logOut () {
        localStorage.removeItem('username')
        PubSub.publish('isLogin',false)
        location.href="#/login"
      },
      backToHome () {
        location.href="#/home"
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.loginSuccess
  position fixed
  top 0
  width 100%
  height 100%
  z-index 110
  background-color lightgoldenrodyellow
  color #333
  text-align center
  .username
    margin-top 50%
    font-size 20px
    color orange
    font-weight 700
  .backToHome
    position absolute
    top 0
    left 0
    width 100%
    height 50px
    line-height 50px
    background-color lightblue
    //border-radius 10px
  .logout
    position absolute
    left 0
    bottom 0px
    width 100%
    height 50px
    line-height 50px
    background-color pink
    //border-radius 10px
</style>
