// 1 задание

for (let i = -50; i <= 50; i++) {
    console.log(i);
}

// let arr = [];
// for (let i = -50; i <= 50; i++) {
//     arr.push(i);
// }

// for (const element of arr) {
//     console.log(element);
// }

// 2 задание

let a = 10;
for (let a = 10; a >= 0; a--) {
    console.log(a);
}


// let arr = [];
// for (let i = 10; i >= 0; i--) {
//     arr.push(i);
// }

// for (const element of arr) {
//     console.log(element);
// }
// 3 задание

for (let i = 1; i <= 100; i++) {
    if (i % 7 !== 0) continue;
    console.log(i);
}

// let arr = [];
// for (let i = 1; i <= 100; i++) {
//     arr.push(i);
// }

// for (const element of arr) {
//     if (element % 7 !== 0) continue;
//     console.log(element)
// }

// 4 задание
for (let i = 1; i <= 10 ; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}


// 5 задание

const ANNUAL_INTEREST = 1.05;
let deposit = 1000;

for (let i = 0; i < 20; i++) {
    deposit *= ANNUAL_INTEREST;
    console.log(Math.trunc(deposit));
}

// 6 задание
let i = 1;
while (i <= 100) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// let arr = [];
// for (let i = 1; i <= 100; i++) {
//     arr.push(i);
// }

// for (const element of arr) {
//     if (element % 2 !== 0) continue;
//     console.log(element)
// }

// 7 задание
const INTEREST_RATE = 1.05;
const BANK_ACCOUNT = 1000000;

let account = 1000;
let year = 1;

while (account < BANK_ACCOUNT) {
    account *= INTEREST_RATE;
    year++;
}
console.log(year);
