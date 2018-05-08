import { Component, OnInit } from '@angular/core';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {Router} from '@angular/router';
import {PurchaseRequestService} from '../../../service/purchaserequest.service';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';
import {SystemService} from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})

export class PurchaseRequestCreateComponent implements OnInit {

    title: string ="PurchaseRequest Create";
    id: string;
    resp: any;
    purchaserequest: PurchaseRequest = new PurchaseRequest();
    authenticatedUser: User;
    
  constructor(  private prSvc: PurchaseRequestService,
                private router: Router,
                private sysSvc: SystemService,
                private userSvc: UserService) { }
                
  ngOnInit() {
      console.log("OnInit, PR = ", this.purchaserequest);
      console.log("user logged in = "+this.sysSvc.data.user);
      if(this.sysSvc.data.user.loggedIn) {
          this.purchaserequest.User = this.sysSvc.data.user.instance;
      } else {
  		console.error("User not logged in.");
      }
  }
    
 create (){
        console.log('create a Request...');
        console.log(this.purchaserequest);
     
        this.prSvc.create(this.purchaserequest)
        .subscribe(resp => {
            this.resp = resp;
            console.log("PurchaseRequest-Create:", this.resp);
            this.router.navigate(['/purchaserequest/list']);
        });
    }
}