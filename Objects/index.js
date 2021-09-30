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
console.log(obj);
let finalObj1 = {};
let finalObj2 = {};

const magic1 = (obj, parent) => {
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            magic1(obj[key], parent+"_"+key);
        }
        else {
            finalObj1[parent+"_"+key] = obj[key];
        }
    }
}
magic1(obj, "obj");
console.log(finalObj1);

const magic2 = (obj, parent) => {
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            if(parent==="") 
                magic2(obj[key], key);
            else
                magic2(obj[key], parent+"."+key);
        }
        else {
            finalObj2[parent+"."+key] = obj[key];
        }
    }
}

magic2(obj, "");

console.log(finalObj2);