import Vue from 'vue'
import Router from 'vue-router'
import fl from '@/tang/classification'
import caipu from '@/tang/caipu'
import main from '@/tang/main'
import home from '@/gen/page/home'
import cart from '@/qi/cart'
import ino from '@/mao/ino'
import xq from '@/mao/mxq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
	  redirect:'/home',
	  children:[
		  {
			path: 'home',
			name:'home',
			component:home
		  },
		  {
		    path: 'fl',
		    name: 'fl',
		    component: fl
		  },
		  {
		    path: 'caipu',
		    name: 'caipu',
		    component: caipu
		  },
		  {
			  path:'cart',
			  name: 'cart',
			  component: cart
		  },
		  {
		      path:'ino',
		  	  name: 'ino',
		  	  component: ino
		  }
	  ]
    },
	{
	path: '/xq',
	name: 'xq',
	component: xq,  
  }
  ]
})
