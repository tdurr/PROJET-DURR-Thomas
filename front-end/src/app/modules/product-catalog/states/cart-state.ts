import { CartStateModel } from './cart-state-model';
import { CartItem } from '../modeles/cart-item';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddToCart, RemoveFromCart, EmptyCart, LessQuantity } from '../actions/cart-action';

@State<CartStateModel>({
    name: 'cart',
    defaults: {
        items: []
    }
})

export class CartState {

    @Selector()
    static getNbOfItems(state: CartStateModel): number {
        let cartSize: number = 0;
        state.items.forEach(i => {
            cartSize = cartSize + i.quantity;
        });
        return cartSize;
    }

    @Selector()
    static getCartValue(state: CartStateModel): number {
        let worth: number = 0;
        state.items.forEach(i => {
            worth = worth + (i.quantity * i.price)
        });
        return worth;
    }

    @Action(AddToCart)
    add( { getState, patchState }: StateContext<CartStateModel>, { payload }: AddToCart ): void {
        const state = getState();
        const index = state.items.findIndex((i: CartItem) => i.name === payload.name);

        if (index === -1) {
            const cartItem = new CartItem(
                payload.id, payload.name, payload.price, 
                payload.brand, payload.category, payload.hp, 
                payload.torque, payload.image);
            cartItem.quantity = 1;

            patchState( { items: [...state.items, cartItem] } );

        } else {
            const refreshedCart = state.items;
            refreshedCart[index].quantity++;

            patchState( { items: refreshedCart } );
        }
    }

    @Action(LessQuantity)
    removeOne( { getState, patchState }: StateContext<CartStateModel>, { payload }: LessQuantity ): void {
        const state = getState();
        const index = state.items.findIndex((i: CartItem) => i.name === payload.name);

        if (index !== -1) {
            const refreshedCart = state.items;
            refreshedCart[index].quantity--;

            if (refreshedCart[index].quantity === 0) {
                refreshedCart.splice(index, 1);
            }

            patchState( { items: refreshedCart } );
        }
    }

    @Action(RemoveFromCart)
    remove( { getState, patchState }: StateContext<CartStateModel>, { payload }: RemoveFromCart ): void {
        const state = getState();
        const index = state.items.findIndex((i: CartItem) => i.name === payload.name);

        if (index !== -1) {
            const refreshedCart = state.items;
            refreshedCart.splice(index, 1);

            patchState( { items: refreshedCart } );
        }
    }

    @Action(EmptyCart)
    empty( { getState, patchState }: StateContext<CartStateModel> ): void {
        const state = getState();

        patchState( { items: [] } );
    }
}