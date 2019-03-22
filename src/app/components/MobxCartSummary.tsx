// MobxCartSummary.tsx
import React from 'react';
import { CartState } from '../state/CartState';
import { inject, observer } from 'mobx-react';

// from parent
interface CartSummaryProps {
    cart? : CartState
}

// state, local
interface CartSummaryState {
     
}

// PureComponent inheriting from Component
// PureComponent implements shouldComponentUpdate
//   it compares nextProps with currentProps
//   it compare nextState with currentState

@inject('cart')
@observer
class MobxCartSummary extends React.Component<CartSummaryProps, CartSummaryState> {
    constructor(props: CartSummaryProps) {
        super(props);
         
    }
 
    render() {
        console.log('CartSummary render');

        const cart = this.props.cart;

        // const discount = cart!.discount;
        // const grandTotal = cart!.grandTotal;

        return (
            <div>
                <h2>Cart Summary</h2>
                <p> Amount : {cart!.amount} </p>
                <p> Count : {cart!.count} </p>
                <p> Discount : {cart!.discount} </p>
                <p> grandTotal : {cart!.grandTotal} </p>
            </div>
        )
    }
}

export default MobxCartSummary;