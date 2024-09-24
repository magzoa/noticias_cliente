
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    drawer:false,
    items:[ 
	 {text:'Usuarios',to:'/usuario',icon:'mdi-account-circle'},
	 {text:'Inicios',to:'/inicio',icon:'mdi-account-circle'},
	 {text:'Noticias',to:'/noticia',icon:'mdi-account-circle'},
	 {text:'Eventos',to:'/evento',icon:'mdi-account-circle'},
	 {text:'Informacions',to:'/informacion',icon:'mdi-account-circle'},
      {text:'About',to:'/about',icon:'mdi-account-circle'},
    ] 
  },
  getters:{
    links:(state)=>{
      return state.items
    }
  },
  mutations: {
    setDrawer:(state,payload)=>(state.drawer=payload),
    toggleDrawer:state=>(state.drawer=!state.drawer)
  },
  actions: {
  },
  modules: { 
   
  }
})


