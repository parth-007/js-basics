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