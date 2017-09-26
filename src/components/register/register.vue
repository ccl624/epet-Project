<template>
  <div class="registerAccount">
    <div class="formBox" v-if="showFrom == 1">
      <form action="login" method="post">
        <ul class="mform">
          <li>
            <span class="phoneIco commonCss"></span>
            <input type="username " placeholder="请输入手机号" class="text"
                   name="username" id="phoneNumber" v-model="phonenumber">
          </li>
          <li>
            <span class="ifyImgIco commonCss"></span>
            <input type="text" placeholder="图片验证码" class="text"
                   name="text" id="varifyImg" v-model="ifyImgCode">
            <img class="ifyImg" :src="imgActiveCode" alt="" @click="changeImgCode">
          </li>
          <li>
            <span class="ifyMsgIcon commonCss"></span>
            <input type="text" placeholder="验证码" class="text" name="text" v-model="activeCode">
            <a href="javascript:;" class="getifyMsg" @click="getCode">获取短信验证码</a>
          </li>
          <li>
            <span class="nicknameIco commonCss"></span>
            <input type="username" placeholder="你的昵称/用户名" class="text" name="username" v-model="username">
          </li>
          <li>
            <span class="setPassword commonCss"></span>
            <input type="password" placeholder="请设置密码" class="text" name="password" v-model="password">
          </li>
          <li>
            <span class="confirmPassword commonCss"></span>
            <input type="password" placeholder="请确认密码" class="text" name="password" v-model="confirmPassword">
          </li>
        </ul>
      </form>
    </div>
    <div class="loginBtn" @click="registerAccount">
      <span>注册</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { MessageBox } from 'mint-ui'
  export default {
    data () {
      return {
        showFrom:1,
        ifyImgCode:'',
        phonenumber:'',
        username:'',
        activeCode:'',
        password:'',
        confirmPassword:'',
        imgActiveCode: `/api/imgCode.png?imgcode=${parseInt(Math.random()*9000+1000)}`
      }
    },
    methods: {
      registerAccount () {
        const username = this.username.trim()
        const ifyImgCode = this.ifyImgCode.trim()
        const phonenumber = this.phonenumber.trim()
        const activeCode = this.activeCode.trim()
        const password = this.password.trim()
        const confirmPassword = this.confirmPassword.trim()
        const imgActiveCode = this.imgActiveCode.trim()
        if(!phonenumber){
          MessageBox('提示', '手机号不能为空')
          return
        }else{
          const phoneNumRex = /1[3|5|7|8|]\d{9}/
          if(!phoneNumRex.test(phonenumber)){
            MessageBox('提示','电话号码格式不正确')
            return
          }
        }

        if(!ifyImgCode){
          MessageBox('提示', '图片验证码不能为空')
          return
        }else{
          if(ifyImgCode !== imgActiveCode.substring(imgActiveCode.length-4) ){
            MessageBox('提示', '图片验证码不匹配')
            return
          }
        }

        if(!activeCode){
          MessageBox('提示', '验证码不能为空')
          return
        }else{
          if(this.activeMsgCode === activeCode ){
            MessageBox('提示', '验证码不匹配')
          }
        }

        if(!username){
          MessageBox('提示', '用户名不能为空')
          return
        }else{
          const usernameRex = /^[a-zA-Z0-9_-]{4,16}$/
          if(!usernameRex.test(username)){
            MessageBox('提示','请输入4-16位的用户名')
            this.username = ''
            this.password = ''
            return
          }
        }

        if(!password){
          MessageBox('提示', '密码不能为空')
          return
        }

        if(confirmPassword !== password ){
          MessageBox('提示', '密码不匹配')
          return
        }

        //const url = `/api/register?username=${username}&password=${password}&phonenumber=${phonenumber}&ifyImgCode=${ifyImgCode}&activeCode=${activeCode}&userID=${Date.now()}`

        axios.get('/api/register',{
          params: {
            username,
            password,
            phonenumber,
            ifyImgCode,
            activeCode,
            userID:Date.now()
          }
        }).then( res => {
          console.log(res.data);
          if(res.data.success){
            MessageBox('提示', res.data.msg)
            location.href="#/login"
          }else{
            MessageBox('提示', res.data.msg)
          }
        })
      },
      changeImgCode () {
        this.codeImg = parseInt(Math.random()*9000+1000)
        this.imgActiveCode = `/api/imgCode.png?imgcode=${this.codeImg}`
        this.ifyImgCode= ''
      },
      getCode () {
        axios.get('/api/activeCode').then(res => {
          this.activeMsgCode = res.data
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.registerAccount
  position fixed
  top 0
  width 100%
  height 100%
  z-index 110
  background-color #fff
  color #333
  text-align center
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
              color: #B8B8B8
              font-size 13px
          .phoneIco
            background: url(./ico1.png) no-repeat;
          .ifyImgIco
            background: url(./ico5.png) no-repeat;
          .ifyImg
            top 8px
            right: 0px;
            position: absolute;
            vertical-align: middle;
          .getifyMsg
            width: 9em;
            background: #fed171;
            position: absolute;
            right: 0;
            top: 0.7em;
            border-radius: 30px;
            text-align: center;
            padding: 0.3em 0;
            color #fff
            font-size 13px
          .ifyMsgIcon
            background: url(./ico2.png) no-repeat;
          .nicknameIco
            background: url(./ico3.png) no-repeat;
          .setPassword
            background: url(./ico4.png) no-repeat;
          .confirmPassword
            background: url(./ico4.png) no-repeat;
          .commonCss
            float: left;
            display: inline;
            width: 17px;
            height: 21px;
            line-height 21px
            background-size: contain;
            margin: 5px 0 0 -25px;
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
</style>
