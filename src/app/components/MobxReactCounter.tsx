// MobxReactCounter.tsx
import React from 'react';
import {observer, inject} from 'mobx-react';

// counter shall be injected into component as props @inject
// import counter from '../state/CounterState';

interface Counter {
    value: number;
    incr: Function;
}

interface CounterProps {
     counter?: Counter;
}

interface CounterState {
   
}

//this.props is a keyword
// not for production

// observer is a decorator
// it create a componenent that wraps your component
// it runs autorun, also clean subscribption

// @inject shall insert a props.counter 
// @inject receive state from Provider


@inject('counter')
@observer
class MobxReactCounter extends React.Component<CounterProps, CounterState> {
    
    constructor(props: CounterProps) {
        super(props); // MUST
        console.log('Counter obj created', props);
    }
 
    increment = () => {
        this.props.counter!.incr();
    }


    render() {
        console.log('MobxReactCounter render called');

        let counter = this.props.counter;
        
        return (
            <div>
                <h4>MobxReactCounter Counter</h4>
               
                 <p> Counter {counter!.value} </p>
                
                <button onClick={this.increment}>
                    Incr
                </button> 

            </div>
        )
    }
}

export default MobxReactCounter;