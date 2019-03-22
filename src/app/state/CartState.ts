import { CartItem } from './../models/CartItem';
// state/CartState.ts

import {observable} from 'mobx';

class CartState {
    @observable cartItems: CartItem[] = [];

    addItem(item: CartItem) {
        // mutable
        this.cartItems.push(item);
    }

    removeItem(id: number) {
    }

    updateItem(id: number, qty: number){
    }

    empty() {
        
    }
}

// exporting CartState instance
export default new CartState();