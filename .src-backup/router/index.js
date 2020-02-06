import Vue from 'vue'
import VueRouter from 'vue-router'
import { generateUrl } from 'nextcloud-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		// path: 'app/rmcrm/home',
		path: '/',
		name: 'home',
		component: Home,
	},
/*  {
    path: 'app/rmcrm/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue'),
  }, */
]

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	base: generateUrl('/apps/rmcrm', ''),
	linkActiveClass: 'active',
	routes,
})

export default router
