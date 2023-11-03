// Practical task 2
console.log('Movin');
// Practical task 3
let firstVariable, secondVariable;
firstVariable = 42;
secondVariable = 'Hello World!';
alert(`${firstVariable}, ${secondVariable}`);
secondVariable = firstVariable;
alert(`${firstVariable}, ${secondVariable}`);
// Practical task 4
let firstObject = {
    String: 'String',
    Number: 42,
    Boolean: true,
    Undefined: undefined,
    Null: null
};
// Practical task 5
let isAdult = confirm('I am 18 or older');
console.log(isAdult);
// Practical task 6
let firstName = typeof 'Mykola';
let lastName = typeof 'Movin'; 
let studyGroup = typeof 'JavaScript for TA [Q4, 2023]';
const yearOfBirth = typeof 1999;
let isMarried = typeof false;
console.log(yearOfBirth, isMarried, firstName);
let undefinedVariable;
let nullVariable = null;
console.log(typeof undefinedVariable, typeof nullVariable);
// Practical task 7
let userName = prompt('Please, enter your Name', 'Mykola');
let email = prompt('Please, enter your Email', 'example@gmail.com');
let password = prompt('Please, enter your password', 'strongPassword');
let message = alert(`"Dear ${userName}, your email is ${email}, your password is ${password}`);
// Practical task 8
let second = 1;
let minute = 60 * second;
let hour = 60 * minute;
let day = 24 * hour;
let month = 30 * day;
console.log(hour, day, month);
