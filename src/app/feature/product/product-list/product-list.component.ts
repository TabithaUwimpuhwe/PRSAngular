import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    
    title: string = 'Product List';
    products: Product[]=[];

  constructor(private productSvc: ProductService) { }

  ngOnInit() { //p136 populate list of products
     
    //connecting to the back end product table in Eclipse/MySQL
    this.productSvc.list().subscribe(productSvcList =>{ 
                        console.log(productSvcList);
                        this.products = productSvcList;
    });  
  }
}
