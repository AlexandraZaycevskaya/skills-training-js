// 1 задание
let arr = [];

for (let i = 0; i <= 10; i++) {
    arr.push(i);   
}

for (const element of arr) {
    console.log(element)
}

// 2 задание
let numbers = [];

for (let i = 0; i <= 10; i++) {
    numbers.push(i);   
}

for (const element of arr) {
    console.log(element)
}

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

// 3 задание
let numbers = [];

for (let i = 1; i <= 200; i++) {
    numbers.push(i);
}
console.log(numbers);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

const average = sum / numbers.length;
console.log(average);

// 4 задание

let numbers = [];

for (let i = 0; i < 7; i++) {
    numbers.push(Math.random());
}
let maxIndex = 0;
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < max) continue;
    max = numbers[i];
    maxIndex = i;
}
console.log(numbers);
console.log(maxIndex, max);


// let arr = [];
// let max = 10;

// for (let i = 1; i <= 10; i++) {
//     arr.push(Math.floor(Math.random() * max));
// }

// console.log(arr)
// let even = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) continue; 
//     even++;
// }

// console.log(even);
// for (const element of arr) {
//     console.log(element)
// }

// 5 задание
let numbers = [];

for (let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * 10);
    console.log(random)
    numbers.push(random);
}

let even = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers [i] % 2 !== 0) continue;
   even++;
    
}
console.log(numbers);
console.log(even);

// 6 задание
const temps = [];
const DAYS = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье'
];
const REQUEST_TEMP_TEXT = 'Введите температуру за';

for (let i = 0; i < DAYS.length; i++) {
    const dayCount = i + 1;
    const tempInput = prompt(`${REQUEST_TEMP_TEXT} ${DAYS[i]}`);
    const temp = Number(tempInput);

    temps.push(temp);
}
console.log(temps);

let max = temps[0];
let min = temps[0];
let sum = 0;

for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];

    if (temps[i] < min) min = temps[i];

    sum += temps[i];
}
const average = sum / temps.length;

// console.log(max, min, average);

// 7 задание

const names = [
    'Сергей',
    'Саша',
    'Диана',
    'Коля',
    'Петя',
    'Алена',
    'Вася',
    'Антон',
    'Лена',
];

const namesReversed = [];

for (let i = 0; i < names.length / 2; i++) {
    console.log(names[i], names[names.length - i - 1]);
    namesReversed[i] = names[names.length - i -1];
    namesReversed[names.length - i -1] = names[i];
}

console.log(names);
console.log(namesReversed);
console.log(names.reverse());



function chooseYears(start, end) {
        let yearArray = [];
        for (var i = start; i <= end; i++) {        
             yearArray.push(i);
        }
       let result = [];

  yearArray.forEach(function(year) {
       if (getLeapYear(year))
       result.push(year);
  });

  return result;
}

function getLeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      return year;
   } else {
      return false;
     }
}


let lang = 'ru';
if (lang == 'ru') {
	let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
alert(arr);


let lang = 'ru';
switch (lang) {
	case 'ru':
		let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'en':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
}
alert(arr);


let lang = 'ru';
let arr = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang]);
