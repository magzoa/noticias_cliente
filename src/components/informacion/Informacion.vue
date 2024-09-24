
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








<h3>{{informacion}}</h3> 

    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Registro de Informacions</v-toolbar-title>
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
           v-model="informacion.descripcion"
           label="Descripcion"
           :counter="3"
           :rules="textRules"
           required
         ></v-text-field>
   
   
    <v-text-field
           v-model="informacion.observacion"
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
      El presente registro es responsable de almacenar información sobre el Informacion.<br>
      
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
          Busqueda por nombre de Informacion
        </template>
          
          
          </v-text-field>



             
 <v-simple-table fixed-header>
    <template v-slot:default>


      <thead class="thead-dark">
        <tr>    
			
		<th scope="col">Id</th>
		<th scope="col">Descripcion</th>
		<th scope="col">Observacion</th>
		        <th scope="col">Editar</th>
		          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="informacion in informacionsBuscados" :key="informacion.codigo">       
<td>{{informacion.id}}</td>


<td>{{informacion.descripcion}}</td>


<td>{{informacion.observacion}}</td>



          <td>
              <button @click="editarInformacion(informacion)" class="btn"><v-icon left>mdi-pencil</v-icon></button>
              
            </td>
            <td>
              <button @click="eliminarInformacion(informacion)" class="btn"><v-icon left>mdi-delete-forever</v-icon></button>
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
import informacionService from "@/services/informacionService.js";

import axios from 'axios'




export default {
     name: 'Informacion',
    
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
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
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
        buscador:'',
        objeto:{},

    valid: true,
    tab:"",
  
showPass: false,
  informacions: [],
        informacion:{

id:'',
descripcion:'',
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
      this.listarInformacions();
    
      this.tab="two";

   
    },

  methods: {
    listarInformacions() {
      informacionService
        .listarInformacions()
        .then((resposta) => {
      //    console.log(resposta.data);
          this.informacions = resposta.data;
        })
  
  },
    registrar(){
    if (this.$refs.form.validate()) {
   
          if(this.informacion.codigo===""||this.informacion.codigo===null){
      //Eliminar para que funcione el auto incrementable
        delete this.informacion.codigo;
          }

        console.log(this.informacion);

          informacionService.save(this.informacion,this.config).then(resposta=>{
           this.limpiar();
              alert('Guardado exitoso!!')
              this.listarInformacions();
               this.selectedTab="second";
          });


        
      }
    },
    editarInformacion(informacion){

    //  console.log('Editar Informacion');
      
     //
     // console.log(this.informacion);


     this.informacion.id=informacion.id;
     this.informacion.id=informacion.id;
     this.informacion.descripcion=informacion.descripcion;
     this.informacion.observacion=informacion.observacion;
     

      this.tab="one";
  
       console.log(informacion);

    },
    eliminarInformacion(informacion){

        if(confirm('Desea remover al informacion')){
        
        informacionService.delete(informacion).then(resposta=>{
          this.listarInformacions();
          this.errors=[]
          this.limpiar();

        }).catch(e=>{

          this.errors =e.response.data.errors

        })

        }


        


    },
    limpiar(){

     
		this.informacion={
				id:'',
				id:0,
				descripcion:'',
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
    


    	
    informacionsBuscados() {
          return this.informacions.filter(informacion => {
            return informacion.descripcion.toLowerCase().includes(this.buscador.toLowerCase());
          });
    
      }
    
  
  },
};
</script>




