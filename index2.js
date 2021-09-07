// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 300;
//     return y;
// }
// a = 392;
// const xx = x();
// xx();

// function z() {
//     var b = 900;
//     return function x() {
//         var a = 7;
//         function y() {
//             console.log(a ,b);
//         }
//         y();
//     } 
//     x();
// }

// const zz = z();
// zz();

// for(let i=1; i<=5; i++)
// {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }

function x() {
    for(var i=1; i<=5; i++)
    {
        function close(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}
x();


console.log(c1);
let a1 = 5;
const b1 = 10;
var c1 = 100;

let obj = {
    employee : {
        name  : {
            fname : "amit",
            lname : "raj"
        },
        email : "amit@mail.com",
        dept : {
            pod : {
                engg : "FrontEnd"
            }
        }
    },
    user : {
        name : "ram"
    }
}
let finalObj = {};
console.log(obj);

for(let key in obj)
{
    console.log(key, obj[key]);
}

const magic = (obj, parent) => {
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            magic(obj[key], parent+"_"+key);
        }
        else {
            finalObj[parent+"_"+key] = obj[key];
        }
    }
}
magic(obj, "obj");

console.log(finalObj);