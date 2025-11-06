// const symbol=" *";
// for(let i=0; i<=5; i++) {
//     console.log(symbol.repeat(i));
// }

//number of character
// const userName = "Soyam Gaurishankar Ingale";
// let count = 0;
// for(let i=0; i<userName.length; i++)
// {
//     count++;
// }
// console.log("number of character in string", {count});

// let reminder;
// for(let i=1; i<=101; i++)
// {
//     reminder = i%2;
//     if(reminder ===0 )
//     {
//         console.log({i},"is an even number") 

//          }
// }



// let inputString = "Hello , I love GFG..";

// let vowels = "aeiou";
// for(let i=0; i<inputString.length; i++) {
//     if(vowels.includes(inputString[i])) {
//         console.log({i});
//      }
//      else {
//         console.log({i});
//      }
// }


// let i=0;
// while(i<10) {
//     console.log(i);
//     i = i+1
// }
// console.log("execution done");

// 

// const userName = "Soyam";
// try{
//     console.log(myName);
// }
// catch(error) {
//     console.log("error occured");
// }

// console.log(userName);

//function declaration 
// function greetMessage(name,city) {
//     console.log((name),"welcome to gfg");
//     console.log("thank you for joining from",(city));
// }
// //calling function
// greetMessage("soyam","pune");
// greetMessage("soyam","mumbai");
// greetMessage("soyam","bangalore");
// greetMessage("soyam","chennai");
// greetMessage("soyam","delhi");
// greetMessage("soyam","kolkatta");



function calculateSum(min, max) {
    let sum = 0;    
    
    for(let i=min; i<=max; i++) {
        sum++;

    }
    return sum;
}
let result = calculateSum(1,14);
console.log(result)