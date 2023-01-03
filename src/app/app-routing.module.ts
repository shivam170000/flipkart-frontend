import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShipperComponent } from './shipper/shipper.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';

const routes: Routes = [
  {
    component : HomeComponent,
    path:""


  },
  {
    component : ProductAdminComponent,
    path: "productAdmin"
  },
  {
    component : ProductComponent,
    path : "product"
  },
  {
    component : ShipperComponent,
    path : 'shipper'
  },
  {
    component : CartComponent,
    path : 'cart'
  },
  {
    component : SignupComponent,
    path : 'customer'
  },
  {
    component :OrdersComponent,
    path : 'order'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
