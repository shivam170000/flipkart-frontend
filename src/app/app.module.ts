import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShipperComponent } from './shipper/shipper.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { ModalModule } from 'ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductAdminComponent } from './product-admin/product-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShipperComponent,
    CartComponent,
    SignupComponent,
    OrdersComponent,
    HomeComponent,
    ProductAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
