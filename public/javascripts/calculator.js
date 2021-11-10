let display = document.querySelector("#display");
let allClear = document.querySelector('#allClear');
let equals = document.querySelector('#equal')
let operators = document.querySelectorAll('#operator');
let decimal = document.querySelector('#decimal');
let numbers = document.querySelectorAll('#number');
let hello = document.querySelector('#hello');

let previousNumber;
let currentNumber;
let operator;
let resetter = 0;

function clear() {
    previousNumber = undefined;
    currentNumber = undefined;
    display.value = '';
    operator = undefined;
}

allClear.addEventListener('click', clear);

numbers.forEach(button => button.addEventListener('click', () => {
    if (resetter === 1) {
        display.value = '';
        resetter = 0;
    }
    display.value += button.value;
    currentNumber = parseFloat(display.value);
}));

decimal.addEventListener('click', () => {
    display.value += '.';
})

function compute(operator, previousValue, currentValue) {
    const operations = new Map([
        ['+', (previousValue, currentValue) => previousValue + currentValue],
        ['-', (previousValue, currentValue) => previousValue - currentValue],
        ['×', (previousValue, currentValue) => previousValue * currentValue],
        ['÷', (previousValue, currentValue) => previousValue / currentValue],
    ]);

    return operations.get(operator)(previousValue, currentValue);
}

operators.forEach(button => button.addEventListener('click', () => {
    previousNumber = display.value !== '' ? parseFloat(display.value) : undefined;
    currentNumber = undefined;
    operator = button.value;
    resetter = 1;
}))

equals.addEventListener('click', () => {
    if (previousNumber != undefined && currentNumber != undefined && operator != undefined) {
        resetter = 1;
        display.value = compute(operator, previousNumber, currentNumber);
        
    } else {
        clear();
    }
});

hello.addEventListener('click', () => {
    let words = ['Hello', 'Gutten Morgen', "Ohayou", "Bonsiour", "Bon Giorno"];
    alert(words[Math.trunc(Math.random() * words.length)])
});