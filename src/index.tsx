// index.tsx
import React from 'react';

import ReactDOM from 'react-dom';
// default import
import App from './app/App';

import './index.css';

import './mobx-demo';

import {Provider} from 'mobx-react';

import counter from './app/state/CounterState';
import {CartState} from './app/state/CartState';
import {ProductState} from './app/state/ProductState';

// a store contains multiple states
const store = {
    counter: counter,
    cart: new CartState(), 
    product: new ProductState()
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