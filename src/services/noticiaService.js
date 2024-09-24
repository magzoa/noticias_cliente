import {http} from './config';
export default{
    listarNoticias:()=>{
        return http.get('api/noticias');
    },
    save:(noticia)=>{
        return http.post('api/noticia',noticia)
    },
    update:(noticia)=>{
        return http.put('api/noticia',noticia)
    },
    delete:(noticia)=>{
        return http.delete('api/noticia/'+noticia.id)
    }
}
