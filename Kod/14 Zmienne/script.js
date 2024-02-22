let numericVal = -5;
let stringVal = 'wartość tekstowa'; // " też zadziała, ale lepiej korzystać z konwencji z apostrofami, " może niespodzieawanie kończyć wcześniej otwarty "
let booleanVal = false;

console.log(numericVal)
console.log(stringVal)
console.log(booleanVal)

console.log('---------------')

console.log(typeof numericVal)
console.log(typeof stringVal)
console.log(typeof booleanVal)

console.log('---------------')

numericVal = 'nowa wartość'
console.log(numericVal)
console.log(typeof numericVal)

console.log('---------------')

let sum = '1' + 1; /*domyślnie + traktowany jako konkatenacja*/
console.log(sum);

let sum2 = 1 + '1';
console.log(sum2);

let diff = 5 - '1';
console.log(diff);