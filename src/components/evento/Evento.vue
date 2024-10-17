<template>
  
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




