function add() {
    return (a + b);
}

// 
function subtract() {
    return (a - b);
}
// 
function multiply() {
    return (a * b);
}
// 
function divide() {
    return (a/b);
}
// 
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(a) {
    a++;
    return a;
}

function decrement(a) {
    a--;
    return a;
}

function makeInt(n, base) {
    const parsed = parseInt(n, base);
    if (isNaN(parsed)) {return 0;}
    return parsed * 100;
}