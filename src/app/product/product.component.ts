import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

Products : any;

constructor(private ProductService : ProductserviceService){
  this.getProductDetails();
}



getProductDetails(){
  this.ProductService.getProducts().subscribe(
    (resp) => {
     // console.log(resp);
      this.Products = resp;
      console.log(this.Products)
    },
    (err) => {
      console.log(err);
    }
  )
}


}
