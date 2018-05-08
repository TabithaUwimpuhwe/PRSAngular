
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
	message: string = '';
	user: User = new User(0,'','','','','','',false,false);

	login() {
		console.log('login method called... uname = '+this.user.UserName+', pwd = '+this.user.Password);
		this.UserSvc.login(this.user.UserName, this.user.Password)
			.subscribe(users => {
				if(users.length > 0) {
					this.user = users[0];
					this.SysSvc.data.user.instance = this.user;
					this.SysSvc.data.user.loggedIn = true;
					console.log("SysSvc:", this.SysSvc.debug);
					this.router.navigateByUrl('/user/list');
				}
				else {
					this.message = "Invalid Username/Password combo.  Retry";
				}
			})
	}

  constructor(private UserSvc: UserService, 
  						private SysSvc: SystemService,
  						private router: Router) { }

  ngOnInit() {
  }

}