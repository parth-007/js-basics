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

// Freeze the object, Addition, Updation not allowed
Object.freeze(user1);
user1.name = 'Pa'; // No change
user1.city = 'Surat'; // No change
console.log(user1); // No change

console.log(Object.isFrozen(user1)); // Returns true

// Seals the object, No addition allowed, updatation allowed
Object.seal(newUser);

newUser.name = 'Parth1'; // Change
newUser.state = 'GJ'; // No change
console.log(newUser); // name gets updated

console.log(Object.isSealed(newUser)); // True
console.log(Object.isSealed(user1)); // True