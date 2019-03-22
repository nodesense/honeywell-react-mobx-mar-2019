// Checkout.tsx
import React from 'react';

interface CheckoutProps {
}

interface CheckoutState {
    fullName: string;
    state: string;
}

type StateKeys = keyof CheckoutState;


class Checkout extends React.Component<CheckoutProps, CheckoutState> {
    // FIXME
    fullNameElement!: HTMLElement; // HTMLElement
    pElem: any;

    private myRef = React.createRef<HTMLInputElement>()


    constructor(props: CheckoutProps) {
        super(props);

        this.state = {
            fullName: '',
            state: ''
        }
    }

    dynSetState = <T extends string> (key: StateKeys, value: string) => {
        this.setState({
          [key]: value
        } as Pick<CheckoutState, keyof CheckoutState>)
      }

    updateState = <T extends string>(key: keyof CheckoutState, value: T) => (
        prevState: CheckoutState
      ): CheckoutState => ({
        ...prevState,
        [key]: value
      })

    // FIXME
    onValueChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
        //e - event object
        // e.target -- DOM Element
        console.log(e.currentTarget.name, e.currentTarget.value);

        const fieldName:StateKeys =  e.currentTarget.name as StateKeys;

        this.dynSetState(fieldName, e.currentTarget.value);

        // //FIXME
        // let newFields: any =  {
        //     [fieldName] : e.currentTarget.value
        // };

        // this.setState({
        //     [ e.currentTarget.name]:  e.currentTarget.value
        // });
    }

    componentDidMount() {
         // ref can be accessible here
         // ref ? real dom reference
        // this.fullNameElement.focus();
         this.pElem.textContent = 'from did mount';

         const node = this.myRef.current
         node!.focus();
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

                        ref={ this.myRef }
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