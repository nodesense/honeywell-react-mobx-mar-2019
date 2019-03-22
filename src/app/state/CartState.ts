// state/CartState.ts
import { CartItem } from './../models/CartItem';
import {observable, computed, action} from 'mobx';
import { Product } from '../models/Product';
import Cart from '../components/Cart';

export class CartState {
    @observable items: CartItem[] = [   ];

    @computed get amount() {
        let totalAmount = 0;
        for (const item of this.items) {
            totalAmount += item.qty * item.price;
        }

        return totalAmount;
    }

    @computed get count() {
        let totalItems = 0;
        for (let item of this.items) {
            totalItems += item.qty;
        }

        return totalItems;
    }

    @computed get discount() {
        if (this.count > 4) {
            return 10;
        }

        return 0;
    }

    @computed get grandTotal() {
        let total = this.amount - (this.amount/100.0 * this.discount);

        return total;
    }
 
    addItem(item: CartItem) {
        // mutable
        console.log('adding item', item);
        this.items.push(item);
    }

    removeItem(id: number) {
        let index = this
        .items
        .findIndex ( item => item.id == id);

        this.items.splice(index, 1);
    }

    updateItem(id: number, qty: number){
        let index = this
        .items
        .findIndex ( item => item.id == id);

        // TODO: boundary condition
        let item = this.items[index]; 
        item.qty = qty;
    }

    empty() {
        this.items = [];
    }

    addProductToCart(product: Product) {
        const item = new CartItem(product.id, product.name, product.price, 1);
        this.addItem(item);
    }
}

// exporting CartState instance
// or create instance in index.tsx
//export default new CartState();