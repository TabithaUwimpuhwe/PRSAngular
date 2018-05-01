import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; //added and below
import {AboutComponent} from './core/about/about.component';
import {UserListComponent} from './feature/user/user-list/user-list.component';
import {HomeComponent} from './core/home/home.component';


const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'about', component:AboutComponent},
    {path: 'user-list', component:UserListComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', component: HomeComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
