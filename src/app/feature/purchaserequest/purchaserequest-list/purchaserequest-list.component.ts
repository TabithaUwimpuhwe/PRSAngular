import { Component, OnInit } from '@angular/core';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {PurchaseRequestService} from '../../../service/purchaserequest.service';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';
import {SystemService} from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})

export class PurchaseRequestListComponent implements OnInit {

    title: string = 'PurchaseRequest List';
   purchaserequests: PurchaseRequest[]=[];
    //moch ligin user
    user:User
    
    
  constructor(private userSvc: UserService,
              private prSvc: PurchaseRequestService,
              private sysSvc: SystemService) { }
 
//  ngOnInit() {
//       //connecting to the back end purchaserequest table in Eclipse/MySQL
//    this.prSvc.list().subscribe(prSvcList =>{ 
//                        console.log(prSvcList);
//                        this.requests = prSvcList;
//      })   
//     
      //connecting to the back end purchaserequest table in Eclipse/MySQL
     ngOnInit() {
    console.log('Getting list of prs...');
  	this.prSvc.list().subscribe(prs => {
  		this.purchaserequests = prs;
        console.log(prs);
  	});
    // mock login - hardcoded for now for testing purposes
    this.userSvc.login("sblessing", "login")
      .subscribe(users => {
        if(users.length > 0) {
			this.user = users[0];
            this.sysSvc.data.user.instance = this.user;
            this.sysSvc.data.user.loggedIn = true;
            console.log("SysSvc:", this.sysSvc.debug);
            
        }
    })
  }     
      
  }

