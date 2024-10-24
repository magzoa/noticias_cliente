<template>
 <v-row>
  <!-- Columna para la imagen -->
  <v-col cols="12" sm="6" lg="6" class="d-flex flex-column justify-center align-center">
    
    <h1 class="text-h4 font-weight-bold text-center mb-4">
        HISTORIA DEL COLEGIO NACIONAL SALTO DE GUAIRA
      </h1>

El Colegio Nacional Salto del Guaira, abrió sus puertas en marzo de 1972, siendo aquel entonces Liceo Privado Salto Del Guaira, gracias al esfuerzo y buena voluntad de sus pioneros pobladores: funcionando en un salón del Batallón de Frontera N 1, local esta desaparecido con el embalse del Rio Paraná. Fueron profesores pioneros entre otros: El Dr. Clemente Jara Franco (director), El señor Julio Cesar Riveros (secretario), catedráticos: Francisco Viancheto, Pedro Ramon Girett, Reina Jara.
  </v-col>

   <!-- Columna para la imagen -->
   <v-col cols="12" sm="6" lg="6" class="d-flex flex-column justify-center align-center">

    <v-img
            src="@/assets/imagenes/historia/historia1.jpeg"
            alt="Imagen"
            class="fill-height"
            contain
          ></v-img>
  
  </v-col>
</v-row>







</template>

<script>


import axios from 'axios'




export default {
     name: 'Historia',
    
  components: {
   
  },
  computed: {
    tab: {
      set (tab) {
        this.$router.replace({ query: { ...this.$route.query, tab } })
      },
      get () {
        return this.$route.query.tab
      }
    }
  },
    data: vm => ({
  
    
        
    
  }),
  created(){

       }
  ,mounted(){
     

   
    },

  methods: {
   
    
    
    

        

  },

    watch: {
      
    },
  computed:{
    
	


    	
    
    
  
  },
};
</script>




