// App.tsx

import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import Cart from './components/Cart';
import Checkout from './components/Checkout';

// class component
class App extends React.Component {
    // react keyword
    // should create and return virtual dom
    render() {
        // JSX = JavaScript + XML
        // TSX = TypeScript + XML
        return (
            <div>
                <h2>React App</h2>
                <Header title="Product app" />
                <Checkout />
                <Cart />
                <Home />
                <Footer year={2019}  company="Product Inc" >
                    <p>Contact time: USA 8:00 to 5:00 PM</p>
                    <p>Contact time: IN 7:00 to 3:00 PM</p>
                </Footer>
            </div>
        )
    }
}

export default App;