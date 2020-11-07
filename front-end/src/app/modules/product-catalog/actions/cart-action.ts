import { Product } from './../modeles/product';

export class AddToCart {
    static readonly type = '[Cart] Add';
    constructor(public payload: Product) {}
}

export class RemoveFromCart {
    static readonly type = '[Cart] Remove';
    constructor(public payload: Product) {}
}

export class EmptyCart {
    static readonly type = '[Cart] Empty';
    constructor() {}
}

export class LessQuantity {
    static readonly type = '[Cart] LessQuantity';
    constructor(public payload: Product) {}
}