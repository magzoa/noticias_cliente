
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [ 
  {
    path: '/',
    name: 'home',
    component: Home
  },
	{
    path: '/usuario',
    name: 'usuario',
    component: () => import(/* webpackChunkName: "usuario" */ '../views/UsuarioV.vue')
  	},
	{
    path: '/inicio',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/InicioV.vue')
  	},
	{
    path: '/noticia',
    name: 'noticia',
    component: () => import(/* webpackChunkName: "noticia" */ '../views/NoticiaV.vue')
  	},
	{
    path: '/evento',
    name: 'evento',
    component: () => import(/* webpackChunkName: "evento" */ '../views/EventoV.vue')
  	},
	{
    path: '/informacion',
    name: 'informacion',
    component: () => import(/* webpackChunkName: "informacion" */ '../views/InformacionV.vue')
  	},

  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

] 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

