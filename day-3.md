npm install  react-router-dom
npm install  @types/react-router-dom


Redux - functional. immutable, predictable
Mobx - OOP, immutable/mutable

Functional vs OOP

class Calculator{
    int sum = 0;
    // impure function
    int add(int value) {
        // hidden state, mutable 
        sum += value;
        return sum;
    }
}

calc = new Calculator();
calc.add(10); // 10
calc.add(10); // 20
calc.add(20); // 40

calc.add(10); 
calc.add(10); 
calc.add(20);


calc.add(10); 
calc.add(10); 
calc.add(20);
calc.add(10); 
calc.add(10); 
calc.add(20);
calc.add(10); 
calc.add(10); 
calc.add(20);
calc.add(10); 
calc.add(10); 
calc.add(20);
calc.add(10); 
calc.add(10); 
calc.add(20);
calc.add(10); 
calc.add(10); 
calc.add(20);
calc.add(10); 
calc.add(10); 
calc.add(20);

// pure function
function add(sum, value) {
    // immutable
    return sum + value;
}

add(0, 10); // 10


add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); // 10
add(0, 10); 

class Cart {
    CartItem[] items;

    addItem(Item item) {
        // mutable
        items.add(item);
    }
}

function addItem(items, item) {
    // immutable
    return [...items, item];
}