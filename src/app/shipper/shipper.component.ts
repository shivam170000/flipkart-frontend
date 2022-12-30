import { Component } from '@angular/core';
import { ShipperserviceService } from '../shipperservice.service';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css']
})
export class ShipperComponent {

   shippers : any;
 
  constructor(private shipperService : ShipperserviceService){
    this.getShippers();
  }

  getShippers(){
    this.shipperService.getShipperDetails().subscribe(
      (resp) =>{
        console.log(resp);
        this.shippers = resp;
      },
      (err) =>{
        console.log(err);
      }
    )
  }


}
