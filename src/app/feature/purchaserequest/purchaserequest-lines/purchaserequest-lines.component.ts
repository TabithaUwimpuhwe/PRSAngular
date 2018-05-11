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


constructor(private prSvc: PurchaseRequestService,
  		    private prliSvc: PurchaseRequestLineItemService,
  		    private router: Router,
  		    private route: ActivatedRoute) { }
    
ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
    this.route.params.subscribe(parms => this.prliId = parms['del']);
  	this.prSvc.get(this.id)
  		.subscribe(purchaserequests => {
        this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
        
    console.log('PR:');
    console.log(this.purchaserequest);
      }
    );
       // if 'del' param is present, delete the prli by the id passed into 'del' param
//    if (this.prliId!='0') {
//      console.log("calling remove...");
//      this.remove();
//    }
    
    
      
    console.log('Calling PR LineItems...');
  	this.prliSvc.listByPR(this.id)
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
    
	remove(): void {
    this.prliSvc.remove(this.prliId)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaserequest/lines/"+this.id);
      });
  }
  
      submitForReview() {
    this.prSvc.submitForReview(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        console.log("PurchaseRequest-Lines-SubmitForReview:", this.resp);
        this.router.navigate(['/purchaserequest/list']);
      });

  }

  doThis(id: number): void {
    console.log("doThis called... #="+id);
  }

}