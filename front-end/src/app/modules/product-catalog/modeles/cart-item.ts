import { Product } from './product';

export class CartItem  extends Product {
    
    public quantity : number;

    constructor(id : number, name : string, price : number, brand : string, category : string, hp : number, torque : number, image : string) {
        super(id, name, price, brand, category, hp, torque, image);
        this.quantity = 0;
    }
}
