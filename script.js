
// const obj = {
//     property1: "Property one",
//     property2: "Property two"
//     1 :"one"
// }
// console.log(obj["propert3"])
// console.log(obj.property3);
// console.log(obj[1]);

// //creating a new project
// obj.property3= "propert3";
// console.log({obj});

// //object keys

// obj.property3 =(






// // )




// let str ='a';
// console.log(typeof str);

// str = 'abc';
// console.log(typeof str);

//  str ="abc";
// console.log(typeof str);

// str = ['a','b','c'];
// // console.log(typeof str);
// // console.log(typeof str[0]);


// // //string using backticks
// // str = 'ab';
// // console.log(typeof str);


// // str = "Hi im soyam";
// // console.log(str);


// // str = 'Hi you must do "java" classes';
// // console.log(str);

// // str = 'Hi im soyam and you must do "javascript" classes';
// // console.log(str);

// // let personName = "Vaibhav";
// // str = 'Hi im SpersonName} and you must take"javascript" classes;
// // console.log(str);



// str = "We are going to see some method of string";
// console.log(str.includes('going'));

// console.log(str.replace("W" , 'X'));

// console.log({str});

// console.log(str.replace("W", 'X'));
// console.log({str});



// //trim ... remove all leading and trailing spaces
// console.log(str);
// console.log(str.trim());
// console.log({str});


// //substring(>>> gives substring --.> doesent change the original string
// console.log(str.substring(3, 9));  //gives substring starting from 3 and ending at 8
// console.log(str.substring(3));  //gives substring starting from index=3 till end
// console.log(str.substring("3"));
// console.log(str.substring(-3));
// console.log(str.substring(-3, 1000));




// //slice() --> almost same as substring but changes -ve differently
// console.log(str.slice(3)); //(3,n)
// console.log(str.slice(3, 5));//gives element from index = 3
// console.log(str.substring(-3));// gives last 3 element
// console.log(str.slice());

// console.log(str.slice(-100));// gives all element in case the number is greater than the length of the string
// console.log(str.slice(-9, -3)); 
// console.log(str.slice(-3, 0));// gives empty string as end is smaller than start

// //split() -->split the string based on given charecter

// console.log(str.split(","));
// const line = "Hello welcome to mern stack course";
// console.log(line.split(" "));

// //toUppercase
// console.log("hello".toUpperCase());


// /*Wrapper object==== */
// const string = "Vaibhav";
// const number = 67;
// const bool = true;
// const object = {
//     name: "Vaibhav"
// };

// console.log(string._proto);
// console.log(number._proto_);
// console.log(bool._proto_);
// console.log(object._proto_);

// console.log(Number("123"));


/* Spread & Rest operator */

//Rest operator-->combine all the argument and transform them into array

function addStudent (student,studentName)
{
student.push(studentName);
for(let student of studentName);
console.log(students);
}
const students = ["Rahul", "Riya", "Prem"];
addStudent(students, "Abhishek");
addStudent(students, "Pratik");
addStudent(students, "Surabhi");

//destructuring
const [hi, ...bye] = ["Hi", "Bye", "Byee", "Byee"];
console.log({hi,bye});


//spread operator
const arr1 = [1, 3, 5, 6];
console.log({arr1});
console.log("spreaded array: ", [0, ...arr1, 67, 678,68]);
