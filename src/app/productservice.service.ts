import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http : HttpClient) 
   {}

   API = 'http://localhost:9093/api/v1/products'

   public addProducts(productData:any)
   {
      console.log(productData);
      return this.http.post(this.API,[productData],{responseType:'text'});
   }



 

   public getProducts(){
    return this.http.get(this.API);
   }


   public updateProduct(product:any) : Observable<String>{
      return this.http.put(this.API,[product],{responseType:'text'});
   }


   public deleteProduct(id:any){
      return this.http.delete(this.API + '/' + id,{responseType:'text'});
   }

}
