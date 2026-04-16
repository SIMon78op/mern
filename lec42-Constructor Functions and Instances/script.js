const user1 = {
    name : "Soyam",
    age: 22,
    city: "Wardha",
    printDetails: function() {
        console.log(`
            ${this.name} is ${this.age} years old and currently living in ${this.city}`
        );
    },
};

const user2 = {
    name : "Gaurav",
    age: 22,
    city: "Amravati",
    printDetails: function() {
        console.log(`
            ${this.name} is ${this.age} years old and currently living in ${this.city}`
        );
    },
};

const user3 = {
    name : "Rohan",
    age: 22,
    city: "Nagpur",
    printDetails: function() {
        console.log(`
            ${this.name} is ${this.age} years old and currently living in ${this.city}`
        );
    },
};

//constructor
function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.printDetails = function () {
        console.log(`${this.name} is living in ${this.city}`);
    };
}

const user4 = new User("Vivek", 10, "Nashik");
const user5 = new User("Devanshu", 22, "Rohna")

//using objects created from constructor -> it is same as user1
console.log(user4.name);
console.log(user4.printDetails())

//conventional/ traditional way of using objects
console.log(user1.printDetails());
console.log(user1.name);

console.log(user5.printDetails());

console.log(user1.name.__proto__);

function normalFunction() {
    console.log(this); //by default function has global object stored on `this` 
}

console.log(normalFunction());


//creating an array of object using constructor
const names = ["Soyam", "Gaurav", "Vivek", "Om"];
const age = [22, 23, 24, 25];
const city = ["Pune", "Mumbai", "Delhi", "Bangalore"];

const objArray = [];
function Person(name, age, city) {
    this.names= name;
    this.age= age;
    this.city= city;
}
for(let i=0; i<=names.length; i++) {
    let temp = new Person(names[i], age[i], city[i]);
    objArray.push(temp);
}

console.log(objArray)

//creating the array of product by instances 

function Product(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.total = price * qty;
}
const product1 = new Product("Bottle", 20, 4);
const product2 = new Product("Bowl", 20, 3);
const product3 = new Product("Glass", 20, 6)

console.log(product1, product2, product3);


//prototypes

const boolean = true;
const string = "true";
const number = 233;
const arr = [1,3,5];

console.log(boolean.__proto__);
console.log(string.__proto__)
console.log(number.__proto__)
console.log(arr.__proto__)


function Student(name,age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

Student.prototype.greetMe = function(name) {
    console.log("Hi " + this.name);
};

const Student1 = new Student("Rajesh", 25, 10);
Student1.greetMe(Student1.name);
