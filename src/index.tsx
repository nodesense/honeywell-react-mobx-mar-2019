import React from 'react';

import ReactDOM from 'react-dom';
// default import
import App from './app/App';

import './index.css';

import './mobx-demo';

import {Provider} from 'mobx-react';

import counter from './app/state/CounterState';
import cart from './app/state/CartState';

// a store contains multiple states
const store = {
    counter: counter,
    cart //cart: cart
    //cart: cart,
    //...
}

// Provider exposes the state to child components
// Provider uses React context which can pass data to level depth

// take virtual dom and mount in real dom

// Uni direction, one direction
// Virtual DOM synced to ==> REAL DOM
ReactDOM.render( 
           <Provider {...store}    >
               <App />
            </Provider>,
                document.getElementById('root') //real dom
                );