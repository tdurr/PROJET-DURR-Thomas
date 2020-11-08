export class Product { 

    public id : number;    
    public name : string;    
    public price : number;   
    public brand : string;   
    public category : string;
    public hp : number;
    public torque : number;   
    public image : string;  
    
    constructor (id : number, name : string, price : number, brand : string, category : string, hp : number, torque : number, image : string) {      
      this.id = id;      
      this.name = name;      
      this.price = price;     
      this.brand = brand; 
      this.category = category;   
      this.hp = hp;
      this.torque = torque;    
      this.image = image;
    }  
  } 