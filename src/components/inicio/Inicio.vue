<template>
  <div>
    <template>
<v-carousel>
  <v-carousel-item
    v-for="(item,i) in items"
    :key="i"
    :src="item.src"
    reverse-transition="fade-transition"
    transition="fade-transition"
  ></v-carousel-item>
</v-carousel>
</template>
</div>
</template>


<script>
//import inicioService from "@/services/inicioService.js";

import axios from 'axios'




export default {
   name: 'Inicio',
  
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

    items: [
          {
            src: require('@/assets/imagenes/inicio/1s1nacionalalumnos.jpg'),
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],

  
      
  
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




