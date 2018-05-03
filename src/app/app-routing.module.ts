import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; //added and below
import {UserLoginComponent} from './feature/user/user-login/user-login.component'
import {HomeComponent} from './core/home/home.component';
import {AboutComponent} from './core/about/about.component';
import {UserCreateComponent} from './feature/user/user-create/user-create.component';
import {UserListComponent} from './feature/user/user-list/user-list.component';
import {UserDetailComponent} from './feature/user/user-detail/user-detail.component'
import {UserEditComponent} from './feature/user/user-edit/user-edit.component'
import {VendorListComponent} from './feature/vendor/vendor-list/vendor-list.component';
import {VendorCreateComponent} from './feature/vendor/vendor-create/vendor-create.component';
import {VendorDetailComponent} from './feature/vendor/vendor-detail/vendor-detail.component'
import {VendorEditComponent} from './feature/vendor/vendor-edit/vendor-edit.component'


const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'about', component:AboutComponent},
    {path: 'user/list', component:UserListComponent},
    {path: 'user/create', component:UserCreateComponent},
    {path: 'user/detail/:id', component:UserDetailComponent},
    {path: 'user/remove/:id', component:UserDetailComponent},
    {path: 'user/edit/:id', component:UserEditComponent},
    {path: 'user/login/:id', component:UserLoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'vendor/list', component:VendorListComponent},
    {path: 'vendor/create', component:VendorCreateComponent},
    {path: 'vendor/detail/:id', component:VendorDetailComponent},
    {path: 'vendor/remove/:id', component:VendorDetailComponent},
    {path: 'vendor/edit/:id', component:VendorEditComponent},
    {path: '**', component: HomeComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
