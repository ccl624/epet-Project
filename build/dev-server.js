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
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:false}));
//mock加载数据
//城市列表


//console.log(content);
const sheng = require('../src/mock/cities.json')
const difClass = require('../src/mock/difClass.json')
const goods = require('../src/mock/goods.json')
const homeData = require('../src/mock/homeData.json')

const router = express.Router()

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

router.get('/login',function (req, res) {
  var username = req.query.username.trim()
  var password = req.query.password.trim()
  var userID = req.query.userID

  var obj = {
    userID:userID,
    username:username,
    password:password
  }

  jsonfile.readFile('./src/mock/userData.json',function (err,data) {
    if(!err){
      const userData = data
      //res.send(userData)

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

router.get('/register',function (req,res) {
  const username = req.query.username
  const password = req.query.password
  const phonenumber = req.query.phonenumber
  const ifyImgCode = req.query.ifyImgCode
  const activeCode = req.query.activeCode

  const obj = {
    username,
    password,
    phonenumber,
    ifyImgCode,
    activeCode
  }
  jsonfile.readFile('./src/mock/userData.json',function (err,data) {
    if(!err){
      const userData = data

      const userIndex = userData.findIndex(function (item) {
        return item.username === username
      })

      if(userIndex == -1) {
        userData.push(obj)
        jsonfile.writeFile('./src/mock/userData.json',userData,function (err) {
          //console.log(err);
          if(!err){
            res.send("success")
          }
        });
      }else{
        res.send("failed")
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
