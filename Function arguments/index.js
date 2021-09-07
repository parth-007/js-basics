const radius = [1,2,3,4];
const calculateArea = function (radius)  {
    const output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

const calculateDiameter = (radius) => {
    const output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));

const calculateCircumference = function (radius)  {
    const output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(Math.PI * 2 * radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

const area = (radius) => {
    return Math.PI * radius * radius;
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const calculate = (radius, logic) => {
    const output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(logic(radius[i]));
    }
    return output;
}

// Does not work with Arrow function
Array.prototype.calculateResult = function (logic) {
    const output = [];
    for(let i=0; i<this.length; i++)
    {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(radius.map(area));
console.log(radius.calculateResult(area));
