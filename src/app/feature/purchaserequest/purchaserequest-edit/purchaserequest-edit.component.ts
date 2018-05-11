import { Component, OnInit } from '@angular/core';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {PurchaseRequestService} from '../../../service/purchaserequest.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {
title: string = 'PurchaseRequest Edit'
    id: string;
    resp: any;
    purchaserequest:PurchaseRequest;

  constructor(  private prSvc: PurchaseRequestService,
                private router: Router,
                private route: ActivatedRoute) { 
  }

  ngOnInit() {
      console.log("a");
      this.route.params.subscribe(parms=> this.id=parms['id']);
      console.log("id="+this.id);
      this.prSvc.get(this.id)
      .subscribe(requests=>{
          console.log("b");
          this.purchaserequest=requests.length>0? requests[0]:null;
          console.log(this.purchaserequest);
      })
  }

Change(){
    console.log(this.purchaserequest);
    this.prSvc.change(this.purchaserequest)
    .subscribe(resp=> {
        this.resp=resp;
        console.log("PurchaseRequest-Change:", this.resp);
        this.router.navigate(['/purchaserequest/list']);
    });
}
}