import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }
  getPublication(){
    return this.http.get(`${environment.BasedUrl}/pub`);
  }
  AddPublication(p:any,id:any){
    return this.http.post<any>(`${environment.BasedUrl}/pub/crepu/`+id,p);
  }
  Delete(id:any){
    return this.http.delete(`${environment.BasedUrl}/pub/`+id);
  }
}
