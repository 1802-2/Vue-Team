import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/tang/classification'
import caipu from '@/tang/caipu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	 {
	  path: '/caipu',
	  name: 'caipu',
	  component: caipu
	}
  ]
})
