//constructor

function Person(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
    this.printDetails = function() {
       console.log(`${this.name} is ${this.age} years old and living in ${this.city}in the ${this.country}`);
    };
};

const person1 = ("Rohan", 22, "Hyderabad", "India");

console.log(person1)


//prototype
// function Student(name,age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
// }

// Student.prototype.greetMe = function(name) {
//     console.log("Hi " + this.name);
// };

// const Student1 = new Student("Rajesh", 25, 10);
// Student1.greetMe(Student1.name);
