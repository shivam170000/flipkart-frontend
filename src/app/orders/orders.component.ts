import { Component } from '@angular/core';
import { Order } from '../models/order';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {


  Orders : any;

  constructor(private orderService : OrderServiceService){
    //this.orders =this.orderService.getOrders();
    this.getOrderDetails()
    //this.orders = this.getOrderDetails()
  }


  getOrderDetails(){
    this.orderService.getOrders().subscribe(
      (resp) =>{
        //console.log(resp);
        this.Orders = resp;
        console.log(this.Orders)
      },
      (err) =>{
        console.log(err);
      }
    )
  }
}
