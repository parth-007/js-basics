const initialObj = {
    a : [1,2,3],
    b : [2,3,5],
    c : [1,5],
    d : [2,3,5]
 }

 /* 
OUTPUT - 
{
   "1" : ["a","c"],
   "2" : [“a”, "b", "d"],
   "3" : ["a","b","d"],
   "5" : ["b","c","d"]
}
 */
 
let finalObj = {};//Edit this line
Object.entries(initialObj).map(entry => {
    const key = entry[0];
    const values = entry[1];

    values.map(v=>{
        if(!finalObj.hasOwnProperty(v)){
            finalObj[v] = [key];
        }
        else {
            finalObj[v].push(key);
        }
    });
 }); 
console.log(finalObj);