import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpclien :HttpClient) {}
  getAll(){
    return this.httpclien.get<Users[]>(`${environment.BasedUrl}/User/`);
  }
  addUser(u: any){
    return this.httpclien.post(`${environment.BasedUrl}/User/create`,u);
  }
  Delete(id:any){
    return this.httpclien.delete(`${environment.BasedUrl}/User/delete/`+id);
  }
  getById(id:any){
    return this.httpclien.get<Users>(`${environment.BasedUrl}/User/findById/`+id);
  }
  Update(id:any,user:Users){
    return this.httpclien.put<Users>(`${environment.BasedUrl}/User/update/${id}`,user);
  }

}

