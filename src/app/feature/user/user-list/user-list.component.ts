import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
    
    title: string = 'User List';
    users: User[]=[];

  constructor(private userSvc: UserService) { }

  ngOnInit() { //p136 populate list of users
     
    //connecting to the back end user table in Eclipse/MySQL
    this.userSvc.list().subscribe(userSvcList =>{ 
                        console.log(userSvcList);
                        this.users = userSvcList;
    });
  }
}
