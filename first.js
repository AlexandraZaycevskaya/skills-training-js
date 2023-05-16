let day = 16;
let month = 5;
let year = 2023;

let dayOutputString = day;
let monthOutputString = month;

if (day < 10) dayOutputString = `0${day}`;
if (month < 10) monthOutputString = `0${month}`;

let date = `${dayOutputString}/${monthOutputString}/${year}`;
console.log(date);

const USD_RUB_EXCHANGE = 70.87;
const USD_RUB_EXCHANGE_MESSAGE = `1 доллар саша равен ${USD_RUB_EXCHANGE} российских рублей`;
console.log(typeof USD_RUB_EXCHANGE);
console.log(USD_RUB_EXCHANGE_MESSAGE);


let isItemAddedToFav = 'Товар в избранном';
let isItemNoAddedToFav = 'Товар не в избранном';

const itemAdded = true;

if (itemAdded) {
    console.log(isItemAddedToFav);
} else {
    console.log(isItemNoAddedToFav);
}

let me = {
    myAge: 20,
    mySex: "female",
    myName: "Alexandra",
    mySurname: "Zaycevskaya",
    myCountry: "Russia",
    myCity: "Moscow",
    myJob: "developer"
};

console.log(me)