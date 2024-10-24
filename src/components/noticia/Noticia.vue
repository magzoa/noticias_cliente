
<template>
    <div>

    Noticia

  </div>
</template>


<script>
import noticiaService from "@/services/noticiaService.js";

import axios from 'axios'




export default {
     name: 'Noticia',
    
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
  noticias: [],
        noticia:{

id:'',
titulo:'',
texto:'',
 fecha:vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
observacion:'',

          
        },



date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),




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
      this.listarNoticias();
    
      this.tab="two";

   
    },

  methods: {
    listarNoticias() {
      noticiaService
        .listarNoticias()
        .then((resposta) => {
      //    console.log(resposta.data);
          this.noticias = resposta.data;
        })
  
  },
    registrar(){
    if (this.$refs.form.validate()) {
   
          if(this.noticia.codigo===""||this.noticia.codigo===null){
      //Eliminar para que funcione el auto incrementable
        delete this.noticia.codigo;
          }

        console.log(this.noticia);

          noticiaService.save(this.noticia,this.config).then(resposta=>{
           this.limpiar();
              alert('Guardado exitoso!!')
              this.listarNoticias();
               this.selectedTab="second";
          });


        
      }
    },
    editarNoticia(noticia){

    //  console.log('Editar Noticia');
      
     //
     // console.log(this.noticia);


     this.noticia.id=noticia.id;
     this.noticia.id=noticia.id;
     this.noticia.titulo=noticia.titulo;
     this.noticia.texto=noticia.texto;
      this.noticia.fecha=noticia.fecha;
     this.dateFormatted = this.formatDate(noticia.fecha);
     this.date=this.formatDate(noticia.fecha);
     this.noticia.observacion=noticia.observacion;
     

      this.tab="one";
  
       console.log(noticia);

    },
    eliminarNoticia(noticia){

        if(confirm('Desea remover al noticia')){
        
        noticiaService.delete(noticia).then(resposta=>{
          this.listarNoticias();
          this.errors=[]
          this.limpiar();

        }).catch(e=>{

          this.errors =e.response.data.errors

        })

        }


        


    },
    limpiar(){

     this.date=(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
           this.dateFormatted=this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
     
		this.noticia={
				id:'',
				id:0,
				titulo:'',
				texto:'',
				fecha:this.dateFormatted,
				observacion:'',
	}

        
    },
		formatDate (date) {
		        if (!date) return null
		
		        const [year, month, day] = date.split('-')
		        return `${day}-${month}-${year}`
		      },
		      parseDate (date) {
		        if (!date) return null
		
		        const [year, month, day] = date.split('-')
		        return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`
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
        
				this.dateFormatted = this.formatDate(this.date)
		        this.noticia.fecha=this.dateFormatted;
		
       
      },
    },
  computed:{
    
	computedDateFormatted () {
        return this.formatDate(this.date)
      },


    	
    noticiasBuscados() {
          return this.noticias.filter(noticia => {
            return noticia.titulo.toLowerCase().includes(this.buscador.toLowerCase());
          });
    
      }
    
  
  },
};
</script>




