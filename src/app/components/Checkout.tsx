// Checkout.tsx
import React from 'react';

interface CheckoutProps {
}

interface CheckoutState {
    fullName: string;
    state: string;
}

class Checkout extends React.Component<CheckoutProps, CheckoutState> {
    // FIXME
    fullNameElement: any; // HTMLElement
    pElem: any;

    constructor(props: CheckoutProps) {
        super(props);

        this.state = {
            fullName: '',
            state: ''
        }
    }

    onValueChange = (e: any) => {
        //e - event object
        // e.target -- DOM Element
        console.log(e.target.name, e.target.value);

        const fieldName:string = e.target.name;

        //FIXME
        let newFields: any =  {
            [fieldName] : e.target.value
        };

        this.setState(newFields);
    }

    componentDidMount() {
         // ref can be accessible here
         // ref ? real dom reference
         this.fullNameElement.focus();
         this.pElem.textContent = 'from did mount';
    }

    render() {
        console.log('Checkout render ', this.state);
        return (
            <div>
                <h2>Checkout</h2>

                Full name

                <input name="fullName" 
                        type="text" 
                        value={this.state.fullName}
                        onChange={this.onValueChange}

                        ref={ (elem) => this.fullNameElement = elem  }
                        />

                <select name="state"
                        value={this.state.state}
                        onChange={this.onValueChange}
                        >
                    <option value="KA">Karnataka</option>    
                    <option value="DL">Delhi</option>    
                    <option value="TN">Tamilnadu</option>    
                </select>

                <p ref = { pElem => this.pElem = pElem }>
                    P1
                </p>
            </div>
        )
    }
}

export default Checkout;