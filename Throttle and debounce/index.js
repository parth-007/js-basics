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
