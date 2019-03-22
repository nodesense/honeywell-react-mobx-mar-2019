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
    discount: number;
    grandTotal: number;
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
        this.state = {
            // to be computed
            discount: 0,
            grandTotal: 0
        }
    }
 
    render() {
        console.log('CartSummary render');

        const cart = this.props.cart;

        return (
            <div>
                <h2>Cart Summary</h2>
                <p> Amount : {cart!.amount} </p>
                <p> Count : {cart!.count} </p>
                <p> Discount : {this.state.discount} </p>
                <p> grandTotal : {this.state.grandTotal} </p>
            </div>
        )
    }
}

export default MobxCartSummary;