import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CartServiceService } from '../cart-service.service';
import { Product, ProductVo } from '../models/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent {


  
@ViewChild('closeaddModal',{static:true}) closeadd! : ElementRef;

@ViewChild('closeeditModal',{static:true}) closeedit! : ElementRef;


Products : any;
modalService!: NgbModal; 
products! : Product[];
productVo: ProductVo = new ProductVo();


constructor(private ProductService : ProductserviceService , private cartService : CartServiceService){

  Swal.fire({
    title :'Admin Page',
    timer:2000,
    showConfirmButton:false
})
  this.getProductDetails();
}

productToUpdate = {
  productID :"",
  productName : "",
  unit : "",
  price : "",
  supplierID: ""
}





addingProduct(productsubmit: NgForm){
  this.ProductService.addProducts(productsubmit.value).subscribe(
    (resp) =>{
      console.log(resp);
     // alert("Added");
      productsubmit.reset();
      (this.closeadd.nativeElement as HTMLElement).click()
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
  
      Toast.fire({
        icon: 'success',
        title: 'Product Added Successfully',
      });
      this.getProductDetails();
    },
    (err) =>{
      alert("Added");
      productsubmit.resetForm();
      this.getProductDetails();
      console.log(err);
    }
  );

}

getProductDetails(){
  this.ProductService.getProducts().subscribe(
    (resp) => {
      console.log(resp);
      this.Products = resp;
      console.log(this.Products);
    },
    (err) => {
      console.log(err);
    }
  )
}

edit(productVo: any){
  this.productToUpdate = productVo;
  this.productToUpdate.supplierID = productVo.supplier.supplierID;


  
}
updateProd(){
  this.ProductService.updateProduct(this.productToUpdate).subscribe(
    (resp) =>{
      console.log(resp);
      //alert("Added");
      //productsubmit.resetForm();
      (this.closeedit.nativeElement as HTMLElement).click()
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
  
      Toast.fire({
        icon: 'success',
        title: 'Product Details Updated Successfully',
      });

      this.modalService.dismissAll();
      this.getProductDetails();
    },
    (err) =>{
      //alert("Added");
      //productsubmit.resetForm();
      //this.getProductDetails();
      console.log(err);
    }
  );
}

deleteProduct(product:any){
  this.ProductService.deleteProduct(product.productID).subscribe(
    (resp) => {
      console.log(resp);
     // alert("Deleted");
     Swal.fire({
      title: "Product Deleted !",
      text: "",
      timer: 2000
    });
      this.getProductDetails();
    },
    (err) => {
      console.log(err)
    }
  )
}



}
