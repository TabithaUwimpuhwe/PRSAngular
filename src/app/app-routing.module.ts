import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; //added and below
import {HomeComponent} from './core/home/home.component';
import {AboutComponent} from './core/about/about.component';

import {UserCreateComponent} from './feature/user/user-create/user-create.component';
import {UserListComponent} from './feature/user/user-list/user-list.component';
import {UserDetailComponent} from './feature/user/user-detail/user-detail.component';
import {UserEditComponent} from './feature/user/user-edit/user-edit.component';
import {UserLoginComponent} from './feature/user/user-login/user-login.component';

import {VendorListComponent} from './feature/vendor/vendor-list/vendor-list.component';
import {VendorCreateComponent} from './feature/vendor/vendor-create/vendor-create.component';
import {VendorDetailComponent} from './feature/vendor/vendor-detail/vendor-detail.component'
import {VendorEditComponent} from './feature/vendor/vendor-edit/vendor-edit.component'

import {ProductCreateComponent} from './feature/product/product-create/product-create.component';
import {ProductListComponent} from './feature/product/product-list/product-list.component';
import {ProductDetailComponent} from './feature/product/product-detail/product-detail.component';
import {ProductEditComponent} from './feature/product/product-edit/product-edit.component';

import {PurchaseRequestCreateComponent} from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import {PurchaseRequestListComponent} from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import {PurchaseRequestDetailComponent} from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import {PurchaseRequestEditComponent} from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';

import {PurchaseRequestLineItemCreateComponent} from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import {PurchaseRequestLineItemEditComponent} from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';

import { PurchaseRequestLinesComponent } from './feature/purchaserequest/purchaserequest-lines/purchaserequest-lines.component';

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    
    {path: 'about', component:AboutComponent},
    {path: 'home', component: HomeComponent},
    
    {path: 'user/list', component:UserListComponent},
    {path: 'user/create', component:UserCreateComponent},
    {path: 'user/detail/:id', component:UserDetailComponent},
    {path: 'user/remove/:id', component:UserDetailComponent},
    {path: 'user/edit/:id', component:UserEditComponent},
    {path: 'user/login', component:UserLoginComponent},
   
    
    {path: 'vendor/list', component:VendorListComponent},
    {path: 'vendor/create', component:VendorCreateComponent},
    {path: 'vendor/detail/:id', component:VendorDetailComponent},
    {path: 'vendor/remove/:id', component:VendorDetailComponent},
    {path: 'vendor/edit/:id', component:VendorEditComponent},
    
    {path: 'product/list', component:ProductListComponent},
    {path: 'product/create', component:ProductCreateComponent},
    {path: 'product/detail/:id', component:ProductDetailComponent},
    {path: 'product/remove/:id', component:ProductDetailComponent},
    {path: 'product/edit/:id', component:ProductEditComponent},
    
    {path: 'purchaserequest/list', component:PurchaseRequestListComponent},
    {path: 'purchaserequest/create', component:PurchaseRequestCreateComponent},
    {path: 'purchaserequest/detail/:id', component:PurchaseRequestDetailComponent},
    {path: 'purchaserequest/remove/:id', component:PurchaseRequestDetailComponent},
    {path: 'purchaserequest/edit/:id', component:PurchaseRequestEditComponent},
    
    
    {path: 'purchaserequestlineitem/create', component:PurchaseRequestLineItemCreateComponent},
    {path: 'purchaserequestlineitem/edit/:id', component:PurchaseRequestLineItemEditComponent},
    
    {path:'purchaserequest/lines/:id', component: PurchaseRequestLinesComponent},
    {path:'purchaserequest/linedel/:id/:del', component: PurchaseRequestLinesComponent},
    
    {path: '**', component: HomeComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
