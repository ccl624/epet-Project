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

var userData = []

var content = jsonfile.readFile('./src/mock/userData.json',function (err,data) {
  userData = data
  if(!err){
    console.log("111",data);
  }
});

router.get('/login',function (req, res) {
  var username = req.query.username
  var password = req.query.password
  var userID = req.query.userID
  console.log(req.body);
  console.log(req);
  var obj = {
    userID:userID,
    username:username,
    password:password
  }
  console.log(obj);
  res.send(userData)
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
  const userIndex = userData.findIndex(function (item) {
    return item.username === username
  })

  if(userIndex == -1) {
    userData.push(obj)
    jsonfile.writeFile('./src/mock/userData.json',userData,function (err) {
      console.log(err);
      if(!err){
        res.send("success")
      }
    });
  }else{
    res.send("failed")
  }

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
