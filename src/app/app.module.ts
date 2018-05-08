import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorService } from './service/vendor.service';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductService } from './service/product.service';

import { PurchaseRequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestLinesComponent } from './feature/purchaserequest/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaseRequestService } from './service/purchaserequest.service';

import {PurchaseRequestLineItemCreateComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import {PurchaseRequestLineItemEditComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaseRequestLineItemService } from './service/purchaserequestlineitem.service';

import { SystemService } from './service/system.service';
import { SortPipe } from './pipe/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AboutComponent,
    HomeComponent,
    MenuComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
      
    PurchaseRequestCreateComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestListComponent,
      
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestLineItemEditComponent,
   
    PurchaseRequestLinesComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaseRequestService,
    PurchaseRequestLineItemService,
    SystemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
