const arr = ['t', 'd', 'P','F','a', 'h'];
console.log(arr);

const sortedArr = arr.sort();
console.log(sortedArr);
sortedArr.forEach(s => console.log(s, ' ', s.charCodeAt(0)));

const numbers = [2,5,100,4];
const sortedNumbers = numbers.sort((a,b) => b-a);
console.log(numbers);
console.log(sortedNumbers);

// Ascending order
const aComprator = (pA, pB) => pA.age - pB.age; 


// Descending order
const dComprator = (pA, pB) => pB.age - pA.age; 



const persons = [
    {name: "A", age: 34},
    {name: "B", age: 54},
    {name: "C", age: 14},
    {name: "D", age: 26},
];

console.log(persons);
persons.sort(dComprator);
console.log(persons);

// Ascending order