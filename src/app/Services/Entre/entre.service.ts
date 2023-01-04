import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from 'src/app/Models/entreprise';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntreService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<Entreprise[]>(`${environment.BasedUrl}/entreprise/`);
  }
  
  LoginEntr(entreprise:Entreprise){
    console.log(entreprise)
    return this.http.post<any>(`${environment.BasedUrl}/entreprise/login`,entreprise)
      
  }
  Delete(id:any){
    return this.http.delete(`${environment.BasedUrl}/entreprise/delete/`+id);
  }
  getById(id:any){
    return this.http.get(`${environment.BasedUrl}/entreprise/findById/`+id)
  }
  AddEn(e:Entreprise){
    return this.http.post<any>(`${environment.BasedUrl}/entreprise/createEntre`,e);
  }
}