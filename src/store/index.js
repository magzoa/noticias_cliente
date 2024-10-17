
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    drawer:false,
    items:[ 
	// {text:'Usuarios',to:'/usuario',icon:'mdi-account-circle'},
	 {text:'Inicio',to:'/inicio',icon:'mdi-account-circle'},
	 {text:'Misión - Vision',to:'/noticia',icon:'mdi-account-circle'},
	 {text:'Estudiantil',to:'/evento',icon:'mdi-account-circle'},
	 {text:'Cuerpo Docente',to:'/informacion',icon:'mdi-account-circle'},
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


