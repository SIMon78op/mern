
// let arr4 = [1,2,4,5,6,3], arr5 = [2,5,6,3,1,3];

//intersection: 1,2,5,6
//union: 1,2,3,4,5,6 (order may be different based on intersection )
// const unionArr = [...new Set([...arr4, ...arr5])];
// const unionSet = new Set([...arr4, ...arr5]);
// const unionArr = [...unionSet];
// console.log({unionArr});


// // intersection

// let intersection = [];
// let arr4Set = new Set(arr4);

// for(let i=0; i<arr5; i++)
// {
//     if(arr4Set.has(arr5[i])) {
//         intersection.push(arr5[i])

//     }
// }


// intersection = [...new Set(intersection)];

// /*another waay to execute above line 
// let intersectionSet = new Set(intersection);
// intersection = [...intersectionSet];
// */
// console.log({intersection});


/* frequency8 */

// let arr3 = [2,3,4,1,0,1,2,3,4,5,10];

// let map = new Map();

// for(let i=0; i<arr.length; i++)
// {
//     if(map.has(arr[i]))
//     {
//         map.set(arr[i], map.get(arr[i]) +1);
//     }
//     else {
//         map.set(arr[i], 1);
//     }
// }

// for(let key of map.keys())
// {
//     console.log(key, map.get(key));
// }

// for(let [key, value] of map)
// {
//     console.log(key, value)
// }

/* about rest operatore and destributors
const [a, ...b] = [1,2,4,5];
console,log({a,b}) */

// let arr3 = [2,3,4,1,0,1,2,3,4,5,10];

// let map = new Map();

// for(let i=0; i<arr.length; i++)
// {
//     if(map.has(arr[i]))
//     {
//         map.set(arr[i], map.get(arr[i]) +1);
//     }
//     else {
//         map.set(arr[i], 1);
//     }
// }

// let obj = {};

// console.log("Method 1 of printing")

// for(let key of map.keys())
// {
//     console.log(key, map.get(key));
// }

// console.log("method 2 of printing");
// for(let [key, value] of map)
// {
//     console.log(key, value)
// }


/* question remove duplicate from an array and print yhe array */
// arr = [1,2,3,2,3,5,1,3,2];
// console.log(...new Set(arr));


/* Anagrams*/

// find thye frequency of all words in a paragraph (only spaces , A-Z & a-z letter will be there)

// const paragraph = "Hello how are you HoW was your day Did you eat how did you find that";
// let arr = paragraph.toLowerCase().split(" ");
// let map = new Map();
// for(let key of arr)
// {
//     if(!map.has(key))
//     {
//         map.set(key,1);
//     }
//     else {
//         map.set(key,map.get(key) +1);
//     }
// }
// for(let [key,val] of map)
// {
//     console.log(key,val)
// }


// another way

// let words = paragraph.trim().toLowerCase().split(" ");

// let wordsmap = new Map();

// for(let i=0; i<words.length; i++)
// {
    // if(wordsmap.has(words[i]))
    // {
    //     wordsmap.set(words[i], wordsmap.get(words[i]) + 1);
    // }
    // else{
    //     wordsmap.set(words[i], 1);
    // }

//     wordsmap.set(words[i], (wordsmap.get(words[i] )  || 0) +1);
// }

// let wordsFreq = {};

// for(let [key,value] of wordsmap) wordsFreq[key] =value;
// console.log(wordsFreq);



/* ============== Anagrams ============ */
/*
when two words have same exact letters but order may change

listen 
silent

mad 
dam

apple
aplee(not anagrams)

*/ 


// let str1 = "silent";
// let str2 = "listen";
// let map = new Map();


// for(let num of map)
// {
//     if(map.has(num))
//     {
//         map.set(num, 1)
//     }
//     else{
//         map.set(num,map.get(num) +1)
//     }
// }

// for(let [num,val] of map)
// {
//    console.log(num, val);
// }



// let a = "silent";
// let b = "listen";
// //create a map of silent then traverse in listen and start decreasing the freq of element if it exist in map
// // tc = O(m+n)
// //
// function isAnagram(a,b){
// let freqObj = {};

// for(let i=0; i<a.length; i++) {
//     freqObj [a[i]] = (freqObj[a[i]]  || 0) +1;
// }

// for(let i=0; i<b.length; i++)
// {
//     if(!freqObj[b[i]])
//     {
//         return false;
//     }
//     freqObj[b[i]] = freqObj[b[i]] -1;
// }

// for(let value of Object.values(freqObj))
// {
//   if(!i)
//     {
//         return false;
//     }
//     return true;
// }
// }

// console.log(isAnagran(a,b));





/* Recursion */

// TC - o(N),
//SC _ O(1), however it uses call stack space, but this is not considered in space complexity

/* two things to look for correct recursive code

A. base condition must always get hit
B. Combining return value of recursive function and current function */

// function factorial(N) {

//     if(N==0)
//     {
//         return 1;
//     }
//     let fact = N * factorial(N-1);
//       return fact;
// }
// /* bahane dhundne h ki recursive function ko kaise reuse kar sake */
// console.log(factorial(5));
// console.log(factorial(99));
// console.log(factorial(0));
// console.log(factorial(9));


/* print number from 1 to N */

// function print1ToN (N)
// {
//     if(N==1)
//     {
//         return 1;
//     }
//     print1ToN(N-1);
//     console.log((N));
// }
// print1ToN(18);


function print1toN (N)
{
    if(N==0)
    {
        return ;
    }
    print1toN(N-1);
    console.log(N);
}
print1toN(6);