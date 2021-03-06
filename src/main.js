// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import VueLazyload from 'vue-lazyload'
Vue.use(MintUI)
Vue.use(VueLazyload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
