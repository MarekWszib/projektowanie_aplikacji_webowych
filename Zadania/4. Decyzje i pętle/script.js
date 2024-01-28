function checkDivisibilityByTwo(n) {
    if (typeof n != "number") {
        console.log(n + ' to nie liczba!');
        return;
    }
    if(n % 1 !== 1){
        console.log(n + ' nie jest liczbą całkowitą')
    }
    if (n % 2 === 0) {
        console.log(n + ' to liczba parzysta')
    } else {
        console.log(n + ' to liczba nieparzysta')
    }
}

checkDivisibilityByTwo(5);
checkDivisibilityByTwo(6);
checkDivisibilityByTwo('a');
checkDivisibilityByTwo(3.5);

// function printNumbers(){
//     for (let i = 1; i < 101; i++) {
//         if(i%3===0){
//             console.log(i);
//         }
//     }
// }
//
// printNumbers();

function printNumbers2() {
    let array = [];
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0) {
            array.push(i);
        }
    }
    console.log('Liczby podzielne przez 3: ' + array);
}

printNumbers2();