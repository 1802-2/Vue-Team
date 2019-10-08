import Vue from 'vue'
import Router from 'vue-router'
import fl from '@/tang/classification'
import caipu from '@/tang/caipu'
import main from '@/tang/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
	  redirect:'/fl',
	  children:[
		  {
		    path: 'fl',
		    name: 'fl',
		    component: fl
		  },
		  {
		    path: 'caipu',
		    name: 'caipu',
		    component: caipu
		  }
	  ]
    }
  ]
})
