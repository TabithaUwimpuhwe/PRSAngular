import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';
import {Vendor} from '../../../model/vendor';
import {VendorService} from '../../../service/vendor.service';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
    
    title: string ="Product Create";
    product: Product = new Product();
    resp: any;
    
    vendors: Vendor [];
    
    create (){
        console.log('create a Product...');
        console.log(this.product);
        this.productSvc.create(this.product)
        .subscribe(resp => {
            this.resp = resp;
            console.log("Product-Create:", this.resp);
            this.router.navigate(['/product/list']);
        });
    }
    
  constructor(private productSvc: ProductService,
               private router: Router,
              private vendorSvc: VendorService) { }

  ngOnInit() {
      this.vendorSvc.list()
      .subscribe(vendors => this.vendors=vendors)
      
  }

}
