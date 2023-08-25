
// ЗАВДАННЯ 1
/*
function isLess(a,b){
    if(a,b){
        return true;
    } else{
        return false
    }
}

// переписаний з оператором порівняння
function isLess(a, b) {
    return a <= b;
}

console.log(isLess(10, 15)); // Поверне true
console.log(isLess(15, 10)); // Поверне false
*/

/* ЗАДАНИЕ 2

let count = 0;

function cc(card){
    return "Change me";
}
*/

/*
cc(2); cc(3); cc(7); cc('K'); cc('A'); 


let count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

console.log(cc(2)); // Поверне "1 Bet"
console.log(cc(3)); // Поверне "2 Bet"
console.log(cc(7)); // Поверне "2 Bet"
console.log(cc('K')); // Поверне "1 Bet"
console.log(cc('A')); // Поверне "0 Hold"
*/

//  ЗАДАНИЕ 3

//const increment = (number, value) => number + value;

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // Поверне 7
console.log(increment(5));    // Поверне 6

// ЗАДАНИЕ 4 

function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log(convertCtoF(0));   // Поверне 32
console.log(convertCtoF(-30)); // Поверне -22
console.log(convertCtoF(-10)); // Поверне 14
console.log(convertCtoF(30));  // Поверне 86