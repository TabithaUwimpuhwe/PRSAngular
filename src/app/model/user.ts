export class User {
    Id: number;
    UserName: string;
    Password: string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    Reviewer: boolean;
    Admin: boolean
    

    constructor( Id: number=0, uName: string, pwd: string, fName: string, lName: string, email: string, phone: string, rvw: boolean, adm: boolean ){
        
        this.UserName =uName;
        this.Password=pwd;  
        this.FirstName=fName;
        this.LastName=lName;
        this.Email=email;
        this.PhoneNumber=phone;
        this.Reviewer=rvw;
        this.Admin=adm;   
    }

    about(): string{
        return `User: id=${this.Id}, userName=${this.UserName},  password=${this.Password}, firstName=${this.FirstName}, lastName=${this.FirstName}, email=${this.Email}, phonenumber=${this.PhoneNumber}, isReviewer=${this.Reviewer? "Yes": "No" }, isAdmin?=${this.Admin? "Yes": "No"}` }
}

