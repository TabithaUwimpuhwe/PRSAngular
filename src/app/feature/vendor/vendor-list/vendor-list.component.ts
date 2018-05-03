import { Component, OnInit } from '@angular/core';
import {Vendor} from '../../../model/vendor';
import {VendorService} from '../../../service/vendor.service';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent implements OnInit {

    title: string = 'Vendor List';
    vendors: Vendor[]=[];
    
  constructor(private vendorSvc: VendorService) { }
 
  ngOnInit() {
       //connecting to the back end vendor table in Eclipse/MySQL
    this.vendorSvc.list().subscribe(vendorSvcList =>{ 
                        console.log(vendorSvcList);
                        this.vendors = vendorSvcList;
      })   
  }
}
