import { Component, ViewChild , ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';
import Swal from 'sweetalert2';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartServiceService } from '../cart-service.service';
import { Product,ProductVo } from '../models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


@ViewChild('closeaddModal',{static:true}) closeadd! : ElementRef;

@ViewChild('closeeditModal',{static:true}) closeedit! : ElementRef;


Products : any;
modalService!: NgbModal; 
products! : Product[];
productVo: ProductVo = new ProductVo();


constructor(private ProductService : ProductserviceService , private cartService : CartServiceService){

  Swal.fire({
    title :'Sale !',
    text : 'That thing is still around.',
    timer:1250,
    showConfirmButton:false
})
  this.getProductDetails();
}

// productToUpdate = {
//   productID :"",
//   productName : "",
//   unit : "",
//   price : "",
//   supplierID: ""
// }


addToCart(product:Product){

  //console.log(product);
 // alert("product added to cart");
 // console.log(product);

 this.cartService.addToCart(product);
 
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
   title: 'Product Added to Cart',
 });


}


// addingProduct(productsubmit: NgForm){
//   this.ProductService.addProducts(productsubmit.value).subscribe(
//     (resp) =>{
//       console.log(resp);
//      // alert("Added");
//       productsubmit.reset();
//       (this.closeadd.nativeElement as HTMLElement).click()
//       const Toast = Swal.mixin({
//         toast: true,
//         position: 'center',
//         showConfirmButton: false,
//         timer: 2000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer);
//           toast.addEventListener('mouseleave', Swal.resumeTimer);
//         },
//       });
  
//       Toast.fire({
//         icon: 'success',
//         title: 'Product Added Successfully',
//       });
//       this.getProductDetails();
//     },
//     (err) =>{
//       alert("Added");
//       productsubmit.resetForm();
//       this.getProductDetails();
//       console.log(err);
//     }
//   );

// }

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

// edit(productVo: any){
//   this.productToUpdate = productVo;
//   this.productToUpdate.supplierID = productVo.supplier.supplierID;


  
// }
// updateProd(){
//   this.ProductService.updateProduct(this.productToUpdate).subscribe(
//     (resp) =>{
//       console.log(resp);
//       //alert("Added");
//       //productsubmit.resetForm();
//       (this.closeedit.nativeElement as HTMLElement).click()
//       const Toast = Swal.mixin({
//         toast: true,
//         position: 'center',
//         showConfirmButton: false,
//         timer: 2000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer);
//           toast.addEventListener('mouseleave', Swal.resumeTimer);
//         },
//       });
  
//       Toast.fire({
//         icon: 'success',
//         title: 'Product Details Updated Successfully',
//       });

//       this.modalService.dismissAll();
//       this.getProductDetails();
//     },
//     (err) =>{
//       //alert("Added");
//       //productsubmit.resetForm();
//       //this.getProductDetails();
//       console.log(err);
//     }
//   );
// }

// deleteProduct(product:any){
//   this.ProductService.deleteProduct(product.productID).subscribe(
//     (resp) => {
//       console.log(resp);
//      // alert("Deleted");
//      Swal.fire({
//       title: "Product Deleted !",
//       text: "",
//       timer: 2000
//     });
//       this.getProductDetails();
//     },
//     (err) => {
//       console.log(err)
//     }
//   )
// }


}
