## epet项目总结
### 1. 准备
项目描述
-   卖狗粮的网站（人不如狗系列）
-   包括项目首页，登录注册，分类，地址页面模块
-   使用Vuejs+ES6+Webpack等前端最新最热技术
-   采用模块化，组件化，工程化开发
#### 项目界面
暂时先不添加图片
#### 技术选型
-   前台数据处理，交互，组件化
    -   vue
    -   vue-cli
    -   vue-router
    -   axios
-   后台处理
    -   express
    -   mockjs
    -   jsonfile
-   模块化
    -   ES6
    -   babel
-   项目构建
    -   webpack
    -   vue-cli
    -   eslint
-   CSS预编译与UI组件
    -  mint-ui
        -  轮播-Swipe
        -  提示框-MessageBox
    -  stylus
-  滑动库，懒加载
    -  better-scroll
    -  vue-lazyload
-  编码规范
    -  eslint
#### 前端路由（主要部分）
-   首页---/home
-   分类---/disClass
-   登录---/login
-   注册---/register
-   商品页---/goods
-   地址页---/myLocation
#### API接口
-   首页数据接口---/api/homeData
-   分类页数据接口---/api/difClass
-   商品页数据接口---/api/goods
####  技术选型（详细）
##### 1. 搭建脚手架
使用基于webpack的完整模板创建项目: epet

```
vue init webpack epet
cd epet
npm install
npm run dev
访问: http://localhost:8080/
```

##### 2. 编码测试
```
npm run dev
访问: http://localhost:8080
```
##### 3. axios

```
$ npm install axios --save

get请求：
//发送给后台的数据写在地址中的方式
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
//发送给后台的数据对象作为第二个参数
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
post请求：由于和服务器响应时出问题，暂时还没整明白
```
##### 4. mint-ui组件（Vue2.0版）

```
//安装Vue 2.0版本
npm install mint-ui -save
//在 main.js 中写入以下内容
import Vue from 'vue'
import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MintUI)

new Vue({
  el: '#app',
  components: { App }
})

//按需引入，.babelrc 中的plugins添加以下对应内容
"plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
//用到的mint-ui组件

//引入轮播图
import { Swipe, SwipeItem } from 'mint-ui';
//示例
<mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>

//消息提示框
import { MessageBox } from 'mint-ui';
MessageBox('提示', '操作成功');
```
##### 5. 滑动组件

```
//better-scroll
//npm安装
npm install better-scroll --save

//引用
import Bscroll from 'better-scroll'

//HTML结构
<div class="scrollArea" ref="scrollArea">//高度或宽度是个定值远小于滑动区域高度
    <div class="scroll">//滑动区域，高度或宽度有内容撑开
        ...
    </div>
</div>

//垂直滑动
//CSS结构--stylus结构
.scrollArea
    width 100%
    height 100% //一般为屏幕高度，可自己设定
    .scroll
        overflow hidden
//js设置（Vue中一般设置在mounted中，或获取数据完成以后）
this.$next(() => {
    const scrollArea = this.$refs.scrollArea
    this.scrollArea = new Bscroll(scrollArea, {
        click:true， //滑动区域开启点击事件
        probeType: 3 //开启scroll事件，纯粹滑动用不到
    })
})

//水平滑动
//方法 1--给滑动区域设置float left内容直接撑开滑动区域
//CSS样式--stylus结构
.scrollArea
    height //有内容撑开,或一个定值
    width 100% //屏幕宽度开或者定值
    .scroll
        float left
        overflow hidden
        white-space nowrap
        &>children //children是代指滑动区域的元素，不能直接用
            display inline-block
            width 74.5px //为一个定值
//js设置（Vue中一般设置在mounted中，或获取数据完成以后）
this.$next(() => {
    const scrollArea = this.$refs.scrollArea
    this.scrollArea = new Bscroll(scrollArea, {
        click:true， //滑动区域开启点击事件
        probeType: 3, //开启scroll事件，纯粹滑动用不到
        scrollX: true
    })
})
//方法2--js动态计算滑动区域宽度
//HTML结构
<div class="scrollArea" ref="navbar">
    <ul class="scroll">
        <li>...</li>
        .
        .
        .
    </ul>
</div>
//CSS样式--stylus结构
.scrollArea
    height 55px //有内容撑开,或一个定值
    width 100% //屏幕宽度开或者定值
    .scroll
        float left
        overflow hidden
        white-space nowrap
        &>children //children是代指滑动区域的元素，不能直接用
            display inline-block
            width 74.5px //为一个定值
//js设置（Vue中一般设置在mounted中，或获取数据完成以后）
this.$nextTick(() => {
    const liWidth = 74.5 //内容区每个元素的宽度
    const ul = this.$refs.navbar.children[0]
    const liCount = ul.children.length
    ul.style.width = liCount * liWidth  + 'px'
    const navbar = this.$refs.navbar
    this.navbar = new Bscroll(navbar,{
      click: true,
      scrollX: true,
    })
})
//相比较而言方法1较好
//在页面结构发生改变的情况下要在结束调用以下this.navbar.refresh()
```
##### 6. 图片懒加载

```
//vue-lazyload
//npm安装
npm install vue-lazyload
//main.js文件里引入
import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
//也可以设置参数
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

//使用
直接将需要懒加载的img图片的src换成v-lazy（注意地址的变化）
```
##### 7. 数据发布订阅

```
//PubSubJS -- 多个模块的直接通信
//安装
npm install pubsub-js
//引入
import PubSub from 'pubsub-js'
//发布
PubSub.publish('myTopic', data)
//订阅
PubSub.subscribe('myTopic',(msg, data)=>{
    console.log(data)
})
```
##### 8. JSON文件的读和写

```
//jsonfile -- 实现JSON文件的读和写
详细内容请参考：https://github.com/jprichardson/node-jsonfile
//npm安装
npm install --save jsonfile
//异步读取
readFile(filename, [options], callback)
//示例
var jsonfile = require('jsonfile')
var filePath = '/tmp/data.json'//服务器中使用时注意地址位置，区别于require引入外部插件的地址
jsonfile.readFile(filePath, function(err, obj) {
  console.dir(obj)
})
//异步写
writeFile(filename, obj, [options], callback)
//示例
var jsonfile = require('jsonfile')
var filePath = '/tmp/data.json'
var obj = {name: 'JP'}
jsonfile.writeFile(filePath, obj, function (err) {
  console.error(err)
})
```
##### 9. 图片验证码

```
//captchapng -- 图片验证码
//安装
npm install captchapng
//在服务器中引用
var captchapng = require('captchapng');
router.get('/imgCode.png',function (req,res) {
  const imgcode = req.query.imgcode;
  var p = new captchapng(80,30,imgcode); // width,height,numeric captcha
  p.color(130, 213, 74, 0.5);  // First color: background (red, green, blue, alpha)
  p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
  var img = p.getBase64();
  var imgbase64 = new Buffer(img,'base64');
  res.writeHead(200, {
    'Content-Type': 'image/png'
  });
  res.end(imgbase64);
})

//访问 http://localhost:8080/api/imgCode.png?imgcode=2345 会得到一个验证码图片
```
#### 组员项目地址
-   曹春磊 http://192.168.11.74:8080
-   高嵩 http://192.168.11.21:8080
-   范世龙  http://192.168.11.65:8080
-   王燕南  http://192.168.11.23:8080
-   刘洋  http://192.168.11.34:8080
-   潘杰 http://192.168.11.41:8080
-   王永腾  http://192.168.11.54:8083



