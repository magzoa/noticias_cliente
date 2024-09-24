import {http} from './config';
export default{
    listarInformacions:()=>{
        return http.get('api/informacions');
    },
    save:(informacion)=>{
        return http.post('api/informacion',informacion)
    },
    update:(informacion)=>{
        return http.put('api/informacion',informacion)
    },
    delete:(informacion)=>{
        return http.delete('api/informacion/'+informacion.id)
    }
}
