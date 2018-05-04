import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../service/product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
    title: string = "Product Detail";
    Product: Product;
    
  constructor(private ProductSvc: ProductService,
               private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
      
      this.route.params
      .subscribe(parms=> {
          let id = parms["id"];
          this.getProductById(id);
      });
  }
    getProductById(id) {
    this.ProductSvc.get(id)
    .subscribe(Products=> {
        this.Product=Products.length>0? Products[0]: null;
        console.log("Product:", this.Product);
    });
}

    remove(): void {
        this.ProductSvc.remove(this.Product.Id)
        .subscribe(res=> {
        console.log(res);
        this.router.navigateByUrl("/Product/list")
    })
  }

}
