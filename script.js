 //Задание 1


const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}

//Задание 1(ver.2)

let numbs2 = [1, 5, 4, 10, 0, 3];

for (let item of numbs2) {
    if (item == 10) break;
    console.log(item);
}


//Задание 2


const numbs3 = [1, 5, 4, 0, 3];

let searchNumbs3 = numbs3.includes(4);

console.log(searchNumbs3);


//Задание 3


let numbsJoin = [1, 3, 5, 10, 20];
numbsJoin = numbsJoin.join(' ');
console.log(numbsJoin);


//Задание 4


const numbersOk = [];
const numbersEven = [];

for (let i = 0; i < 10; i++) {
    numbersOk.push(Math.floor(Math.random() * 11));
}

console.log(numbersOk);

numbersOk.forEach(element => {
    if (element % 2 == 0) {
        numbersEven.push(element);
    }
});

console.log(numbersEven);


//задание 5


let arrayJoin = [];

for (let i = 0; i < 3; i++) {
    let subArray = [];
    for (let j = 0; j < 3; j++) {
        subArray.push(1);
    }
    arrayJoin.push(subArray);
}
console.log(arrayJoin);


// Задание 6


let arrNumbers = [1, 1, 1];

arrNumbers.push(2, 2, 2);

console.log(arrNumbers);

// Второй вариант решения 

const arrayShift = [1, 1, 1];

for (x = 3; x < 6; x++) {
    arrayShift.push(2)
}

console.log(arrayShift);


// Задание 7


let arrSort = [9, 8, 7, 'a', 6, 5];
arrSort.sort();
console.log(arrSort);
arrSort.pop();
console.log(arrSort);


// Задание 8


let arrSearch = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Введите число от 1 до 10'));
let search = arrSearch.includes(userAnswer);
console.log(search);


// Задание 9


let lineWord = 'abcdef';
let wordSplit = lineWord.split('');
wordSplit.reverse();
let textJoin = wordSplit.join('');
console.log(textJoin);


// Задание 10


let arrArithmetic = [];

for (let c = 0; c < 6; c++) {
    arrArithmetic.push(Math.floor(Math.random() * 11));
}

console.log(arrArithmetic);

function funcAverage(...arrArithmetic) {
    let total = 0;
    for (let item of arrArithmetic) {
        total += item;
    }
    average = total / 6;
    return average;
}

console.log(funcAverage(...arrArithmetic));


// Задание 11


let multiArray = [[1, 2, 3,],[4, 5, 6]];
let resultArray = [].concat(multiArray[0], multiArray[1]);
console.log(resultArray);


// Задание 12


let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(Math.floor(Math.random() * 10 + 1));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
        let sum = arr[i] + arr[i + 1];
        console.log(`Сумма элементов ${i} и ${i + 1} = ${sum}`);
    }
}