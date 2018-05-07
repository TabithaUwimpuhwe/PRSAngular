import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {PurchaseRequestLineItemService} from '../../../service/purchaserequestlineitem.service';

import {PurchaseRequest} from '../../../model/purchaserequest';
import {PurchaseRequestService} from '../../../service/purchaserequest.service';

import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';

import { SystemService } from '../../../service/system.service';
import {VendorService} from '../../../service/vendor.service';

@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})

export class PurchaseRequestLineItemCreateComponent implements OnInit {
    title: string ="PurchaseRequestlineItem Create"; 
   
    prid: number;
    resp: any;
    
    purchaserequest: PurchaseRequest;
    product: Product;
    
    prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, this.purchaserequest, this.product, 0);
    products: Product[];
   
    compareFn(u1: Product, u2: Product) {
      return u1 && u2 ? u1.Id == u2.Id : u1 == u2;}
    
  constructor(  private prliSvc: PurchaseRequestLineItemService,
                private purchaserequestSvc: PurchaseRequestService, 
                private productSvc: ProductService,
                private SysSvc: SystemService,
                private router: Router,
                private route: ActivatedRoute) { 
  }

  ngOnInit() {
      this.route.params.subscribe(parms=> {this.prid=parms['id'];
      this.purchaserequestSvc.get(this.prid).subscribe(purchaserequests => {this.purchaserequest = purchaserequests.length>0? purchaserequests[0]:null;});
      });
      
      this.productSvc.list().subscribe(products => 
                                       {this.products = products;
      })
  }
Create(){
    
    this.prli.PurchaseRequest = this.purchaserequest;
    	console.log('prli service create...');
	console.log( this.prli);

    this.prliSvc.create(this.prli)
    .subscribe(resp=> {
        this.resp=resp;
        console.log("PurchaseRequestLineItem-Create:", this.resp);
        // come back to this
//        this.router.navigate(['/purchaserequestlineitem/list']);
      this.router.navigateByUrl('/purchaserequest/detail/'+this.prid);  
    })
}
}