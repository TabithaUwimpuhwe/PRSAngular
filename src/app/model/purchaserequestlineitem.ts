import { PurchaseRequest } from './purchaserequest';
import { Product } from './product';

export class PurchaseRequestLineItem {
    Id: number;
    PurchaseRequest: PurchaseRequest;
    Product: Product;
    Quantity: number;


    constructor( Id: number=0, pr: PurchaseRequest = null, product: Product = null, quantity: number= null){
    
        this.PurchaseRequest= pr;
		this.Product = product;
		this.Quantity = quantity;
	}

    about(): string{
        return `PurchaseRequestLineItem: id=${this.Id}, purchaseRequest=${this.PurchaseRequest},  product=${this.Product}, quantity=${this.Quantity}` 
    }
}

