import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {PurchaseRequestLineItemService} from '../../../service/purchaserequestlineitem.service';

import {PurchaseRequest} from '../../../model/purchaserequest';
import {PurchaseRequestService} from '../../../service/purchaserequest.service';

import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';


@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})

export class PurchaseRequestLineItemEditComponent implements OnInit {
    title: string = 'PurchaseRequestLineItem Edit';
    id: string;
    resp: any;
    purchaserequestlineitem: PurchaseRequestLineItem;
    
    purchaserequests: PurchaseRequest[];
    products: Product[];
    
    
  constructor(  private prliSvc: PurchaseRequestLineItemService,
                private productSvc: ProductService,
                private prSvc: PurchaseRequestService,
                private router: Router,
                private route: ActivatedRoute) { 
  }

  ngOnInit() {
      this.route.params.subscribe(parms=> this.id=parms['id']);
      this.prSvc.list().subscribe(purchaserequests => this.purchaserequests = purchaserequests);
      this.productSvc.list().subscribe(products => this.products = products);
      this.prliSvc.get(this.id)
      .subscribe(purchaserequestlineitems=>{
          this.purchaserequestlineitem=purchaserequestlineitems.length>0? purchaserequestlineitems[0]:null;
          console.log(this.purchaserequestlineitem);
      })
  }
change(){
    console.log(this.purchaserequestlineitem);
    this.prliSvc.change(this.purchaserequestlineitem)
    .subscribe(resp=> {
        this.resp=resp;
        console.log("PurchaseRequestLineItem-Change:", this.resp);
        this.router.navigate(['/purchaserequestlineitem/list']);
    })
}
    
    //comparing the back end request number to the front end
//    compareFn(v1: number, v2:number): boolean{
//        return v1===v2;
//    }
    
}
