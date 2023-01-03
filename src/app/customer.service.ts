import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  API = "http://localhost:9093/api/v1/customer"
  constructor(private http : HttpClient) { }

  getCustomers(){
    return this.http.get(this.API);
  }

  addCustomers(customer:any) : Observable<any>{
    return this.http.post(this.API, [customer], {responseType : 'text'})
  }

}
