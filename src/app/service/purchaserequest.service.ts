import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PurchaseRequest} from '../model/purchaserequest';
import {User} from '../model/user';

const url: string = 'http://localhost:8080/PurchaseRequests/'

@Injectable()
export class PurchaseRequestService { //p131
 
//add the RESTFULL method (add, remove, edit, delete) as in the Java Controller
list(): Observable <PurchaseRequest[]> { //p132
     return this.http.get(url+"List") as Observable <PurchaseRequest[]>;     
    }

listForReview(id): Observable<PurchaseRequest[]> {
      return this.http.get(url+"ListReview?id="+id + "&status=review") as Observable<PurchaseRequest[]>;
  }
    
create(purchaseRequest: PurchaseRequest): Observable <any> {
    console.log("purchaserequestsvc.create...")
    return this.http.post(url+"Add", purchaseRequest) as Observable <any>;
    }
    
get(id): Observable<PurchaseRequest[]> {
    console.log("get pr for id="+id);
    return this.http.get(url+"Get?id="+id) as Observable<PurchaseRequest[]>;
  }
    
 submitForReview(purchaserequest: PurchaseRequest): Observable<any> {
        return this.http.post(url+"SubmitForReview", purchaserequest) as Observable<any>;
    }

remove(id): Observable<any> {
      return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }
  
change(purchaserequest: PurchaseRequest): Observable<any> {
		return this.http.post(url+"Change", purchaserequest) as Observable<any>;
  }
    
     approve(purchaseRequest: PurchaseRequest): Observable<any> {
      return this.http.post(url+"ApprovePR", purchaseRequest) as Observable<any>;
  }
  
  reject(purchaseRequest: PurchaseRequest): Observable<any> {
      return this.http.post(url+"RejectPR", purchaseRequest) as Observable<any>;
  }
  
  constructor(private http: HttpClient) { } //p133

}
