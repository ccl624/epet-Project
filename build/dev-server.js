require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
const router = express.Router()

//图片随机码
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

//动态验证码

var md5 = require('blueimp-md5')
var moment = require('moment')
var Base64 = require('js-base64').Base64;
var request = require('request');

/*
 生成指定长度的随机数
 */
function randomCode(length) {
  var chars = ['0','1','2','3','4','5','6','7','8','9'];
  var result = ""; //统一改名: alt + shift + R
  for(var i = 0; i < length ; i ++) {
    var index = Math.ceil(Math.random()*9);
    result += chars[index];
  }
  console.log('验证码: ', result)
  return result;
}
// console.log(randomCode(6));
exports.randomCode = randomCode;

/*
向指定号码发送指定验证码
 */
function sendCode(phone, code, callback) {
  var ACCOUNT_SID = '8a216da85ea31fdd015ebbff3d560740';
  var AUTH_TOKEN = '7a89c3e5844a402dab88936c5c53e139';
  var Rest_URL = 'https://app.cloopen.com:8883';
  var AppID = '8a216da85ea31fdd015ebbff3da40746';
  //1. 准备请求url
  /*
   1.使用MD5加密（账户Id + 账户授权令牌 + 时间戳）。其中账户Id和账户授权令牌根据url的验证级别对应主账户。
   时间戳是当前系统时间，格式"yyyyMMddHHmmss"。时间戳有效时间为24小时，如：20140416142030
   2.SigParameter参数需要大写，如不能写成sig=abcdefg而应该写成sig=ABCDEFG
   */
  var sigParameter = '';
  var time = moment().format('YYYYMMDDHHmmss');
  sigParameter = md5(ACCOUNT_SID+AUTH_TOKEN+time);
  var url = Rest_URL+'/2013-12-26/Accounts/'+ACCOUNT_SID+'/SMS/TemplateSMS?sig='+sigParameter;

  //2. 准备请求体
  var body = {
    to : phone,
    appId : AppID,
    templateId : '1',
    "datas":[code,"1"]
  }
  //body = JSON.stringify(body);

  //3. 准备请求头
  /*
   1.使用Base64编码（账户Id + 冒号 + 时间戳）其中账户Id根据url的验证级别对应主账户
   2.冒号为英文冒号
   3.时间戳是当前系统时间，格式"yyyyMMddHHmmss"，需与SigParameter中时间戳相同。
   */
  var authorization = ACCOUNT_SID + ':' + time;
  authorization = Base64.encode(authorization);
  var headers = {
    'Accept' :'application/json',
    'Content-Type' :'application/json;charset=utf-8',
    'Content-Length': JSON.stringify(body).length+'',
    'Authorization' : authorization
  }

  //4. 发送请求, 并得到返回的结果, 调用callback

  request({
    method : 'POST',
    url : url,
    headers : headers,
    body : body,
    json : true
  }, function (error, response, body) {
    console.log(error, response, body);
    callback(body.statusCode==='000000');
    //callback(true);
  });
}
exports.sendCode = sendCode;

const code = randomCode(6)
// console.log(code)
// console.log('md5', 'zxfjd3g', md5('zxfjd3g'))

var activecode = ''
router.get('/activeCode',function (req,res) {
  sendCode('18510811379', code, function (success) {
    console.log(success);
    activecode = code
    res.send(activecode)
  })
})
//动态码结束
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:false}));
//mock加载数据
//城市列表


//console.log(content);
const sheng = require('../src/mock/cities.json')
const difClass = require('../src/mock/difClass.json')
const goods = require('../src/mock/goods.json')
const homeData = require('../src/mock/homeData.json')



router.get('/sheng',function (req,res) {
  res.send({
    data:sheng
  })
})

//狗分类
router.get('/difClass',function (req, res) {
  res.send(difClass)
})

router.get('/goods',function (req, res) {
  res.send(goods)
})

router.get('/homeData',function (req, res) {
  res.send(homeData)
})


//用户数据
var fs = require('fs')

