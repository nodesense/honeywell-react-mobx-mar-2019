// state/ProductState.ts

import { Product } from './../models/Product';
import { observable } from 'mobx';
 

export class ProductState {
    @observable products: Product[] = [];

    fetchProducts() {
        fetch('http://api.nodesense.ai/api/products')
        .then ( response => response.json () )
        .then ( products => {
            this.products = products;
        })
    }
}