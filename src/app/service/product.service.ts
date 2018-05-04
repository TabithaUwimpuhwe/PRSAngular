import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const url: string = 'http://localhost:8080/Products/'

@Injectable()
export class ProductService { //p131
 
//add the RESTFULL method (add, remove, edit, delete) as in the Java Controller
list(): Observable <Product[]> { //p132
     return this.http.get(url+"List") as Observable <Product[]>;     
    }
    
create(product: Product): Observable <any> {
    console.log("productsvc.create...")
    return this.http.post(url+"Add", product) as Observable <any>;
}
    
get(id): Observable<Product[]> {
    return this.http.get(url+"Get?id="+id) as Observable<Product[]>;
  }
  
remove(id): Observable<any> {
      return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }
  
change(product: Product): Observable<any> {
		return this.http.post(url+"Change", product) as Observable<any>;
  }
  
  constructor(private http: HttpClient) { } //p133

}
