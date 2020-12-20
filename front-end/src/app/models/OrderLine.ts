export class OrderLine { 

    productName : string;    
    quantity : number;    
    lineAmount : number;   
    
    constructor (productName : string, quantity : number, lineAmount : number)    {      
      this.productName = productName;         
      this.quantity = quantity;     
      this.lineAmount = lineAmount; 
    }  
  } 