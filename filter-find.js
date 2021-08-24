const numbers = [12, 5, 21, 45, 30, 28, 13, 7];
const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 20);
console.log(bigNumber);
console.log(smallNumber);

const products = [
    { name: 'water bottle', price: 20, color: 'skyblue' },
    { name: 'mobile phone', price: 50, color: 'black' },
    { name: 'laptop', price: 250, color: 'black' },
    { name: 'headphone', price: 180, color: 'white' }
];
const expensive = products.filter(product => product.price > 100);
console.log(expensive);
const blackColor = products.filter(product => product.color == 'black');
console.log(blackColor);
const whiteItem = products.find(product => product.color == 'white');
console.log(whiteItem);