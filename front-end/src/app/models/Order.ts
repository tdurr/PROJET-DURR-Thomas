import { OrderLine } from './OrderLine';

export class Order { 

    id : number;
    amount : number;    
    date : string;    
    loginClient : string;   
    lignes : OrderLine[];   

    
    constructor (id: number, amount : number, date : string, loginClient : string, lignes : OrderLine[])    {      
      this.id = id;
      this.amount = amount;         
      this.date = date;     
      this.loginClient = loginClient; 
      this.lignes = lignes;
    }  
  } 