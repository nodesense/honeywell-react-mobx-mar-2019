import React from 'react';

import ReactDOM from 'react-dom';
// default import
import App from './app/App';

// take virtual dom and mount in real dom

// Uni direction, one direction
// Virtual DOM synced to ==> REAL DOM
ReactDOM.render(<App />,  // virtual dom
                document.getElementById('root') //real dom
                );