import { Injectable } from '@angular/core';
import {PurchaseRequestLineItem} from '../model/purchaserequestlineitem';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const url: string = 'http://localhost:8080/PurchaseRequestLineItems/'

@Injectable()
export class PurchaseRequestLineItemService { //p131
 
//add the RESTFULL method (add, remove, edit, delete) as in the Java Controller
list(): Observable <PurchaseRequestLineItem[]> { //p132
     return this.http.get(url+"List") as Observable <PurchaseRequestLineItem[]>;     
    }
    
create(purchaserequestlineitem: PurchaseRequestLineItem): Observable <any> {
    console.log("purchaserequestlineitemsvc.create...")
    return this.http.post(url+"Add", purchaserequestlineitem) as Observable <any>;
}
 listByPR(id): Observable<PurchaseRequestLineItem[]> {
        console.log('Calling url: '+url+'LinesForPR?id='+id);
        return this.http.get(url+"LinesForPR?id="+id) as Observable<PurchaseRequestLineItem[]>;

    }
    
get(id): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url+"Get?id="+id) as Observable<PurchaseRequestLineItem[]>;
  }
  
remove(id): Observable<any> {
      return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }
  
change(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
		return this.http.post(url+"Change", purchaserequestlineitem) as Observable<any>;
  }
  
  constructor(private http: HttpClient) { } //p133

}
