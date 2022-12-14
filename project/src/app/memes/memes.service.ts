import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { IMeme } from '../shared/interfaces/MemeInterface';

@Injectable({
  providedIn: 'root'
})
export class MemesService {
  
  constructor( private http: HttpClient, private authService:AuthServiceService) {
    
   }
    
getAll(){
  return this.http.get<IMeme[]>('/api/data/memes')
}

getOne(memeId:string){
  return this.http.get<IMeme>(`/api/data/memes/${memeId}`)
}

createOne(title:string,imgUrl:string,headers:HttpHeaders){
  return this.http.post(`/api/data/memes/`,{title,imgUrl},{headers})
}

deleteOne(memeId:string,headers:HttpHeaders) {
 return this.http.delete(`/api/data/memes/${memeId}`,{headers})
}

updateOne(memeId:string,data:any,headers:HttpHeaders){
  return this.http.put(`/api/data/memes/${memeId}`,data, {headers})
}

}
