export class Vendor {
    Id: number;
    Code: string;
    Name: string;
    Address: string;
    State: string;
    Zip: string;
    PhoneNumber: string;
    Email: string;
    Preapproved: boolean
    
  constructor( Id: number=0, code: string, name: string, address: string, state: string, zip: string, phone: string, email: string, papv: boolean ){
        
        this.Code =code;
        this.Name=name  
        this.Address=address;
        this.State=state;
        this.Zip=zip;
        this.PhoneNumber=phone;
        this.Email=email;
        this.Preapproved=papv;  
    }

    about(): string{
        return `Vendor: id=${this.Id}, code=${this.Code},  name=${this.Name}, address=${this.Address}, state=${this.State}, 
        zip=${this.Zip};
        phonenumber=${this.PhoneNumber}, 
        email=${this.Email},
        isRPreapproved=${this.Preapproved? "Yes": "No" }` }
}
