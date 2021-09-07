// let nameEx = {
//     firstName: "Parth",
//     lastName: "Mangukiya"
// }

// const printName = function(state, country, continent) {
//     console.log(this.firstName + " " + this.lastName + " "  + state + " " + country + " " + continent);
// }

// printName.call(nameEx, 'GJ', 'IN');
// printName.apply(nameEx, ['GJ', 'IN']);
// const printNameAfter = printName.bind(nameEx, 'GJ', 'IN');
// printNameAfter();

// console.log("Own");

// Function.prototype.myCall = function (obj, ...args) {
//     obj.fn = this;
//     obj.fn(...args);
// }

// Function.prototype.myApply = function (obj, ...args) {
//     obj.fn = this;
//     obj.fn(...args[1]);
// }

// printName.myCall(nameEx, 'GJ', 'IN');
// printName.myApply(nameEx, 'GJ', 'IN');


// My polyfill for bind

// Function.prototype.myBind = function (...args) {
//     let obj = this;
//     let params = args.slice(1);
//     return function(...args2) {
//         obj.apply(args[0], [...params, ...args2]);
//     }
// }

// const myOwn = printName.myBind(nameEx, 'GJ', 'IN');
// myOwn('Asia');

