// App.tsx

import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Counter from './components/Counter';
import MobxCounter from './components/MobxCounter';
import MobxReactCounter from './components/MobxReactCounter';
import MobxCart from './components/MobxCart';


import {BrowserRouter as Router,
        Route, 
        Switch
} from 'react-router-dom';

const NotFound = () => (
    <div>
        <h2>Page not found</h2>
    </div>
);

// class component
class App extends React.Component {
    // react keyword
    // should create and return virtual dom
    render() {
        // JSX = JavaScript + XML
        // TSX = TypeScript + XML
        return (
            <Router>
            <div>
                <h2>React App</h2>
                <Header title="Product app" />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path='/about' render={ ()=> (
                        <div>
                            <h2>About</h2>
                        </div>
                    )  } />

                <Route path="/counter" 
                        render={() => <Counter startValue={333} /> } />
                    

                    <Route path="/mobx-cart" 
                        render={() => <MobxCart /> } />

                <Route path="/mobx-counter" 
                        render={() => <MobxCounter /> } />

                <Route path="/mobx-react-counter" 
                        render={() => <MobxReactCounter /> } />
                    

                    <Route path='*' component={NotFound} />
                </Switch>

                 
                <Footer year={2019}  company="Product Inc" >
                    <p>Contact time: USA 8:00 to 5:00 PM</p>
                    <p>Contact time: IN 7:00 to 3:00 PM</p>
                </Footer>
            </div>
            </Router>
        )
    }
}

export default App;