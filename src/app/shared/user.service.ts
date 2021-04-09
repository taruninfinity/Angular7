import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44394/api';

  login(userInfo) {
    return this.http.post(this.BaseURI + '/Token', userInfo);
  }

  getCards(){
    return this.http.get(this.BaseURI + '/CardDetails');
  }

  getCardDetails(id,type){
    return this.http.get(this.BaseURI + '/CardDetails/'+id+'/'+type);
  }
 
}
