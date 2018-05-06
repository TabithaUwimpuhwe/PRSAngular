import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {PurchaseRequestLineItemService} from '../../../service/purchaserequestlineitem.service';

@Component({
  selector: 'app-purchaserequestlineitem-detail',
  templateUrl: './purchaserequestlineitem-detail.component.html',
  styleUrls: ['./purchaserequestlineitem-detail.component.css']
})
export class PurchaseRequestLineItemDetailComponent implements OnInit {

  title: string = "PurchaseRequestLineItem Detail!!!";
    prli: PurchaseRequestLineItem;
    
  constructor(private prliSvc: PurchaseRequestLineItemService,
               private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
      console.log(" prli detail comp - ngOnInit()");
      this.route.params
      .subscribe(parms=> {
          let id = parms["id"];
          this.getPurchaseRequestLineItemById(id);
      });
  }
    getPurchaseRequestLineItemById(id) {
        console.log("getting prli");
    this.prliSvc.get(id)
    .subscribe(prlis=> {
        this.prli=prlis.length>0? prlis[0]: null;
        console.log("prli:", this.prli);
    });
}

    remove(): void {
        this.prliSvc.remove(this.prli.Id)
        .subscribe(res=> {
        console.log(res);
        this.router.navigateByUrl("/purchaserequestlineitem/list")
    })
  }

}
