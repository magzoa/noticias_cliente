
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
      path: '/historia',
      name: 'historia',
      component: () => import(/* webpackChunkName: "inicio" */ '../views/HistoriaV.vue')
      },
	{
    path: '/noticia',
    name: 'noticia',
    component: () => import(/* webpackChunkName: "noticia" */ '../views/NoticiaV.vue')
  	},
    {
      path: '/reglamentacion',
      name: 'reglamentacion',
      component: () => import(/* webpackChunkName: "noticia" */ '../views/ReglamentacionV.vue')
      },
	{
    path: '/estudiante',
    name: 'estudiante',
    component: () => import(/* webpackChunkName: "evento" */ '../views/EstudianteV.vue')
  	},
	{
    path: '/docente',
    name: 'docente',
    component: () => import(/* webpackChunkName: "informacion" */ '../views/DocenteV.vue')
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

