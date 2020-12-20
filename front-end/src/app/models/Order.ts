import { OrderLine } from './OrderLine';

export class Order { 

    num : number;
    amount : number;    
    date : string;    
    loginClient : string;   
    lignes : OrderLine[];   

    
    constructor (num: number, amount : number, date : string, loginClient : string, lignes : OrderLine[])    {      
      this.num = num;
      this.amount = amount;         
      this.date = date;     
      this.loginClient = loginClient; 
      this.lignes = lignes;
    }  
  } 