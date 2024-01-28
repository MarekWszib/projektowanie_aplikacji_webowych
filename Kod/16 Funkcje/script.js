function simpleFunction() {
    console.log('wywoałanie funkcji simple function');
}

simpleFunction();

function rewriteIt(text) {
    console.log(text);
}

rewriteIt('jolka jolka');

function sumOfTwo(a, b) {
    let newVar = a + b;
    console.log(a + '+' + b + ' = ' + newVar);
}

sumOfTwo(4, 5);
sumOfTwo(4, '5');

function functionWithReturn() {
    return 'Jakiś zwrócony tekst';
}

let v = functionWithReturn();
console.log(v)

function showReturned() {
    console.log(functionWithReturn());
}
showReturned();

// nie działa przeładowanie metod, liczy się ostatnia definicja, potrzeba poda c co najmniej tyle parametrów co ostatanie definicja wymaga

function f(p1,p2){
    console.log('Dwa parametry: ' + p1 + ', ' + p2);
}
f(1,2);

function f(p1){
    console.log('Jeden parametr: ' + p1);
}
f(10);