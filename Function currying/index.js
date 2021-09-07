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