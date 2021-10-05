for (var i = 0; i < 4; i++ ) {
    setTimeout( function () {
    console.log(i)
    }, 2000)}


function x() {
    var a = 12;
    // return () => {
    //     console.log("GG", this);
    //     console.log(a);
    // }
    return function () {
        var b = 1;
        console.log(a, b, this);
    }
}

const k = x();
console.log(k);
k();



function sum() {
    return function a(x) {
        return function b(y) {
            return function c(z) {
                return x + y + z;
            }
        }
    }
}

function add2() {
    return function(x) {
        return x + 2;
    }
}

console.log(add2()(10));

console.log(sum()(2)(4)(5));