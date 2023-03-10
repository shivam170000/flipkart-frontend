import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Product } from '../models/product';
import { Order, OrderVo , OrderDetails } from '../models/order';
import { OrderServiceService } from '../order-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {


  customerID : any;
  items : Product[] = [];
  totalPrice: number = 0;
  shipper : number = 0;
  postalCode : number = 0;

  constructor(private cartService: CartServiceService , private orderService : OrderServiceService) {
   this.items = cartService.getItems();
   console.log(this.items);
   this.totalPrice = cartService.getPrice();
  }

  emptyCart(){
    this.items = [];
    this.totalPrice = 0;
    this.cartService.emptyCart();
  }

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('postalInput') postalInput!: ElementRef;



  
 

  removeProduct(item:any){
    console.log(item);
    this.totalPrice = this.totalPrice - item.price;
    this.items = this.items.filter((i) => i !== item);
    console.log(this.items);
    localStorage.setItem('items', JSON.stringify(this.items));
    console.log(this.cartService.getItems());
    this.items = this.cartService.getItems();
    Swal.fire({
      title : "Product Removed !",
      timer: 1250,
      icon : "warning"
    })
    //reload(true);
   // this.cartService.getItems();
  }


  buyNow(){
    let date = new Date()
    let orderDetails: OrderDetails[]= []
    this.items.forEach(element => {
      orderDetails.push({
        productID: element.productID,
        quantity: 1
      })  
    });
    let order:OrderVo={
      customerID : this.nameInput.nativeElement.value,
      date: date.toISOString().split('T')[0],
      shipperID : this.shipperSet(),
      orderDetails: orderDetails
    }
    
    console.log(order);
    this.orderService.addOrders(order).subscribe(o =>{
      //alert('Order Successful')
      this.emptyCart();
      Swal.fire({
        title : "Order Placed Successfully !",
        text : "Happiness on the way",
        timer : 2000,
        icon : "success",
        showConfirmButton : false
      })
    })
  }

  shipperSet(){
  this.postalCode = this.postalInput.nativeElement.value;
  if(this.postalCode == 400615){
    //this.shipper = 10002 ;
    return 10002;
  } else if(this.postalCode > 400615){
    //this.shipper = 10001;
    return 10001;
  }
  else{
    return 10003;
  }
}
 

}
