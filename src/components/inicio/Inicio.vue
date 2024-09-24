
<template>
    <div>
<h3>{{inicio}}</h3> 

    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Registro de Inicios</v-toolbar-title>
      </v-toolbar>
      <v-tabs v-model="tab">
       
       <v-tab href="#one">
          <v-icon left>mdi-account</v-icon>
          Registro
        </v-tab>
        
        <v-tab href="#two" >
          <v-icon left>mdi-dns</v-icon>
          Listado
        </v-tab>
    </v-tabs>
         <v-tabs-items :value="tab"> 
          <!-- <div :value="tab"> -->
        <v-tab-item value="one">
          <v-card flat>
            <v-card-text>
               <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
   
   
    <v-text-field
           v-model="inicio.descripcion"
           label="Descripcion"
           :counter="3"
           :rules="textRules"
           required
         ></v-text-field>
   
   
    <v-text-field
           v-model="inicio.texto"
           label="Texto"
           :counter="3"
           :rules="textRules"
           required
         ></v-text-field>
   
   
   
    <v-text-field
           v-model="inicio.link"
           label="Link"
           :counter="3"
           :rules="textRules"
           required
         ></v-text-field>
   
    <v-text-field
           v-model="inicio.observacion"
           label="Observacion"
           :counter="3"
           :rules="textRules"
           required
         ></v-text-field>
   
   
   

 <v-row no-gutters>
      
      <v-col>
      </v-col>

      <v-col order="last">
        
      </v-col>
     
    </v-row>


      
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="registrar"
      >
        Registrar
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset();"
      >
        Cancelar
      </v-btn>
  
    </v-form> 
            </v-card-text>


           <v-card-text>

            <v-alert
      border="top"
      colored-border
      type="info"
      elevation="2"
      
    >
      El presente registro es responsable de almacenar información sobre el Inicio.<br>
      
    </v-alert>

          </v-card-text>




          </v-card>
        </v-tab-item>

   <!--  fin item 1-->
<v-tab-item value="two">
          <v-card flat>
            <v-card-text>

<v-text-field
            v-model="buscador" 
            placeholder="Ejemplo: Juan Perez"
            outlined
           
          >
          <template v-slot:label>
          <v-icon style="vertical-align: middle">
            mdi-magnify
          </v-icon>
          Busqueda por nombre de Inicio
        </template>
          
          
          </v-text-field>



             
 <v-simple-table fixed-header>
    <template v-slot:default>


      <thead class="thead-dark">
        <tr>    
			
		<th scope="col">Id</th>
		<th scope="col">Descripcion</th>
		<th scope="col">Texto</th>
		<th scope="col">Link</th>
		<th scope="col">Observacion</th>
		        <th scope="col">Editar</th>
		          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="inicio in iniciosBuscados" :key="inicio.codigo">       
<td>{{inicio.id}}</td>


<td>{{inicio.descripcion}}</td>


<td>{{inicio.texto}}</td>


<td>{{inicio.link}}</td>


<td>{{inicio.observacion}}</td>



          <td>
              <button @click="editarInicio(inicio)" class="btn"><v-icon left>mdi-pencil</v-icon></button>
              
            </td>
            <td>
              <button @click="eliminarInicio(inicio)" class="btn"><v-icon left>mdi-delete-forever</v-icon></button>
            </td>
     
 </tr>
      </tbody>
    </template>
  </v-simple-table>

            </v-card-text>
          </v-card>
        </v-tab-item>

        <!--  fin item 2-->
     

      </v-tabs-items> 

          <!-- </div> -->
    </v-card>
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




