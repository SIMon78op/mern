
// arr = [3,2,5,0,10];
// let squaredArr = arr.map((value, index, array) => {
//     console.log(value*value);
// });
// console.log({ squaredArr});

/* reduce() -> HOF */

// let arr= [2,5,3,10,34];
// function arraSum(array)
// {
//     let sum = 0;
//     for(let num of array)
//     {
//         sum+=num;
//     }
//     return sum;
// }

// arr.reduce((accumulator, val, index, array) => {
//     accumulator += val;
//     return accumulator;
// }, 0);

// console.log({sum });



//find the count of even number

// let arr1 = [2,4,3,10,34];
// for(let i=0; i<arr1.length; i++)
// {

//     if(val%2 ==0)
//     {
//         console.log("1")
//     }
//     else{
//         console.log("0")
//     }
// }

// let arr = [2,5,3,10,34];
// let count = arr.reduce((accumulator, val, index, array) => {
//     accumulator += val % 2 ==0;
//     return accumulator;
// }, 0);

// console.log({count});


//find the frequency of each element

// let fruits = ["apple", "guava", "kiwi", "guava", "kiwi", "Apple", "Guava"];

// function frequency(fruits) {
//     let obj = {};

//     for(let i in fruits) {
//         obj[fruits[i].toLowerCase()] = (obj[fruits[i].toLowerCase()]  || 0) +1;
//     }
//     return obj;
// }

// console.log(frequency(fruits));



//using reduce()
// let fruits = ["apple", "guava", "kiwi", "guava", "kiwi", "Apple", "Guava"];
// let freq = fruits.reduce(( frequency, value, index, array) =>
// {
//     frequency[fruits.toLowerCase()] = (frequency[fruits.toLowerCase()] || 0) +1;
//     return frequency;
// }, {});

// console.log({freq});


// find(
//- return a value
//- return the first element that matches the condition

// let findKiwi = fruits.find((val, index, arr) =>  val.toLowerCase() === "kiwi");
// console.log(findKiwi);


/* given an array of object , containing details of users , console the name of first user aged above 30 */

// const user = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30},
//     { name: "Charlie", age: 22 },
//     { name: "Diano", age: 28 },
//     { name: "Ethan", age: 35 }
// ];

// let age = user.find(( val, index, array) => {
// return val.age>30; 
// });

// console.log({age});




/* q2 print the name & age of each user*/
// let name = user.forEach((val, index, array) => {
// });
// console.log(val.name, val.age );



/* ====== passing a function as an argument &  returning a function */

function calculator(a,b, operation) {
    return operation(a, b);
}

function add(a,b) {
    return a+b;
}

function multiply(a,b) {
    return a*b;
}

function substract(a,b) {
    return a-b;
}

let sum34 = calculator(3,4, add);
console.log({sum34});


/* =======Error Handling =====*/
try {
  // console.log(studentName);
  let studentName = "Pratik";
  console.log(studentName);
  if (studentName === "Pratik") throw new Error("Pratik found!!");
} catch (error) {
  console.log(error.message);
  console.log(error.name);
  console.log(error.stack);
} finally {
  console.log("In finally block");
}

console.log("after try catch block");


/* 
once --> restricts a function to be called more than once
memoization --> if a function is called with same args as before, it will not calculate the result again, 
                it will find the result from a cache where result of 
                previous function call with same args is stored
*/