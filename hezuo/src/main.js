// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueaxios from 'vue-axios'
import axios from 'axios'
import Router from 'vue-router'
import zlchild from '@/tang/zlchild'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueLazyload,{
  preLoad:1.3,
  error: '/static/img/ban.png',
  loading: '/static/img/ban.png',
  attempt: 1
})

import { Swipe, SwipeItem } from 'mint-ui';
import "mint-ui/lib/style.css"
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



Vue.use(vueaxios,axios)
Vue.component('zlchild',zlchild)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
