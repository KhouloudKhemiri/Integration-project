import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {

  }
  AddUser(u:Users){

   return this.http.post<any>(`${environment.BasedUrl}/User/create`,u);
 }
 

}
