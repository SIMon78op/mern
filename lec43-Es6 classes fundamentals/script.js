// function Car(name, model, speed) {
//     this.name = name;
//     this.model = model;
//     this.speed = speed;
// }

// Car.prototype.isRuning = function() {
//     if(this.speed>0) {
//         console.log("isrunning");
//     }
//     else {
//         console.log("stop");
//     }
// };

// Car.prototype,isRuning = function () {
//     this.speed > 0 ? console.log("runninhg") : console.log("not running");
// };

// Car.prototype.changeSpeed = function(newSpeed) {
//     this.speed=newSpeed
// };

// const car1 = new Car("BMW","e20", 100);
// car1.isRuning();
// car1.changeSpeed(38);
// car1.isRuning();

// Car.prototype.printDetails = function () {
//         console.log(this.name, this.model, this.speed)
// }

//class
//class is created as there is problem  that there is not grouping as well there is no prototypee
// classe are used to groput constructor and prototypes
//
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
        this.speed = 0;
    }
//method are in protoypes
    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    isRunning() {
        this.speed > 0 ? console.log("Running") : console.log("Not Running");
    }
}

const creta = new Car("Creta", "Cr-112");
console.log(creta);


// class Attendance {
//     constructor(name, grade) {
//         this.name = name;
//         this.grade = grade;
//         this.presentdays = 0;
//         this.absentdays = 0;
//     }
// }

// markPresent() {
//     this.presentdays++; 
// }

// markAbseent () {
//     this.absentdays++;
// }

// calculateAttendance () {
//     const calculateAttendance = ((this.presentdays)/(this.presentdays + this.absentdays)) *100;
//     console.log(calculateAttendance)
// }

// const student1 = new Attendance("soyam", 10);
// console.log(student1);
// student1.markPresent();


// class Attendance {
//     constructor(name, grade) {
//         this.name = name;
//         this.grade = grade;
//         this.present = 0;
//         this.totalDays = 0;
//     }
// }

// markPresent() {
//     this.presentdays++;
//     this.totalDays++; 
// }

// markAbseent () {
//     this.totalDays++;
// }

// printAttendance() {
//     const { name, present, totalDays} = this;
//     console.log("Attendance percentage od " +name + "is " +((present / totalDays) *100).toFixed(2));
// }

// const student1 = new Attendance("soyam", 10);
// student1.markPresent();
// student1.markPresent();

// student1.markAbseent();
// console.log(markPresent);
// console.log(markAbseent);



//getters and setters in class -> this can be used for encapsulation oif data
//getter -> getter can be able to fetch the data but it can't be able to make any chage in it (read only)
//setter -> settter can be able to make changes in it but it camt be return type ... it always needs a parameter

// class Student {
//     constructor({ id, name, dob, grade}) {  //data property
//         this.id = id;
//         this.name = name;
//         this._dob = dob;
//         this.grade = grade;
//         this._marks = 0;
//     }

//     get dob() {
//         return this._dob;  // accesor property
//     }

//     set marks (newMarks) {
//         this._marks = newMarks;
//     }

//     get marks() {
//         return this._marks;
//     }
// }

// const mukesh = new Student( {
//     id: "ST-1234",
//     name: "mukesh",
//     dob: "12-2-2000",
//     grade: 10,
// });

// console.log(mukesh.dob);
// mukesh.marks = 10;
// console.log(mukesh.marks);

//static method -> belongs to class but not objects
class User {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }
    static guest() {
        return new User("guest", "guest");
    }
}

const guestUser = User.guest();


//private properties -> with the help of # it can be private 
class Bank {
    #pin = 1234;
    constructor(firstpin) {


    }

    deposit (money) {
        this.balance += money;
    }

    withdraw (userPin, money) {
        return userpin === this.#pin && this.balance >= money ? (this.balance -=money) : null;
    }

    checkBalance(userPin) {
        return userPin === this.#pin ? this.balance : null;
    }
}

const sbi = new Bank(4321);
sbi.deposit(150);
console.log(sbi.checkBalance(4321));
sbi.withdraw(431, 10);

//methods can also be private
//privatization depend on you