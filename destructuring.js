const fish = {
    id: 12,
    name: 'King Hilsha',
    price: 1200,
    phone: '017345567437',
    address: 'Padma River'
};
// const fishName = fish.name;
// const fishPrice = fish.price;
const { id, name, price, phone, address } = fish;
console.log(name, price);

const company = {
    title: 'Rahman Software Company',
    address: 'Dhaka, Bangladesh',
    ceo: 'Mohammad Abdur Rahman',
    web: { work: 'web development', employee: 21, framework: 'react' },
};
const { title, ceo } = company;
const { work, employee, framework } = company.web;
console.log(title);