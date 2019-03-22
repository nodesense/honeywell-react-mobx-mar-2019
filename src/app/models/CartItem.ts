// CartItem.ts
import {observable} from 'mobx';

export class CartItem {
    @observable id: number;
    @observable public name: string; 
    @observable public price: number; 
    @observable public qty: number;
    
    constructor(id: number,
                name: string, 
                price: number, 
                qty: number) {
                    this.id = id;
                    this.name = name;
                    this.price = price;
                    this.qty = qty;
    }
}