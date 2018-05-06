import { Component, OnInit } from '@angular/core';
import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {PurchaseRequestLineItemService} from '../../../service/purchaserequestlineitem.service';

@Component({
  selector: 'app-purchaserequestlineitem-list',
  templateUrl: './purchaserequestlineitem-list.component.html',
  styleUrls: ['./purchaserequestlineitem-list.component.css']
})
export class PurchaseRequestLineItemListComponent implements OnInit {
 title: string = 'PurchaseRequestLineItem List';
    prlis: PurchaseRequestLineItem[];

  constructor(private prliSvc: PurchaseRequestLineItemService) { }

  ngOnInit() { //p136 populate list of products
     
    //connecting to the back end product table in Eclipse/MySQL
      
//    this.prliSvc.list().subscribe(prliSvcList =>{ 
//                        console.log(prliSvcList);
//                        this.prlis = prliSvcList;
      console.log('Getting list of prlis...');
        this.prliSvc.list().subscribe(prlis => {
  		this.prlis = prlis;
        console.log(prlis);
        
    });  
  }
}
