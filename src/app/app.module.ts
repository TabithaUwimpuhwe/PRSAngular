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
    VendorDetailComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    VendorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
