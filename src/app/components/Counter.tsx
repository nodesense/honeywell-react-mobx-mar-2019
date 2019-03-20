// Counter.tsx
import React from 'react';

// props are passed with instance(this).props

interface CounterProps {
    startValue: number;
}

interface CounterState {
    counter: number;
}

//this.props is a keyword

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props); // MUST
        console.log('Counter obj created', props);

        // react keyword
        // data state per component instance
        // state is mutable, can change the values
        // state is owned by component
        this.state = {
            // initialze component state from props
            counter: props.startValue
        };

        // es5
       // this.increment = this.increment.bind(this);
    }

    increment() {
        // BAD
       // this.state.counter++;

       // GOOD
       // react keyword, defined in base class
       // accept multiple states
       // merge states and update current state
       // async function
       // trigger render method
       this.setState({
            counter: this.state.counter + 1
       })
    }

    // ES.NEXT (upcoming js features)
    // this context is solved
    // create a function once per instance
    // recommended
    increment2 = () => {
        this.setState({
            counter: this.state.counter + 2
       })
    }

    render() {
        console.log('Counter render called', this.state);
        //let that = this;
        return (
            <div>
                <h4>Counter</h4>
                <p>Start Value {this.props.startValue}</p>
                <p>Counter Value {this.state.counter} </p>

                {/*  comments in jsx/tsx  */}

                {/*
                        React events accept functions as callback
                        Func ref passed to react
                        React invoke the function using func.apply on strict mode
                        // global is undefined // this is undefined
                */}
                
                <button onClick={this.increment}>
                    Incr Crash
                </button>

                {/* create a function inside another function 
                    wrapper is created whenever render called
                */}
                <button onClick={() => this.increment()}>
                    Incr
                </button>

                <button onClick={this.increment2}>
                    Incr + 2
                </button>

 

            </div>
        )
    }
}

export default Counter;