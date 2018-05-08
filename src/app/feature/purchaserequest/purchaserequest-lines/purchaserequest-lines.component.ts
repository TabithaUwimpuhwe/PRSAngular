import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';

import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';

import { Product } from '../../../model/product';
//import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-purchaserequest-lines',
  templateUrl: './purchaserequest-lines.component.html',
  styleUrls: ['./purchaserequest-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

  title: string = 'PurchaseRequestLineItems';
	id: string;
    prliId: string = '0';
	purchaserequest: PurchaseRequest;
	lines: PurchaseRequestLineItem[];
	resp;

	remove() {
    this.purchaserequestSvc.remove(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        console.log("PurchaseRequest-Lines-Remove:", this.resp);
        this.router.navigate(['/purchaserequest/list']);
      });

	}

  submitForReview() {
    this.purchaserequestSvc.submitForReview(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        console.log("PurchaseRequest-Lines-SubmitForReview:", this.resp);
        this.router.navigate(['/purchaserequest/list']);
      });

  }

	constructor(      private purchaserequestSvc: PurchaseRequestService,
  		private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
  		private router: Router,
  		private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	this.purchaserequestSvc.get(this.id)
  		.subscribe(purchaserequests => {
        this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
        console.log('PR:');
        console.log(this.purchaserequest);
      }
    );
    console.log('Calling PR LineItems...');
  	this.PurchaseRequestLineItemSvc.listByPR(this.id)
  		.subscribe(prlis => {
        this.lines = prlis;
        // set temp variable to build everything then set that to lines
        //this.addProduct(prlis);
        console.log('The lines after product added...');
        console.log(this.lines);
        console.log(this.lines.length);
      }
    );
  }


}