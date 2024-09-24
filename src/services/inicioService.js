import {http} from './config';
export default{
    listarInicios:()=>{
        return http.get('api/inicios');
    },
    save:(inicio)=>{
        return http.post('api/inicio',inicio)
    },
    update:(inicio)=>{
        return http.put('api/inicio',inicio)
    },
    delete:(inicio)=>{
        return http.delete('api/inicio/'+inicio.id)
    }
}
