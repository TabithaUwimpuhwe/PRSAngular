import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    //must match what is declared in model/user.ts
    title: string ="User Create";
    user: User = new User(0, '', '', '','', '', '', false, false);
    resp: any;
    
    
    create (){
        console.log('create a user...');
        console.log(this.user);
        this.userSvc.create(this.user)
        .subscribe(resp => {
            this.resp = resp;
            console.log("User-Create:", this.resp);
            this.router.navigate(['/user/list']);
        });
    }
    
//import userService and Router to connect to UI
  constructor(private userSvc: UserService,
               private router: Router) { }

  ngOnInit() {
  }

}
