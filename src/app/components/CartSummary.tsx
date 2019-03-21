// CartSummary.tsx
import React from 'react';

// from parent
interface CartSummaryProps {
    amount: number;
    count: number;
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


class CartSummary extends React.PureComponent<CartSummaryProps, CartSummaryState> {
    constructor(props: CartSummaryProps) {
        super(props);
        this.state = {
            // to be computed
            discount: 0,
            grandTotal: 0
        }
    }

    static getDerivedStateFromProps(props: CartSummaryProps, state: CartSummaryState) {
        let discount = 0;

        if (props.count > 4) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount/100.0 * discount);

        return {
            discount,
            grandTotal
        }
    }

    render() {
        console.log('CartSummary render');
        return (
            <div>
                <h2>Cart Summary</h2>
                <p> Amount : {this.props.amount} </p>
                <p> Count : {this.props.count} </p>
                <p> Discount : {this.state.discount} </p>
                <p> grandTotal : {this.state.grandTotal} </p>
            </div>
        )
    }
}

export default CartSummary;