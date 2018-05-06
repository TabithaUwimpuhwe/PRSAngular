import { Component, OnInit } from '@angular/core';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {ActivatedRoute, Router} from '@angular/router';
import {PurchaseRequestService} from '../../../service/purchaserequest.service';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

 title: string = "PurchaseRequest Detail";
    purchaserequest: PurchaseRequest;
    
  constructor(private prSvc: PurchaseRequestService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
      
      this.route.params
      .subscribe(parms=> {
          let id = parms["id"];
          this.getPurchaseRequestById(id);
      });
  }
    getPurchaseRequestById(id) {
    this.prSvc.get(id)
    .subscribe(requests=> {
        this.purchaserequest=requests.length>0? requests[0]: null;
        console.log("request:", this.purchaserequest);
    });
}

    remove(): void {
        this.prSvc.remove(this.purchaserequest.Id)
        .subscribe(res=> {
        console.log(res);
        this.router.navigateByUrl("/purchaserequest/list")
    })
  }

}
