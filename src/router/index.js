import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/Home'
//import about from '../components/About'

import tasksNew from '../components/Tasks/new'
import tasksIndex from '../components/Tasks/Index'
import tasksShow from '../components/Tasks/show'
import tasksEdit from '../components/Tasks/edit'

Vue.use(Router)
//
export default new Router({
    /* mode: 'history', */
	routes: [
	{ path: '/', component: home },
//	{ path: '/about', component: about },
	/* tasks */
	{ path: '/tasks/new', component: tasksNew },
	{ path: '/tasks', component: tasksIndex },
	{ path: '/tasks/show/:id', component: tasksShow },
	{ path: '/tasks/edit/:id', component: tasksEdit },
	]
})
