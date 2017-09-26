<template>
  <div class="myEpet">
    <header class="myEpetHeader">
      <div class="head_top">
      <span class="return" @click="backPage"></span>
      <router-link to="/register">
        <span class="register">注册</span>
      </router-link>
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
              <input type="username" placeholder="手机号/用户名" class="text"
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
              <img class="ifyImgCode" :src="imgActiveCode" @click="changeImgCode">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="password" placeholder="动态密码" class="text" name="password" id="code" v-model="myCode">
              <a class="getCode" href="javascript:;" @change="" @click="getActiveCode">获取动态密码</a>
            </li>
          </ul>
        </form>
      </div>
      <div class="forgetPsw">
        <a href="#/home">忘记密码 ？</a>
      </div>
      <div class="loginBtn" v-if="showFrom === 0" @click="sendAjax0">
        <span>登录</span>
      </div>
      <div class="loginBtn" v-if="showFrom === 1" @click="sendAjax1">
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
  import { MessageBox } from 'mint-ui'
  import PubSub from 'pubsub-js'
  import Base64 from 'js-base64'
  //import '../../util/sms_util'
  export default {
    data(){
      return {
        showFrom: 0,
        phonenumber:'',
        username: '',
        password: '',
        imgNumber: '',
        myCode:'',
        imgActiveCode:`/api/imgCode.png?imgcode=${parseInt(Math.random()*9000+1000)}`
      }
    },
    methods: {
      backPage () {
        location.href="#/home";
      },
      showCurrentFrom (index) {
        this.showFrom = index
      },
      sendAjax0 () {
        const username = this.username.trim()
        const password = this.password.trim()
        const userid = Date.now()

        const usernameRex = /^[a-zA-Z0-9_-]{4,16}$/
        if(!usernameRex.test(username)){
          MessageBox('提示','请输入4-16位的用户名')
          this.username = ''
          this.password = ''
          return
        }
        //const url = `/api/login?username=${username}&password=${password}&userID=${Date.now()}`
        axios.get('/api/login/default',{
          params: {
            username,
            password,
            userid
          }
        }).then( res => {
          if(res.data.success){
            try{
              localStorage.setItem('username',res.data.username)
            }catch(oException){
              if(oException.name === 'QuotaExceededError'){
                console.log('已经超出本地存储限定大小！');
                // 可进行超出限定大小之后的操作，如下面可以先清除记录，再次保存
                localStorage.clear();
                localStorage.setItem('username',res.data.username)
              }
            }
            MessageBox("提示",res.data.msg)
            PubSub.publish('msg',res.data.username)
            location.href="#/loginSuccess";
          }else{
            MessageBox("提示",res.data.msg)
            this.username = ''
            this.password = ''
          }
        })
      },
      sendAjax1 () {
        console.log(11111);
        const imgNumber = this.imgNumber.trim()
        const myCode  = this.myCode.trim()
        const phonenumber = this.phonenumber.trim()
        const imgActiveCode = this.imgActiveCode

        const phoneNumRex = /1[3|5|7|8|]\d{9}/

        if(!phoneNumRex.test(phonenumber)){
          MessageBox('提示','电话号码格式不正确')
          this.phonenumber = ''
          return
        }



        axios.get('/api/login/phoneCode',{
          params: {
            imgNumber,
            myCode,
            phonenumber,
            imgActiveCode
          }
        }).then( res => {
          if(res.data.success){
            try{
              localStorage.setItem('username',res.data.username)
            }catch(oException){
              if(oException.name === 'QuotaExceededError'){
                console.log('已经超出本地存储限定大小！');
                // 可进行超出限定大小之后的操作，如下面可以先清除记录，再次保存
                localStorage.clear();
                localStorage.setItem('username',res.data.username)
              }
            }
            MessageBox("提示",res.data.msg)
            PubSub.publish('msg',res.data.username)
            location.href="#/loginSuccess";
          }else{
            MessageBox("提示",res.data.msg)
            this.phonenumber = ''
            this.myCode = ''
            this.myCode =''
            this.imgNumber= ''
          }
        })
      },
      sendAjax (showFrom) {
        if(showFrom === 0){
          this.sendAjax0 ()
        }else{
          this.sendAjax1 ()
        }
      },
      ifyPhoneNumber () {
        const phoneNumRex = /1[3|5|7|8|]\d{9}/
        const usernameRex = /^[a-zA-Z0-9_-]{4,16}$/
      },
      getActiveCode () {
        axios.get('/api/activeCode').then(res => {
          this.activeCode = res.data
        })
      },
//      checkCode () {
//        this.myCode = this.activeCode
//      },
      changeImgCode () {
        this.codeImg = parseInt(Math.random()*9000+1000)
        this.imgActiveCode = `/api/imgCode.png?imgcode=${this.codeImg}`
        this.imgNumber= ''
      }
    },
    computed : {

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
        &>a
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
              .getCode
                background: #fff;
                color: #ff4259;
                border: 1px solid #eb4c33;
                position: absolute;
                right: 0;
                top: 0.5em;
                border-radius: 3px;
                width: 100px;
                text-align: center;
                padding: 0.3em 0;
                font-size 12px
              .ifyImgCode
                top 8px
                right: 0px;
                position: absolute;
                vertical-align: middle;
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
