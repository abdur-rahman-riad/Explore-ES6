// Variable
const myName = "Mohammad Abdur Rahman Riad";
let myPhone = 'Redmi-6';
myPhone = 'iPhone-12';

//Default Parameter
function addNumber(num1, num2 = 0) {
    return num1 + num2;
}
// console.log(addNumber(5, 5));

// Template String
const myNotes = `I am ${myName}.
Today i start the ES6.
ES6 is the most advanced feature of javascript.
javascript is most important thing in Web development.`;

// Spread or three dots
const numbers = [12, 34, 50, 18, 43, 29, 17, 07];
const maxNumber = Math.max(...numbers);

// Arrow function
const squareNumber = number => number * number;
console.log(squareNumber(10));