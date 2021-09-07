// Clear out the localStorage
localStorage.clear();

// Set the items
localStorage.setItem("id", 1);
localStorage.setItem("name", "Parth");

// Overwrite data
localStorage.setItem("id", 2);

// Get data
console.log(localStorage.getItem("name"));

// Remove data
localStorage.removeItem("id");

// Store user object
const user = {
    id: 5,
    name: "Ryan",
    address: "NY City"
};

localStorage.setItem("user", user); // Stores [object Object]

// Correct way to store object in localStorage
localStorage.setItem("user", JSON.stringify(user));

// Get the user object back from the localStorage
const userObj = JSON.parse(localStorage.getItem("user"));
console.log(userObj);