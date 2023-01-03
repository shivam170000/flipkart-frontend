import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  customers : any;

  @ViewChild('closeaddModal',{static:true}) register! : ElementRef;

  constructor(private customer : CustomerService){
    this.getCustomerDetails();
  }


  getCustomerDetails(){
    this.customer.getCustomers().subscribe(
      (resp) =>{
        console.log(resp);
        this.customers = resp;
      },
      (err) =>{
        console.log(err)
      }
    )
  }

  addingCustomer(customerSubmit: NgForm){
    this.customer.addCustomers(customerSubmit.value).subscribe(
      (resp) =>{
        console.log(resp);
        customerSubmit.reset();
        (this.register.nativeElement as HTMLElement).click();
        this.getCustomerDetails();
        Swal.fire({
          title : "Customer Registration Successfully",
          timer : 1500,
          showConfirmButton : false,
          icon : 'success'
        });
      },
      (error) =>{
        console.log(error)
      }
    )
  }

}
