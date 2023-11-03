// Practical task 2
console.log('Movin');

// Practical task 3
let firstVariable, secondVariable;
firstVariable = 42;
secondVariable = 'Hello World!';
alert(firstVariable, secondVariable);
secondVariable = firstVariable;
alert(firstVariable, secondVariable);
// Practical task 4
let firstObject = {
    String: 'String',
    Number: 42,
    Boolean: true,
    Undefined: undefined,
    Null: null
};
// Practical task 5
let isAdult = confirm('Do you reach 18?');
// Practical task 6
let firstName = typeof 'Mykola';
let lastName = typeof 'Movin'; 
let studyGroup = typeof 'JavaScript for TA [Q4, 2023]';
const yearOfBirth = typeof 1999;
let isMarriage = typeof false;
console.log(yearOfBirth, isMarriage, firstName);
// Practical task 7
let userName = prompt('Please, enter your Name');
let email = prompt('Pleas, enter your Email');
let password = prompt('Please, enter your password');
let message = alert(`"Dear ${userName}, your email is ${email}, your password is ${password}`)
// Practical task 8
let second = 1;
let minute = 60 * second;
let hour = 60 * minute;
let day = 24 * hour;
let month = 30 * day;
console.log(hour, day, month)