import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

Products : any;
//productsubmit:any;


constructor(private ProductService : ProductserviceService){
  this.getProductDetails();
}



addingProduct(productsubmit: any){


  this.ProductService.addProducts(productsubmit.value).subscribe(
    (resp) =>{
      console.log(resp);
      alert("Added");
    },
    (err) =>{
      console.log(err);
    }
  );

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
