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
    pr:PurchaseRequest;

  constructor(private prSvc: PurchaseRequestService,
               private router: Router,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
      this.route.params.subscribe(parms=> this.id=parms['id']);
      this.prSvc.get(this.id)
      .subscribe(requests=>{
          this.pr=requests.length>0? requests[0]:null;
          console.log(this.pr);
      })
  }

}
