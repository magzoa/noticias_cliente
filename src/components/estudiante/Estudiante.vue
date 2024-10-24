<template>
 <v-row>
  <!-- Columna para la imagen -->
  <v-col cols="12" sm="6" lg="6" class="d-flex flex-column justify-center align-center">
    <v-avatar size="200" class="ma-5">
      <img src="@/assets/imagenes/estudiantes/Juan.jpg" alt="Juan" />
    </v-avatar>

    <!-- Descripción de la imagen -->
    <div class="text-center">
      <p class="font-weight-bold">Juan</p>
      <p class="subtitle-1">Estudiante destacado de informática</p>
    </div>
  </v-col>

   <!-- Columna para la imagen -->
   <v-col cols="12" sm="6" lg="6" class="d-flex flex-column justify-center align-center">
    <v-avatar size="200" class="ma-5">
      <img src="@/assets/imagenes/estudiantes/Juan.jpg" alt="Juan" />
    </v-avatar>

    <!-- Descripción de la imagen -->
    <div class="text-center">
      <p class="font-weight-bold">Juan</p>
      <p class="subtitle-1">Estudiante destacado de informática</p>
    </div>
  </v-col>
</v-row>







</template>

<script>
import eventoService from "@/services/eventoService.js";

import axios from 'axios'




export default {
     name: 'Evento',
    
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




