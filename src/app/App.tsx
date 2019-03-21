// App.ts

import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import Cart from './components/Cart';

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
                <Cart />
                <Home />
                <Footer year={2019} company="Product, Inc" />
            </div>
        )
    }
}

export default App;