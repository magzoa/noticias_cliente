
<template>
    <div>
<h3>{{usuario}}</h3> 

    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Registro de Usuarios</v-toolbar-title>
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
           v-model="usuario.correo"
           label="Correo"
           :counter="3"
           :rules="emailRules"
           required
         ></v-text-field>
   
   
   
   
   		<v-text-field
               v-model="usuario.pass"
               :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
               :rules="[rules.required, rules.min]"
               :type="showPass ? 'text' : 'password'"
               name="input-pass"
               label="Contraseña"
               hint="Minimo 5 caracteres"
               counter
               @click:append="showPass = !showPass"
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
      El presente registro es responsable de almacenar información sobre el Usuario.<br>
      
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
          Busqueda por nombre de Usuario
        </template>
          
          
          </v-text-field>



             
 <v-simple-table fixed-header>
    <template v-slot:default>


      <thead class="thead-dark">
        <tr>    
			
		<th scope="col">Correo</th>
		<th scope="col">Id</th>
		        <th scope="col">Editar</th>
		          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuariosBuscados" :key="usuario.codigo">       
<td>{{usuario.correo}}</td>




<td>{{usuario.id}}</td>



          <td>
              <button @click="editarUsuario(usuario)" class="btn"><v-icon left>mdi-pencil</v-icon></button>
              
            </td>
            <td>
              <button @click="eliminarUsuario(usuario)" class="btn"><v-icon left>mdi-delete-forever</v-icon></button>
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
import usuarioService from "@/services/usuarioService.js";

import axios from 'axios'




export default {
     name: 'Usuario',
    
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
  usuarios: [],
        usuario:{

correo:'',
pass:'',
id:'',

          
        },





        rules: {
                  required: value => !!value || 'Campo Requerido',
                  min: v => v.length >= 5 || 'Minimo 5 caracteres',
                  emailMatch: () => (`The email and password you entered don't match`),
                },
        	messages:undefined,
        
        
            emailRules:  [
              (v) => !!v || "Correo es requerido",
              (v) => /.+@.+\..+/.test(v) || "Correo debe ser valido",
            ]
        
        
        
    
  }),
  created(){

       }
  ,mounted(){
      this.listarUsuarios();
    
      this.tab="two";

   
    },

  methods: {
    listarUsuarios() {
      usuarioService
        .listarUsuarios()
        .then((resposta) => {
      //    console.log(resposta.data);
          this.usuarios = resposta.data;
        })
  
  },
    registrar(){
    if (this.$refs.form.validate()) {
   
          if(this.usuario.codigo===""||this.usuario.codigo===null){
      //Eliminar para que funcione el auto incrementable
        delete this.usuario.codigo;
          }

        console.log(this.usuario);

          usuarioService.save(this.usuario,this.config).then(resposta=>{
           this.limpiar();
              alert('Guardado exitoso!!')
              this.listarUsuarios();
               this.selectedTab="second";
          });


        
      }
    },
    editarUsuario(usuario){

    //  console.log('Editar Usuario');
      
     //
     // console.log(this.usuario);


     this.usuario.correo=usuario.correo;
     this.usuario.pass=usuario.pass;
     this.usuario.id=usuario.id;
     this.usuario.id=usuario.id;
     

      this.tab="one";
  
       console.log(usuario);

    },
    eliminarUsuario(usuario){

        if(confirm('Desea remover al usuario')){
        
        usuarioService.delete(usuario).then(resposta=>{
          this.listarUsuarios();
          this.errors=[]
          this.limpiar();

        }).catch(e=>{

          this.errors =e.response.data.errors

        })

        }


        


    },
    limpiar(){

     
		this.usuario={
				correo:'',
				pass:'',
				id:'',
				id:0,
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
    },

    
  },

    watch: {
      date (val) {
        
		
       
      },
    },
  computed:{
    
    usuariosBuscados() {
          return this.usuarios.filter(usuario => {
            return usuario.correo.toLowerCase().includes(this.buscador.toLowerCase());
          });
    
      }

    
  
  },
};
</script>




