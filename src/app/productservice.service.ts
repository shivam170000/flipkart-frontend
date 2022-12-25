import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http : HttpClient) 
   {}

   API = 'http://localhost:9093/api/v1/products'




   public addProducts(productData:any)
   {
      return this.http.post(this.API,productData);
   }

   public getProducts(){
    return this.http.get(this.API);
   }

}
