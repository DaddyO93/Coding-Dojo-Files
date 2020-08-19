// How would you print/log John's age?

var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

for (var find in users) {
    if (users[find].name == "John") {
        console.log(users[find].age)
    }
}

// How would you print/log the name of the first object?

console.log(users[0].name);

// How would you print/log the name and age of each user using a for loop?  

for (i in users) {
    console.log(users[i].name, `-`, users[i].age);
}