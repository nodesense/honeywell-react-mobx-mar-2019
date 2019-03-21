// Counter.tsx
import React from 'react';

// props are passed with instance(this).props

interface CounterProps {
    startValue: number;
}

interface CounterState {
    counter: number;
    result: number;
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
            counter: props.startValue,
            result: props.startValue * 10
        };

        // es5
       // this.increment = this.increment.bind(this);
    }

    // ES6
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
        console.trace('increment 2');
        console.log('before ', this.state.counter);
        // async
        this.setState({
            counter: this.state.counter + 2
        }, () => {
            console.trace('increment 2 callback');
            // called after render function, current state updated
            console.log('setState callback counter', this.state.counter);

            // cons: trigger render again
            this.setState({
             result: this.state.counter * 10
            });
        })

        // buggy, async, current state is not updated
    //    this.setState({
    //        result: this.state.counter * 10
    //    })

       console.log('after ', this.state.counter);
    }

    increment3 = () => {
        const counter = this.state.counter + 3;
        // won't call render multiple times
        this.setState({
             counter,  // counter : counter
             result: counter * 10
        })
    }


    increment4 = () => {
        console.trace('increment 4 called counter ', this.state.counter, new Date());

        const counter = this.state.counter + 4;
        // won't call render multiple times

        // single call stack, calling multiple setState, calls render once
        this.setState({
             counter
        })

        this.setState({
            result: counter * 10
        })
    }

    increment5 = () => {
        console.trace('increment 5 called counter ', this.state.counter, new Date());

        // new way of setting state, functional style
        // setState functional set state
        // react calls the function, return new state
        // recommended for derived data
        this.setState( (prevState) => {
            const counter = prevState.counter + 5 ;
            console.log('prev State', prevState); 
            console.log('current State', this.state); 
            return {
                counter,
                result: counter * 10
            }
        } )
    }

    forceRender = () => {
        // react keyword, trigger render function without state
        // not recommended
        this.forceUpdate();
    }

    setSameState = () => {
        this.setState ({
            counter: this.state.counter,
            result: this.state.result
        });
    }

    // lifecycle
    // returns either true or false
    // true == reacts calls render function
    // false == reacts does not call render function

    // called when you call this.setState called on update cycle
    // parent render called on update cycle
    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState) {
        console.log('shouldupdateupdate current state', this.state);
        console.log('shouldupdateupdate next state', nextState);

        if (this.state.counter != nextState.counter || 
            this.state.result != nextState.result  ) {
                console.log('data diff is true');
                return true;
        }

        console.log('no render');
        return false;
    }

    render() {
        console.log('Counter render called', this.state);
        //let that = this;
        return (
            <div>
                <h4>Counter</h4>
                <p>Start Value {this.props.startValue}</p>
                <p>Counter Value {this.state.counter} </p>
                <p>Result  {this.state.result} </p>

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

                <button onClick={this.increment3}>
                  Incr + 3
                </button>


                <button onClick={this.increment4}>
                  Incr + 4
                </button>

 
                <div onClick={this.increment4}>
                    <button onClick={this.increment4}>
                    Incr + 4 Twice on click
                    </button>
                </div>

                <div onClick={this.increment5}>
                    <button onClick={this.increment5}>
                    Incr + 5 Twice on click
                    </button>
                </div>


                <button onClick={() => this.forceRender()}>
                    Force update
                </button>

                <button onClick={() => this.setSameState()}>
                        setSameState
                </button>

                


            </div>
        )
    }
}

export default Counter;