function User(name, age, loc) {
    this.name = name;
    this.age = age;
    this.location = loc;
}

const user1 = new User("Parth", 23, "Surat");

// 2 Ways to access Object properties
console.log("Name:", user1['location']);
console.log("Age:", user1.age);

// Get the values array
console.log(Object.values(user1));

// Get the keys array
console.log(Object.keys(user1));

// Key-Value pair array
console.log(Object.entries(user1));

// Add a property
const newUser = {
    ...user1,
    school: "GVB"
}

// Combine obj [Add newUser into user1]
const combinedObj = Object.assign(user1, newUser);
console.log(combinedObj);

// Can change name
user1.name = 'Virat';

// Freeze the object, Addition, Updation, Deletion not allowed
Object.freeze(user1);
user1.name = 'Pa'; // No change
user1.city = 'Surat'; // No change
console.log(user1); // No change

console.log(Object.isFrozen(user1)); // Returns true

// Seals the object, No addition and deletion is allowed, updatation allowed
Object.seal(newUser);

newUser.name = 'Parth1'; // Change
newUser.state = 'GJ'; // No change
console.log(newUser); // name gets updated

console.log(Object.isSealed(newUser)); // True
console.log(Object.isSealed(user1)); // True

// Not allowed
delete newUser['school'];

const user2 = new User('Ryan', 20, 'NY');
user2.state = 'TX';

delete user2.state;
console.log(user2); // State property is deleted now.

// Check for property
console.log('state' in user2);
console.log('age' in user2);

// Key value pair print
for(key in user2) {
    console.log(key + "->" + user2[key]);   
}

// Assign a method
user2.greet = function(){
    console.log("Good morning");
}
user2.greet();

// User3
const user3 = {
    firstName: 'Luke',
    lastName: 'Ronchie',
    greet: function() {
        console.log("Hello," + this.firstName + " " + this.lastName);
    }
}
user3.greet();

const obj = {
    firstName: "A",
    lastName: "B"
}
const obj2 = {
    firstName: "C",
    lastName: "D"
}

// Call
user3.greet.call(obj2);