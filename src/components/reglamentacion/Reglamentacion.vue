
<template>
    <div>

      <v-row>
  <!-- Card para la Misión -->
  <v-col cols="12" sm="12">
    <v-card class="pa-5">
      <v-card-title class="font-weight-bold text-h5">Misión</v-card-title>
      <v-card-text class="body-1">
        Formar bachilleres de calidad, fundamentados en los mejores principios morales, identificados con nuestra realidad, capaces de solucionar problemas en su campo de acción impulsando el avance científico y tecnológico, generando trabajo productivo para contribuir al desarrollo de su comunidad.
      </v-card-text>
    </v-card>
  </v-col>

  <!-- Card para la Visión -->
  <v-col cols="12" sm="12">
    <v-card class="pa-5">
      <v-card-title class="font-weight-bold text-h5">Visión</v-card-title>
      <v-card-text class="body-1">
        El Colegio Nacional Salto del Guiará, pretende lograr el afianzamiento en el rendimiento académico en las diferentes áreas pedagógicas. proyectarnos como una institución facilitadora del aprendizaje, con el objeto de lograr en los educandos la formación integral, para que puedan desenvolverse satisfactoriamente en su entorno, que redunde en beneficios de su personalidad, de su familia y de su comunidad.
      </v-card-text>
    </v-card>
  </v-col>
</v-row>


  </div>
</template>


<script>
//import noticiaService from "@/services/noticiaService.js";

import axios from 'axios'




export default {
     name: 'Reglamentacion',
    
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




