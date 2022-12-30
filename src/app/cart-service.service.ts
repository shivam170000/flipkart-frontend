import { Injectable } from '@angular/core';
import { Product,ProductVo } from './models/product';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  
  items: Product[] = [];
  totalPrice = 0;

  constructor() {
    this.items = JSON.parse(localStorage.getItem('items') || '[]');
  }


  addToCart(product : Product){
    product.unit = 1;
    //console.log(this.items.push(product));
    this.items.push(product);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

 emptyCart(){
  this.items = [];
  localStorage.setItem('items',JSON.stringify(this.items));
 }

  getPrice(){
    let temp = 0;
    this.items.forEach(element => {
      temp += element.price;
    });
    return temp;
  }

  getItems() {
   console.log(this.items);
   return JSON.parse(localStorage.getItem('items') || '[]');
  }

  //removeProductCart(product:any){
    //localStorage.setItem('items', JSON.stringify(this.items.filter(p => p.productID != product.productID)));
    //localStorage.removeItem(product);
    //return this.getItems();

 // }

 


}

