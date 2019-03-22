import { observable, autorun } from "mobx";
 
const person = observable({
    name: 'Joe',
    age: 30
});

// calls the function first time
// whenever property got changed
// observer
autorun(function() {
    console.log('person name ', person.name, person.age);
});

// change
// action, that changes the name, 
// autorun automatically execute the function
person.name = 'Krish';
person.age = 31;

const calculator = observable({
    a: 0,
    b: 0
});


// autorun accepts a function
// autorun returns a destructor function
const destroyFunc = autorun( () => {
    const c = calculator.a + calculator.b;
    console.log('Name', person.name, ' balance ', c);
});

calculator.a = 10;
calculator.b = 20;

person.name = 'Venkat';

setInterval( () => {
    calculator.a = Math.ceil(Math.random() * 10);
}, 5000);

setTimeout( () => {
    console.log('stop autorun');
    destroyFunc();
}, 20000);