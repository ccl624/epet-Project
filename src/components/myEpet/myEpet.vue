<template>
  <div class="myEpet">
    <header class="myEpetHeader">
      <div class="head_top">
        <span class="return" @click="backPage"></span>
        <span class="register">注册</span>
      </div>
      <div class="myEpetLogo">
        <img src="./logo.png" alt="">
      </div>
      <div class="loginStyle">
        <span @click="showCurrentFrom(0)">普通登录
          <i v-show="showFrom == 0"></i>
        </span>
        <span @click="showCurrentFrom(1)">手机动态密码登录
          <i v-show="showFrom == 1"></i>
        </span>
      </div>
    </header>
    <div class="loginInput">
      <div class="formBox" v-if="showFrom == 0">
        <form action="login" method="post">
          <ul class="mform">
            <li>
              <span class="mNameIco"></span>
              <input type="username" placeholder="手机号/邮箱/用户名" class="text"
                     name="username" id="username" v-model="username"></li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="password" placeholder="输入密码" class="text"
                     name="password" id="password" v-model="password"></li>
          </ul>
        </form>
      </div>
      <div class="formBox" v-if="showFrom == 1">
        <form action="login" method="post">
          <ul class="mform">
            <li>
              <span class="mNameIco"></span>
              <input type="username" placeholder="已注册的手机号" class="text"
                     name="username" id="phoneNumber" v-model="phonenumber">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" placeholder="请输入图片内容" class="text"
                     name="password" id="varifyImg" v-model="imgNumber">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="password" placeholder="动态密码" class="text" name="password" id="code">
            </li>
          </ul>
        </form>
      </div>
      <div class="forgetPsw">
        <a href="#/home">忘记密码 ？</a>
      </div>
      <div class="loginBtn" @click="sendAjax">
        <span>登录</span>
      </div>
      <div class="downloadApp">
        APP专享:E宠团5折包邮,首单满99送99
        <a href="#">去下载</a>
      </div>
    </div>
    <div class="otherLogin">
      <div class="loginTitle">
        <b>合作网站登录</b>
      </div>
      <ul class="loginWays">
        <li>
          <a href="#/home">
            <img src="./login_ico2.png" alt="">
          </a>
        </li>
        <li>
          <a href="#/home">
            <img src="./login_ico4.png" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        showFrom: 0,
        phonenumber:'',
        username: '',
        password: '',
        imgNumber: '1234'
      }
    },
    mounted() {
//      Indicator.close();
    },

    methods: {
      backPage () {
        history.back()
      },
      showCurrentFrom (index) {
        this.showFrom = index
      },
      sendAjax () {
        const username = this.username.trim()
        const password = this.password
        const url = `/api/userdata?username=${username}&password=${password}&userID=${Date.now()}`
        axios.get(url).then( res => {
          console.log("res",res.data);
          const userIndex = res.data.findIndex((item) => {
            return (item.username == this.username && item.password == this.password)
          })
          console.log("userIndex",userIndex);
          if(userIndex == -1){
            alert("用户名不存在")
          }else{
            alert("登录成功")
          }
          this.username = ''
          this.password = ''
        })
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .myEpet
    position fixed
    top 0
    width 100%
    height 100%
    z-index 110
    background-color #fff
    color #333
    text-align center
    .myEpetHeader
      position: relative;
      background-image url("./login_bc_img.png")
      background-size: 100% 100%;
      background-repeat no-repeat
      .head_top
        padding: 0 1em;
        height: 50px;
        line-height: 50px;
        .return
          background: url(./personal-bico3.png) no-repeat;
          background-size: 12px 17px;
          display: block;
          width: 22px;
          height: 20px;
          position: absolute;
          margin-top: 16px;
        .register
          position absolute
          right 10px
          top 0
          display block
          font-size 1em
          color #fff
      .myEpetLogo
        padding: 1em 0 2em 0;
        & > img
          display: block;
          margin: auto;
          width: 20%;
          vertical-align middle
      .loginStyle
        overflow hidden
        background-color: rgba(255, 255, 255, 0.3);
        & > span
          float: left;
          width: 50%;
          text-align: center;
          height: 44px;
          line-height: 44px;
          position: relative;
          font-size: 15px;
          color: #fff;
          display: block;
          & > i
            display: block;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #fff;
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            margin: auto;
    .loginInput
      background-color #fff
      .formBox
        background: #fff;
        border-radius: 0.5em;
        margin: 0em 4% 0.5em 4%;
        padding: 0 1.6%;
        &>form
          .mform
            &>li
              border-bottom: #e2e2e2 solid 1px;
              padding: 12px 0 12px 30px;
              position: relative;
              &>input
                display: block;
                height: 21px;
                width: 100%;
                font-size: 15px;
                border: none;
                padding: 0px;
                color: #666;
                font-family: "Microsoft Yahei",tahoma,arial;
                outline: none;
                &::-webkit-input-placeholder
                  color: #d7d7d7
              .mNameIco
                float: left;
                display: inline;
                width: 17px;
                height: 21px;
                background: url(./ico3.png) no-repeat;
                background-size: contain;
                margin: 1px 0 0 -25px;
              .mpasswordIco
                float: left;
                display: inline;
                width: 17px;
                height: 20px;
                margin: 0px 0 0 -25px;
                background: url(./ico4.png) no-repeat;
                background-size: contain;
      .forgetPsw
        padding-left: 2em;
        padding-right: 2em;
        text-align center
        overflow hidden
        &>a
          font-size 0.9em
          float right
      .loginBtn
        padding-top 0.5em
        text-align center
        &>span
          display: block;
          letter-spacing: 5px;
          margin: 0 5%;
          border-radius: 5px;
          background: #2ec975;
          font-size: 15px;
          padding: .4em 0;
          text-align: center;
          color #fff
      .downloadApp
        color #666
        font-size 12px
        margin-top 7px
        text-align center
        &>a
          color #0ca4ed
    .otherLogin
      margin-top 10em
      .loginTitle
        color: #d7d7d7;
        margin-top: 0.4em;
      .loginWays
        padding: 1em 0;
        &>li
          width: 33.3%;
          padding: 0 1.2em;
          float: left;
          display: inline;
          &>a
            display block
            &>img
              width: 60%;
              height: auto;
              display: block;
              margin: auto;
              max-width: 176px;
              vertical-align middle

</style>
