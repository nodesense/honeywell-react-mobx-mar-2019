// models/Product.ts
import {observable} from 'mobx';

export class Product {
    @observable id: number;
    @observable public name: string; 
    @observable public price: number; 
    
    constructor(id: number,
                name: string, 
                price: number) {
                    this.id = id;
                    this.name = name;
                    this.price = price;
    }
}