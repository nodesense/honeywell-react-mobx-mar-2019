React Event System
Event Queue

Refresh rate 60 fps 

1 second 

1 ms 2nd ms

1    2

optimal framerate

[Event 1, Event 2, ...........]
   eventHandler1() {
        setState({counter : 0})
   }
     eventHandler2() {
        setState({result: 10})
   }

   merge happen when q is empty or framerate

   after merge, render()

   

   all the cases 
    V.DOM VS V.DOM

V.DOM

    <p>P1</p>

render 
    <p>P1</p>

REAL DOM

    <p>from did mount</p>
    
Input controls
    V.DOM vs V.dOM
    V.DOM vs REAL DOM