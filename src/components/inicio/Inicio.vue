
<template>
  <div>

    <template>
<v-carousel v-model="model">
  <v-carousel-item
    v-for="(color, i) in colors"
    :key="color"
  >
    <v-sheet
      :color="color"
      height="100%"
      tile
    >
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <div class="text-h2">
          Slide {{ i + 1 }}
        </div>
      </v-row>
    </v-sheet>
  </v-carousel-item>
</v-carousel>
</template>

</div>
</template>


<script>
import inicioService from "@/services/inicioService.js";

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

    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],

  valid: true,
  tab:"",
  buscador:'',
showPass: false,
inicios: [],
      inicio:{

id:'',
descripcion:'',
texto:'',
link:'',
observacion:'',

        
      },







      rules: {
                required: value => !!value || 'Campo Requerido',
                min: v => v.length >= 5 || 'Minimo 5 caracteres',
                emailMatch: () => (`The email and password you entered don't match`),
              },
        messages:undefined,
      
      
      
       textRules: [
            (v) => !!v || "Campo es requerido",
            (v) => (v && v.length >= 3) || "Debe contener al menos 3 caracteres",
          ],
      
      
      
      
  
}),
created(){

     }
,mounted(){
    this.listarInicios();
  
    this.tab="two";

 
  },

methods: {
  listarInicios() {
    inicioService
      .listarInicios()
      .then((resposta) => {
    //    console.log(resposta.data);
        this.inicios = resposta.data;
      })

},
  registrar(){
  if (this.$refs.form.validate()) {
 
        if(this.inicio.codigo===""||this.inicio.codigo===null){
    //Eliminar para que funcione el auto incrementable
      delete this.inicio.codigo;
        }

      console.log(this.inicio);

        inicioService.save(this.inicio,this.config).then(resposta=>{
         this.limpiar();
            alert('Guardado exitoso!!')
            this.listarInicios();
             this.selectedTab="second";
        });


      
    }
  },
  editarInicio(inicio){

  //  console.log('Editar Inicio');
    
   //
   // console.log(this.inicio);


   this.inicio.id=inicio.id;
   this.inicio.id=inicio.id;
   this.inicio.descripcion=inicio.descripcion;
   this.inicio.texto=inicio.texto;
   this.inicio.link=inicio.link;
   this.inicio.observacion=inicio.observacion;
   

    this.tab="one";

     console.log(inicio);

  },
  eliminarInicio(inicio){

      if(confirm('Desea remover al inicio')){
      
      inicioService.delete(inicio).then(resposta=>{
        this.listarInicios();
        this.errors=[]
        this.limpiar();

      }).catch(e=>{

        this.errors =e.response.data.errors

      })

      }


      


  },
  limpiar(){

   
  this.inicio={
      id:'',
      id:0,
      descripcion:'',
      texto:'',
      link:'',
      observacion:'',
}

      
  },
  
  validate () {
    if (this.$refs.form.validate()) {
      this.snackbar = true;
    }
  },
  reset() {
  //  this.$refs.form.reset();
    this.limpiar();
  },
  resetValidation() {
    this.$refs.form.resetValidation();
  }
},

  watch: {
    date (val) {
      
  
     
    },
  },
computed:{
  


    
  iniciosBuscados() {
        return this.inicios.filter(inicio => {
          return inicio.descripcion.toLowerCase().includes(this.buscador.toLowerCase());
        });
  
    }
  

},
};
</script>




