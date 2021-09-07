const double = (x) => x*2;
// function double (x) {
//     return x * 2;
// }
const arr = [16,222,31,43,5];
const output = arr.map(x => x*2);
const output1 = arr.map(a => a*2);
const hexadecimal = arr.map(a => a.toString(16));
const hexa = arr.map(a => a.toString(6));
const binary = arr.map(a => a.toString(2));
console.log(hexadecimal);
console.log(hexa);
console.log(binary);
console.log(output1);
console.log(output);

const evens = arr.filter(x => x%2==0);
console.log(evens);
const odd = arr.filter(function oddC(x){
    return x % 2 == 1;
});
console.log(odd);

// Sum
function findSum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++)
        sum += arr[i];
    return sum;
}
console.log(findSum(arr));

const arr2= [1,2,3,4];
let sum = 0;
for(let i=0; i< arr2.length; i++)
    sum+=arr2[i];
console.log("SUM:", sum);

const ooo = arr2.reduce((acc, curr)=>{
    acc = acc + curr;
    return acc;
}, 100);
console.log("SUM:", ooo);

// const op1 = arr.reduce(function(acc, curr){
//     acc += curr;
//     return acc;
// }, 0);
// console.log(op1);

const people = [
    {"id": 1, "name": "Parth", "lastName":"Mangukiya", "age": 23},
    {"id": 2, "name": "Hrithik", "lastName":"Roshan", "age": 33},
    {"id": 3, "name": "Ravi", "lastName":"Vaghasiya", "age": 23},
    {"id": 4, "name": "Kirtan", "lastName":"Vekariya", "age": 40},
    {"id": 5, "name": "Harshal", "lastName": "Kevadiya", "age": 13}
];

// Print fullName whose age is lowest
const minAge = people.reduce((ack, curr)=>{
    let minAge = 1000;
    if(curr.age < minAge) {
        minAge = curr.age;
    }
    return people.filter((p) => p.age === minAge);
}, {});

console.log(minAge);

const students = people.filter(p => p.age === 23);
const studentNames = people.filter(p => p.age === 23).map(x => x.name);
const fullNames = people.map(x => x.name + " " + x.lastName);
console.log(people);
console.log(students);
console.log(studentNames);
console.log(fullNames);

const counts = people.reduce(function(ack, curr) {
    if(ack[curr.age]) {
        ack[curr.age]++;
    }
    else {
        ack[curr.age] = 1;
    }
    return ack;
}, {});
console.log(counts);
