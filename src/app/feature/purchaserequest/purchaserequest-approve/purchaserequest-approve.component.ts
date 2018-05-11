import {Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {PurchaseRequestService} from '../../../service/purchaserequest.service';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';


@Component({
  selector: 'app-purchaserequest-approve',
  templateUrl: './purchaserequest-approve.component.html',
  styleUrls: ['./purchaserequest-approve.component.css']
})
export class PurchaseRequestApproveComponent implements OnInit {
title: string = 'PurchaseRequest Approve/Reject';
  id: string;
  prliId: string = '0';
  purchaserequest: PurchaseRequest;
  lines: PurchaseRequestLineItem[];
  resp;
  reasonForRejection: string = "";
  
  constructor(private prSvc: PurchaseRequestService,
  		    private prliSvc: PurchaseRequestLineItemService,
  		    private router: Router,
  		    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
  	this.prSvc.get(this.id)
  		.subscribe(purchaserequests => {
        this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
      }
    );
    
  	this.prliSvc.listByPR(this.id)
  		.subscribe(prlis => {
        this.lines = prlis;
      }
    );
  }
  
  approve() {
    this.prSvc.approve(this.purchaserequest)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequest/review");
      });
  }
  
  reject() {
    console.log("reason for rejection = "+this.reasonForRejection);
    this.purchaserequest.ReasonForRejection = this.reasonForRejection;
    this.prSvc.reject(this.purchaserequest)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequest/review");
      });
  }

}