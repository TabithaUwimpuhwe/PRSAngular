import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AboutComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [
     UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
