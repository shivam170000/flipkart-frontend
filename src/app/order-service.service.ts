import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderVo } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http : HttpClient) { }



  API = 'http://localhost:9093/api/v1/order'


 addOrders(orderVo : OrderVo){
  return this.http.post(this.API, orderVo,{responseType:'text'});
 }



 getOrders(){
  return this.http.get(this.API);
 }

}
