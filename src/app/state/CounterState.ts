// state/CounterState.ts
import { observable } from "mobx";
 
const counter = observable({
    value: 0,

    incr: function() {
        this.value++;
    }
});

export default counter;