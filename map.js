const myName = ['Mohammad', 'Abdur', 'Rahman', 'Riad'];
const myNameLength = myName.map(name => name.length);
// console.log(myNameLength);

const products = [
    { name: 'water bottle', price: 120, color: 'skyblue' },
    { name: 'mobile phone', price: 14000, color: 'black' },
    { name: 'laptop', price: 25000, color: 'black' },
    { name: 'headphone', price: 180, color: 'swhite' }
];

const productName = products.map(product => product.name);
console.log(productName);