var jsonfile = require('jsonfile')
//定义要扫描的目标文件夹
//手机验证码登录
router.get('/login/phoneCode',function (req,res) {
  var imgNumber = req.query.imgNumber.trim()
  var myCode = req.query.myCode
  var phonenumber = req.query.phonenumber
  var imgActiveCode = req.query.imgActiveCode.trim()
  imgActiveCode = imgActiveCode.substring(imgActiveCode.length-4)
  console.log(imgNumber,imgActiveCode);

  var obj = {
    imgNumber:imgNumber,
    myCode:myCode,
    phonenumber:phonenumber
  }

  jsonfile.readFile('./src/mock/userData.json',function (err,data) {
    if(!err){
      const userData = data
      const userIndex = userData.find((item) => {
        return item.phonenumber === phonenumber
      })
      /*

      activecode === myCode ?
        res.send({success: true, msg: "登录成功",username:userIndex.username}):
        res.send({success: false, msg:"验证码不匹配"}):
      * */
      userIndex ? imgActiveCode === imgNumber ?
        (activecode === myCode ? res.send({success: true, msg: "登录成功",username:userIndex.username}):
          res.send({success: false, msg:"验证码不匹配"}))
          : res.send({success: false, msg:"图片验证码不匹配"}): res.send({success:false, msg:"手机号码还未注册"})
    }
  });
})
//普通登录
router.get('/login/default',function (req, res) {
  var username = req.query.username.trim()
  var password = req.query.password.trim()
  var userid = req.query.userid


  var obj = {
    userID:userid,
    username:username,
    password:password
  }

  jsonfile.readFile('./src/mock/userData.json',function (err,data) {
    if(!err){
      const userData = data
      const userIndex = userData.find((item) => {
        return (item.username === username || item.phonenumber === username)
      })
        userIndex?
        password?
        userIndex.password.trim() === password ?
        res.send({success: true, msg: "登录成功",username:userIndex.username}):
        res.send({msg:'密码错误,请重新登录', success: false}):
        res.send({msg:'请输入密码', success: false}):
        res.send({success:false, msg:'用户名不存在，请重新登录'})
      // if(!userIndex){
      //   res.send({success:false, msg:'登录失败，请重新登录'})
      // }else if(password){
      //   // if(userIndex.password.trim() === password){
      //   //   res.send({
      //   //     success: true,
      //   //     msg: "登录成功"
      //   //   })
      //   // }else{
      //   //   res.send({
      //   //     msg:'密码错误,请重新登录',
      //   //     success: false
      //   //   })
      //   // }
      // }else{
      //   res.send({msg:'其他错误', success: false})
      // }
    }else{
      res.send({
        success: false,
        msg:'读取用户数据失败'
      });
    }
  });


})
//注册用户
router.get('/register',function (req,res) {
  const username = req.query.username
  const password = req.query.password
  const phonenumber = req.query.phonenumber
  const ifyImgCode = req.query.ifyImgCode
  const activeCode = req.query.activeCode
  console.log(req.query);
  const obj = {
    username,
    password,
    phonenumber,
    ifyImgCode,
    activeCode
  }
  jsonfile.readFile('./src/mock/userData.json',function (err,data) {
    console.log(err);
    if(!err){
      const userData = data

      const userIndex = userData.findIndex(function (item) {
        return item.username === username
      })

      // if(activeCode !== activecode){
      //   console.log('activecode',22222);
      //   console.log(activeCode,activecode);
      //   res.send({
      //     success:false,
      //     msg:'验证码不匹配'
      //   })
      // }
      if(userIndex == -1) {
        userData.push(obj)
        jsonfile.writeFile('./src/mock/userData.json',userData,function (err) {
          //console.log(err);
          if(!err){
            res.send({
              success:true,
              msg:'注册成功'
            })
          }
        });
      }else{
        res.send({
          success:false,
          msg:'用户名已存在'
        })
      }

    }else{
      res.send('读取用户数据失败');
    }
  })
})


app.use('/api', router)

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
