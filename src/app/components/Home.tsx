// Home.tsx

import React, {Component} from 'react';
import Counter from './Counter';

// React.Component === Component
// React create instance for class component
// calls instance.render() to get virtual dom
class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <Counter startValue={0}/>

                <Counter startValue={100}/>
            </div>
        )
    }
}

export default Home;