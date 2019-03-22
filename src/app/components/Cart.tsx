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
        const items = [...this.state.items, item];
        
        this.setState({
            items
        });

        // calculate the result
    }

    removeItem = (id: number) => {
       const items = this.state.items.filter(item => item.id !== id);
       this.setState({
           items
       })


        // calculate the result
    }

    updateItem = (id: number, qty: number) => {
        //TODO
        // clone the list
        // clone the item that needs an update
        const items = this.state.items.map (item => {
            if (item.id !== id) {
                return item;
            }

            // clone, the qty to be changed
            return {...item, qty}
        });

        this.setState({
            items
        })
    }

    empty = () => {
        //TODO
        const items: CartItem[] = []; // new array
        this.setState({
            items
        })
    }

    setFlag = () => {
        this.setState({
            flag: true
        })
    }

    // new lifecycle method
    // called on creation and update cycle
    // before calling render
    // return new state
    static getDerivedStateFromProps(props: CartProps, state: CartState) {
        console.log('getDerivedStateFromProps called')
         let amount = 0;
         let count = 0;

         for (const item of state.items) {
             amount += item.price * item.qty;
             count += item.qty
         }

         return {
             amount,
             count
         }
    }
 

    render() {
        console.log('Cart Render');

        return (
            <div>
                <h2>Cart</h2>

                {/* 
                    pass this as props is bad
                    passing complete state as props is bad
                    pass needed properties -- good
                */}

                <button onClick={this.addItem}>
                    Add Item
                </button>

                <button onClick={this.empty}>
                    Empty Cart
                </button>


                <button onClick={this.setFlag}>
                    set Flag
                </button>



                <CartList items={this.state.items}
                          updateItem = {this.updateItem}
                          removeItem= {this.removeItem}      
                />

                <CartSummary amount={this.state.amount}
                             count={this.state.count} />
            </div>
        )
    }
}

export default Cart;