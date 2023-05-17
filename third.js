//первое задание

const TYPE_OF = 'number';
const b = 10;
const VARIAL_VALUE_TEXT = 'Это число со значением';

if (typeof b === 'number'){
    alert(`${VARIAL_VALUE_TEXT} ${b}`);
}

// второе задание

const STRENGTH_REPS_COUNT_MAX = 5;
const MASS_REPS_COUNT_MAX = 12;

const STRENGHT_MESSAGE = "Вы работаете на силу";
const MASS_MESSAGE = "Вы работает на массу";
const RELIEF_MESSAGE = "Вы работаете на рельеф";

let repsCount = 6;

if (repsCount <= STRENGTH_REPS_COUNT_MAX ) {
    console.log(STRENGHT_MESSAGE);
} else if (repsCount <= MASS_REPS_COUNT_MAX){
    console.log(MASS_MESSAGE);
} else if(repsCount > MASS_REPS_COUNT_MAX) {
    console.log(RELIEF_MESSAGE);
};


// третье задание

const LOSE_WEIGHT = 'похудеть';
const MUSCLE_MASS = 'мышечная масса';
const STRENGTH = 'сила';
const TONE = 'тонус';
const RELIEF = 'рельеф';
const LOSE_WEIGHT_PROGRAMM_MESSAGE = 'Составляю программу тренировок для похудения';
const MUSCLE_MASS_PROGRAMM_MESSAGE = 'Составляю программу тренировок для набора мышечной массы';
const STRENGTH_PROGRAMM_MESSAGE = 'Составляю программу тренировок для развития силы';
const TONE_PROGRAMM_MESSAGE = 'Составляю программу тренировок для поддержания тонуса';
const RELIEF_PROGRAMM_MESSAGE = 'Составляю программу тренировок рельефа';
const TRAINING_TARGET = 'Цель вашей тренировки ?';
const ERROR_MESSAGE = 'Ошибка ввода';

const userGoal = prompt(TRAINING_TARGET);

switch (userGoal) {
    case LOSE_WEIGHT:
        alert(LOSE_WEIGHT_PROGRAMM_MESSAGE);
        break;
    case MUSCLE_MASS:
        alert(MUSCLE_MASS_PROGRAMM_MESSAGE);
        break;
    case STRENGTH:
        alert(STRENGTH_PROGRAMM_MESSAGE);
        break;
    case TONE:
        alert(TONE_PROGRAMM_MESSAGE);
        break;    
    case RELIEF:
        alert(RELIEF_PROGRAMM_MESSAGE);
        break;
    default:
        console.log(ERROR_MESSAGE)
        break;
}

// четвёртое задание 
const FIRST_NUMBER_TEXT = 'Введите первое число';
const SECOND_NUMBER_TEXT = 'Введите второе число';
const RESULT_TEXT = 'Введите результат';
const RIGHT_RESULT = 'Правильно';
const WRONG_RESULT = 'Неправильно';

const FIRST_NUMBER = prompt(FIRST_NUMBER_TEXT);
const SECOND_NUMBER = prompt(SECOND_NUMBER_TEXT);
const RESULT_INPUT = prompt(RESULT_TEXT);

const FIRST_NUMBER_PROCESSED = Number(FIRST_NUMBER);
const SECOND_NUMBER_PROCESSED = Number(SECOND_NUMBER);
const RESULT_PROCESSED = Number(RESULT_INPUT);

const RESULT = FIRST_NUMBER_PROCESSED + SECOND_NUMBER_PROCESSED;


if (RESULT_PROCESSED === RESULT) {
    alert(RIGHT_RESULT);
} else {
    alert(WRONG_RESULT);
}

// пятое задание

const EVEN_NUMBER = 'Чётное число';
const ODD_NUMBER = 'Нечётное число';
const NUMBER_REQUEST = 'Введите число';

const NUMBER = prompt(NUMBER_REQUEST);
const NUMBER_PROCESSED = Number(NUMBER);

if (NUMBER_PROCESSED %2 === 0){
    alert(EVEN_NUMBER);
} else {
    alert(ODD_NUMBER);
};

// шестое задание 
const MONTH_REQUEST = 'Введите номер месяца';
const MONTH_NUMBER = prompt(MONTH_REQUEST);
const MONTH_NUMBER_PROCESSED = Number(MONTH_NUMBER);
const ERROR = 'Ошибка';

const WINTER = 'Зима';
const SPRING = 'Весна';
const SUMMER = 'Лето';
const AUTUMN = 'Осень';

switch (MONTH_NUMBER_PROCESSED) {
    case 12:
    case 1: 
    case 2:
        alert(WINTER)   
        break;
    case 3:
    case 4: 
    case 5:
        alert(SPRING)   
        break;
    case 6:
    case 7: 
    case 8:
        alert(SUMMER)   
        break;
    case 9:
    case 10: 
    case 11:
        alert(AUTUMN)   
        break;
    default:
        alert(ERROR);
        break;
}
