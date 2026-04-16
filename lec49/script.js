
class Employee {
  constructor({ name, gender, id, designation, joiningDate, salary }) {
    this.name = name;
    this.gender = gender;
    this.id = id;
    this.designation = designation;
    this.joiningDate = joiningDate;
    this.salary = salary;
  }

  checkIn(time) {
    this.checkInTime = time.toLocaleTimeString();
  }

  checkOut(time) {
    this.checkOutTime = time.toLocaleTimeString();
  }

  /*   Fix this function: totalTimeToday() {
      if (!this.checkInTime || !this.checkOutTime) {
        console.log("Check in or Check out missing!!");
        return;
      }

    } */
}

const employee = new Employee({
  name: "Prasant",
  gender: "male",
  id: "EMP-1234",
  designation: "Junior Software Engineer",
  joiningDate: new Date(),
  salary: 600000,
});

console.log({ employee });

document.querySelector("button:first-of-type").addEventListener("click", () => {
  employee.checkIn(new Date());
});

document
  .querySelector("button:nth-of-type(2)")
  .addEventListener("click", () => {
    employee.checkOut(new Date());
    console.log(
      `Check in: ${employee.checkInTime} \nCheck out: ${employee.checkOutTime}`
    );
  });

class Manager extends Employee {
  constructor({ employeeDetails, subordinates }) {
    super(employeeDetails);
    this.subordinates = subordinates;
  }
}

const employeeDetails = {
  name: "Riya",
  gender: "female",
  id: "EMP-1235",
  designation: "Software Engineer",
  joiningDate: new Date(),
  salary: 600000,
};

const manager = new Manager({ employeeDetails, subordinates: ["e1", "e2"] });
console.log(manager);

document
  .querySelector("button:nth-of-type(3)")
  .addEventListener("click", () => {
    manager.checkIn(new Date());
  });

document
  .querySelector("button:nth-of-type(4)")
  .addEventListener("click", () => {
    manager.checkOut(new Date());
    console.log(
      `Check in: ${manager.checkInTime} \nCheck out: ${manager.checkOutTime}`
    );
  });

/* create an Animal class, and then create a Dog class & Cat class, 
inherit the property from Animal for both Dog & Cat class  */

class Animal {
  constructor({ name, age, color }) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  speak() {
    console.log("Speak method inside Animal class");
  }
}

const dogBasicDetails = {
  name: "Dogesh",
  age: 10,
  color: "brown",
};

const catBasicDetails = {
  name: "Billa",
  age: 3,
  color: "white",
};

class Dog extends Animal {
  constructor(dogBasicDetails) {
    super(dogBasicDetails);
  }
}

class Cat extends Animal {
  constructor(catBasicDetails) {
    super(catBasicDetails);
  }

  speak() {
    console.log("meow meow meow meow!!");
  }
}

const catInstance = new Cat(catBasicDetails);
const dogInstance = new Dog(dogBasicDetails);

console.log({ catInstance, dogInstance });

catInstance.speak();
dogInstance.speak();


//if method is not found in current class,it finds it in its parent class 
       //and repeats the same till it gets it
       //here speak method of dog class is accessed from its parent class animal

       //when a child class calls super then
       //1.it calls parent class constructor
       //2.that parent constructor sets up all the properties
       //3.when parent is constructing properties then it actually is constructing
       //on this of child class

       //super keyword in respect to parent class
       //1.sets constructor properties 
       //2.it actually is constructing this of child class

       //pillars of oop
       //1. Encapsulation->used to protect sensitive information private keyword
       //2. Inheritance->'is a' relationship between child and parent class
       //parent class has specific features
       //eg.Cat is an animal,Motorcycle is a vehicle
       //3. Polymorphism->a method existing in many forms
       //poly=many morph=forms
       //different classes can implement methods of same name
       //4. Abstraction->Hiding Implementation(protection of business logic)
      //5  Composition->'has a' relationship between classes
      //eg.profile,account->profile has a account