import { Component, OnInit } from '@angular/core';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {Router} from '@angular/router';
import {PurchaseRequestService} from '../../../service/purchaserequest.service';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})

export class PurchaseRequestCreateComponent implements OnInit {

    title: string ="PurchaseRequest Create";
    pr: PurchaseRequest = new PurchaseRequest();
//empty arg instead of (0, null, '', '', null, '', '', null, null, '') bc it is already pre-defined in the constructor model/pr.ts
    resp: any;
    
    create (){
        console.log('create a Request...');
        console.log(this.pr);
        this.prSvc.create(this.pr)
        .subscribe(resp => {
            this.resp = resp;
            console.log("PurchaseRequest-Create:", this.resp);
            this.router.navigate(['/purchaserequest/list']);
        });
    }
    
  constructor(private prSvc: PurchaseRequestService,
            private router: Router,
            private userSvc: UserService) { }

  ngOnInit() {
  }

}
