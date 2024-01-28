let numericArray = [11, 22, 33];
let textArray = ['a', 'bb', 'xyZ'];
let booleanArray = [false, false, true];
let mixedArray = [1, "a", true];

console.log('Tablica numericArray:');
console.log(numericArray);

console.log('Tablica textArray:');
console.log(textArray);

console.log('Tablica booleanArray:');
console.log(booleanArray);

console.log('Tablica mixedArray:');
console.log(mixedArray);

console.log('----------------');

console.log('Trzeci element tablicy numericArray: ' + numericArray[2]);

let n = numericArray[0];
console.log('Pierwszy element tablicy numericArray: ' + n);

console.log('Tablica numericArray po pierwszego drugiego elementu');
numericArray[0] = 100;
console.log(numericArray);
console.log(n);

console.log('--------');
console.log('Element spoza zakresu');
console.log(numericArray[-1]);

console.log('--------');
console.log('numericArray: ' + numericArray);
console.log('Czy tablica zawiera 1?');
console.log(numericArray.includes(1));
console.log('Czy tablica zawiera 33?');
console.log(numericArray.includes(33));

console.log('-----------------');

console.log('Tablica textArea po dodaniu wartości four');
textArray.push('four');
console.log('textArray: ' + textArray);
console.log('typ zmiennej przechowującej tablicę textArray: ' + typeof textArray); // object
console.log('dlugosc tablicy textArray: ' + textArray.length);
