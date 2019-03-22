// MobxCounter.tsx
import React from 'react';
import {autorun} from 'mobx';

import counter from '../state/CounterState';


interface CounterProps {
     
}

interface CounterState {
   
}

//this.props is a keyword
// not for production

class MobxCounter extends React.Component<CounterProps, CounterState> {
    // ? optional
    // ! Nullable
    destroyFunc!: Function;

    constructor(props: CounterProps) {
        super(props); // MUST
        console.log('Counter obj created', props);
    }
 
    increment = () => {
        counter.incr();
    }
 
    componentDidMount() {

        this.destroyFunc = autorun( () => {
            console.log('Counter is ', counter.value);
            // trigger the render function
            this.forceUpdate();
        })

    }

    componentWillUnmount() {
        console.log('unsubscribe frm mobx');
        this.destroyFunc();
    }

    render() {
        console.log('Counter render called');
        
        return (
            <div>
                <h4>Mobx Counter</h4>
               
                 <p> Counter {counter.value} </p>
                
                <button onClick={this.increment}>
                    Incr
                </button> 

            </div>
        )
    }
}

export default MobxCounter;