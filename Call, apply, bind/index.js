let nameEx = {
    firstName: "Parth",
    lastName: "Mangukiya"
}

const printName = function(state, country, continent) {
    console.log(this.firstName + " " + this.lastName + " "  + state + " " + country + " " + continent);
}

printName.call(nameEx, 'GJ', 'IN');
printName.apply(nameEx, ['GJ', 'IN']);
const printNameAfter = printName.bind(nameEx, 'GJ', 'IN');
printNameAfter();

console.log("Own");

Function.prototype.myCall = function (obj, ...args) {
    obj.fn = this;
    obj.fn(...args);
}

Function.prototype.myApply = function (obj, ...args) {
    obj.fn = this;
    obj.fn(...args[1]);
}

printName.myCall(nameEx, 'GJ', 'IN');
printName.myApply(nameEx, 'GJ', 'IN');


// My polyfill for bind
Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

const myOwn = printName.myBind(nameEx, 'GJ', 'IN');
myOwn('Asia');

// Practice 2
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
