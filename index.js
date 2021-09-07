function x() {
    for(var i=1; i<=5; i++)
    {

        function close(i) {
            setTimeout(function(){
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}
x();

// function outest(c) {
//     function outer(b) {
//         // let a=10;
//         function inner() {
//             console.log(a, b, c);
//         }
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// outest("JK")("hello")();

function counter() {
    var count = 0;

    return function incrementCount() {
        count++;
        console.log(count);
    }
}
var v1 = counter();
v1();
v1();

var v2 = counter();
v2();
v2();
v2();
v2();

function Counter() {
    var count = 0;
    this.incrementCount = function () {
        count++;
        console.log(count);
    }

    this.decremenntCount = function () {
        count--;
        console.log(count);
    }
}

var cdd = new Counter();
cdd.decremenntCount();
cdd.incrementCount();
cdd.incrementCount();
cdd.incrementCount();
cdd.decremenntCount();


// const radius = [1,2,3,4];
// const calculateArea = function (radius)  {
//     const output = [];
//     for(let i=0; i<radius.length; i++)
//     {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// const calculateDiameter = (radius) => {
//     const output = [];
//     for(let i=0; i<radius.length; i++)
//     {
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));

// const calculateCircumference = function (radius)  {
//     const output = [];
//     for(let i=0; i<radius.length; i++)
//     {
//         output.push(Math.PI * 2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));

// const radius = [1,2,3,4];
// const area = (radius) => {
//     return Math.PI * radius * radius;
// }

// const circumference = (radius) => {
//     return 2 * Math.PI * radius;
// }

// const calculate = (radius, logic) => {
//     const output = [];
//     for(let i=0; i<radius.length; i++)
//     {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// // Does not work with Arrow function
// Array.prototype.calculateResult = function (logic) {
//     const output = [];
//     for(let i=0; i<this.length; i++)
//     {
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(radius.map(area));
// console.log(radius.calculateResult(area));

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

// const evens = arr.filter(x => x%2==0);
// console.log(evens);
// const odd = arr.filter(function oddC(x){
//     return x % 2 == 1;
// });
// console.log(odd);

// // Sum
// function findSum(arr) {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++)
//         sum += arr[i];
//     return sum;
// }
// console.log(findSum(arr));

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

// const students = people.filter(p => p.age === 23);
// const studentNames = people.filter(p => p.age === 23).map(x => x.name);
// const fullNames = people.map(x => x.name + " " + x.lastName);
// console.log(people);
// console.log(students);
// console.log(studentNames);
// console.log(fullNames);

// const counts = people.reduce(function(ack, curr) {
//     if(ack[curr.age]) {
//         ack[curr.age]++;
//     }
//     else {
//         ack[curr.age] = 1;
//     }
//     return ack;
// }, {});
// console.log(counts);

// function outest() {
//     return function outer(b) {
//         return function inner(a) {
//             return a + b;
//         }
//     }
// }
// console.log(outest()(22)(1));

// Debouncing Example
// let lastCall = Date.now();
// let currentCall;
// function press() {
//     currentCall = Date.now();
//     const diff = currentCall - lastCall;
//     console.log("Difference between the clicks:", diff);
//     lastCall = currentCall;

//     if (diff > 3000) {
//         callAPI();
//     }
// }

// function callAPI(){
//     console.log("API CALL");
// }

// Throttling example
// setInterval(() => {
//     callAPI();
// }, 3000);

// function callAPI() {
//     console.log("API CAlled");
// }

// *********************************************************************************
// Throttling Demo
const throttled = (fn, limit) => {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            //   fn();
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    };
};

// Call function at every 5000 ms
const resizeRewired = throttled(resizeFn, 5000);

window.addEventListener("resize", resizeRewired);

function resizeFn(event) {
  console.log("Resize event happened!");
  console.log(event);
}
// *********************************************************************************

// ***********************************************************************************
// Debouncing demo
let c = 0;
function getData() {
    console.log("Loading Data:", c++);
}

const doSomeMagic = (fn, delay) => {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

// Difference of time between 2 key press event is > 3000ms then only FETCH
const betterGetData = doSomeMagic(getData, 500);

// *************************************************************************************
// ****************************
// Event delegation

document.querySelector("#products").addEventListener("click", (event) =>{
    console.log("Parent product clicked", event);
    console.log(event.target.id);
    window.location.href = "/" + event.target.id;
})

document.querySelector("#form").addEventListener("keyup", function(event) {
    console.log(event);
    if (event.target.dataset.uppercase == "") {
        event.target.value = event.target.value.toUpperCase();
    }
})
// ****************************

function init() {
    var name = 'Firefox';
    function displayName() {
        console.log(name);
    }
    displayName();
}
init();

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
var myFunc = makeFunc();
myFunc();

let name = {
    firstName: "Parth",
    lastName: "Mangukiya",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

const printFullName2 = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", "+ state);
}

name.printFullName();

let name2 = {
    firstName: "Rahul",
    lastName: "Dravid",
}

// Call - Used for function borrowing, we can call functions from other objects and use it with data of other objects

name.printFullName.call(name2);

printFullName2.call(name2, "Bangalore", "Karnataka");

// Only difference between call and apply method is that the way we pass the arguments
printFullName2.apply(name2, ["Bangalore", "Karnataka"]);


// Bind 
// looks same as call, binds the method with the object and returns the copy of the object
let printMyName = printFullName2.bind(name2, "Bangalore", "Karnataka");
let printMyName2 = printFullName2.bind(name2, ["Bangalore", "Karnataka"]);
// Bind is used to just bind and keep a copy of the method, which can be invoked later
printMyName();
printMyName2();

// Function currying
function log(a) {
    return function logA(b){
        return function logB(c){
            return function logC(d) {
                return a + b + c + d;
            }
        }
    }
}

const d = log(1)(2)(3)(4);
console.log(d);


 // 2 ways of function currying
 // 1. Bind
 const multiply = (x, y) => console.log(x * y);

 const multi2 = multiply.bind(this, 2);
 multi2(10);
 // 2. Closure




//********************
console.log("FUNCTION CURRYING");
// 1. Cache expansiv operation
// 2. Acheieve abstraction in funciton paradigm

const add = function (x){
    return function(y){
        // console.log(x);
        const z = 40;
        return x + y + z;
    }
}

const addTen = add(10);
console.log(addTen(35));
console.log(addTen(11));

