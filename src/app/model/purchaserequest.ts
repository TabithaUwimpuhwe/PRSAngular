import { User } from './user';

export class PurchaseRequest {
    Id: number;
    User: User;
    UserName: string;
    Description: string;
    Justification: string;
    DateNeeded: Date;
    DeliveryMode: string;
    Status: string;
    Total: number;
    SubmittedDate: Date;
    ReasonForRejection: string;
    

    constructor( Id: number=0, user: User = null, dsc: string = '', jst: string = '',  dneeded: Date = null, dlvmode: string = '', status: string='', total: number = 0, dsubmitted: Date = null, rfrejection: string=''){
        this.Id=Id;
        this.User= user;
		this.Description = dsc;
		this.Justification = jst;
		this.DateNeeded = dneeded;
		this.DeliveryMode = dlvmode;
		this.Status = status;
        this.Total=total;
        this.SubmittedDate=dsubmitted;
        this.ReasonForRejection=rfrejection;
	}

    about(): string{
        return `PurchaseRequest: id=${this.Id}, user=${this.User},  description=${this.Description}, justification=${this.Justification}, dateNeeded=${this.DateNeeded}, deliveryMode=${this.DeliveryMode}, status=${this.Status}, total=${this.Total}, submittedDate=${this.SubmittedDate}, reasonForRejection=${this.ReasonForRejection}`}
}


