import { Vendor } from './vendor';

export class Product {
    Id: number;
    Vendor: Vendor;
    VendorPartNumber: string;
    Name: string;
    Price: number;
    Unit: string;
    PhotoPath: string;
    

    constructor( Id: number=0, vendor: Vendor = null, vpn: string = '', Name: string = '', price: number = null, 
                  unit: string = '', ph: string = ''){
    
        this.Vendor= vendor;
		this.VendorPartNumber = vpn;
		this.Name = name;
		this.Price = price;
		this.Unit = unit;
		this.PhotoPath = ph;
	}

    about(): string{
        return `Product: id=${this.Id}, vendor=${this.Vendor},  vendorPartNumber=${this.VendorPartNumber}, name=${this.Name}, price=${this.Price}, unit=${this.Unit}, photoPath=${this.PhotoPath}` 
    }
}

