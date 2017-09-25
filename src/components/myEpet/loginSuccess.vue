<template>
  <div class="loginSuccess">
    <button @click="backToHome" class="backToHome">回到首页</button>
    <p class="username">{{username}}</p>
    <button @click="logOut" class="logout">退出</button>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        username:''
      }
    },
    mounted () {
      PubSub.subscribe('msg',(msg, data) => {
        this.username = data
        localStorage.setItem('username',this.username)
      })

      this.username = localStorage.getItem('username')

      if(!this.username){
        location.href="#/login"
      }
    },
    methods: {
      logOut () {
        localStorage.removeItem('username')
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
  background-color #fff
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
    background-color orange
    border-radius 10px
  .logout
    position absolute
    left 0
    bottom 0px
    width 100%
    height 50px
    background-color red
    border-radius 10px
</style>
