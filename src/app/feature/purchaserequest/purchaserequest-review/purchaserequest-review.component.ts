import { Component, OnInit } from '@angular/core';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {PurchaseRequestService} from '../../../service/purchaserequest.service';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';
import {SystemService} from '../../../service/system.service';
import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})

export class PurchaseRequestReviewComponent implements OnInit {

    title: string = 'PurchaseRequestReview';
    purchaserequests: PurchaseRequest[]=[];
    sortBy: string = "Id";
    authenticatedUser: User;
    
    
  constructor(private prSvc: PurchaseRequestService,
              private sysSvc: SystemService) { }
  
      //Service connects to the back end purchaserequest table in Eclipse/MySQL
     ngOnInit() {
    this.authenticatedUser = this.sysSvc.data.user.instance;
    console.log("userid = "+this.authenticatedUser.Id);
    this.prSvc.listForReview(this.authenticatedUser.Id).subscribe(prs =>  {
  		this.purchaserequests = prs;
        //this.populateUserName();
        console.log(prs);
  	 });
    }
    
//  populateUserName(): void {
//    for (let pr of this.purchaserequests) {
//      pr.User=pr.User.UserName;
//    }
//  }
  
  setSortBy(column: string): void {
    this.sortBy = column;
  }
}
