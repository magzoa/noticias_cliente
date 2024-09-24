import {http} from './config';
export default{
    listarEventos:()=>{
        return http.get('api/eventos');
    },
    save:(evento)=>{
        return http.post('api/evento',evento)
    },
    update:(evento)=>{
        return http.put('api/evento',evento)
    },
    delete:(evento)=>{
        return http.delete('api/evento/'+evento.id)
    }
}
