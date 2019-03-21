// Cart.tsx
import React from 'react';
import { CartItem } from '../models/CartItem';

import CartList from './CartList';
import CartSummary from './CartSummary';

interface CartProps {
}

interface CartState {
    items: CartItem[];
    amount: number;
    count: number;
    flag: boolean;
}

class Cart extends React.Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);

        // initialize state 
        this.state = {
            items: [  new CartItem(1, "P1", 100, 1) ],
            amount: 0,
            count: 0,
            flag: true
        }
    }

    addItem = () => {
        const id = Math.ceil(Math.random() * 100000);

        const item = new CartItem(id, 
                                  `Product ${id}`,
                                  Math.ceil(Math.random() * 100),
                                  1
                                  );

        //TODO

    }

    removeItem = (id: number) => {
        //TODO
    }

    updateItem = (id: number, qty: number) => {
        //TODO
    }

    empty = () => {
        //TODO
    }

    setFlag = () => {
        this.setState({
            flag: true
        })
    }

    render() {
        console.log('Cart Render');

        return (
            <div>
                <h2>Cart</h2>

                <CartList />

                <CartSummary />
            </div>
        )
    }
}
---
