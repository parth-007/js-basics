// Closures
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

function outest(c) {
    function outer(b) {
        // let a=10;
        function inner() {
            console.log(a, b, c);
        }
        return inner;
    }
    return outer;
}
let a = 100;
outest("JK")("hello")();

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

function outest() {
    return function outer(b) {
        return function inner(a) {
            return a + b;
        }
    }
}
console.log(outest()(22)(1));

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