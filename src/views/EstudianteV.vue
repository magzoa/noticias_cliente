

<template>
<div>
<v-container>
<v-row>
<v-col cols="12" sm="12" lg="12">
   <estudiante></estudiante>
</v-col>
</v-row>   
</v-container>
   
</div>
</template>

<script>

import estudiante from '@/components/estudiante/Estudiante.vue';



export default {
    data () {
    return {
              
    }
  },
  components: {
    
    estudiante
    
  },

  methods: {

}

}
    

</script>


