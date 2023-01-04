import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient :HttpClient) {}
  LoginUser(user:Users){
    console.log(user)
    return this.httpclient.post<any>(`${environment.BasedUrl}/User/login`,user)
      
  }

}
