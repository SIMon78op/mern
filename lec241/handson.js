
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('', input => {
//   const d = Number(input);

//   let y = Math.floor(d / 365)
//   let temp = d % 365

//   let m = Math.floor(temp / 30)

//   let days = temp % 30

//   console.log(`${y} years, ${m} months, ${days} days`)

//   // TODO: Convert days into years, months, and days

//   readline.close();
// });


//usi0ng map for tajing squares of array

// arr = [3,2,5,0,10];
// let squaredArr = arr.map((value, index, array) => {
//     console.log(value*value);
// });
// console.log({ squaredArr});




// let arr= [4,2,7,2,9,23,14];
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



// let arr = [4,6,3,1,7,96,34];
// let sum = arr.reduce((accumulator, val, index, array) => {
//   accumulator += val;
//   return accumulator;
// }, 0);

// console.log({ sum });



// sum of two integer

// let aarr1 = [2,3,5,1,87,23];
// let sum1 = aarr1.reduce((accumulator,val,index,array) => {
//  accumulator += val;
//  return accumulator;
// }, 0);
// console.log({sum1});



// it will count the number of even numbers
let arr = [2,4,6,8,3,45,2];
// let count = arr.reduce((accumulator, val, index, array) => {
//   accumulator += val%2 ==0;
//   return accumulator;
// }, 0);

// console.log({count});


// let count = arr.reduce((accumulator, val, index, array) => {
//   accumulator += val % 2 == 0;
//   return accumulator;
// }, 0);

// console.log({ count });



const users = [
  { name: "Alice", age: 25, isActive: true },
  { name: "Bob", age: 30, isActive: false },
  { name: "Charlie", age: 22, isActive: true },
  { name: "Diana", age: 28, isActive: false },
  { name: "Ethan", age: 35, isActive: true },
];

/* q3 function to create an array of names from above users */
//  let nameFromUser = users.map((val, index, array) => {
//   nameFromUser += val;
//  });
//  console.log({nameFromUser })

//  function getUserNames(users) {
//   return users.map(user => user.name);
// }

// console.log(getUserNames(users));



let a1 = users.map((a) => {
  return a.name; 

});
console.log(a1)



/* Q3: function to create an array of names from above users 
o/p: ["Alice", "Bob", "Charlie", "Diana", "Ethan"]
*/
/* Q4: function to display all the active users from above users array */

const activeUsers = users.filter((a) => a.isActive)
console.log(activeUsers);


/* Q5: function to find the sum of age for all users below 30 */
let under30 = users.filter((a) => a.age<30);
let sumUnder30 = under30.reduce((a,val) => {
  a += val.age;
  return a;
}, 0)

console.log(sumUnder30);


/* Q6: function to get the names of all active users  */
let a2 = activeUsers.map((a) => {
  return a.name;
});
console.log({a2});