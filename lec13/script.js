
            //Binary Search*
            //   when to apply.... search space must me sorted
            //  how to apply binary search.... answer will always come at mid.... otherwise look for arr in left/right

            //Q. find the square root of N , in O(logN) time   (binary)
            //  low= 0
            //  high= N
            //  A) if right range is getting eleminated ... then high become mid-1;
            //  B) if left range is getting eleminated ... then low will become mid+1;


            // /* Q. find the square root of N , in O(logN) time
            
// let N = 39;

// function squareRoot (N) {
//     let low = 0;
//     let high = N;

//     while(low<=high) {
//         let mid = Math.floor(low + (high - low) / 2);
//         let midSquare = mid * mid;

//         if(midSquare ==N) {
//             return mid;
//         }
//         else if(midSquare > N) {
//             high = mid - 1;
//         }
//         else{ //midSquare < N
//             low = mid +1;
//         }
//     }
//     return -1;
// }
// let sqrt = squareRoot(N);

// if(sqrt != -1)
//     console.log("Square root of " +N + " is " +sqrt);
// else
//     console.log(N + " is not a perfect square");


// find a target element in a sorted array and print its index

// let arr = [1, 2, 3, 6, 7, 9, 11, 15];
// let target = 11;
// function findTarget (arr, target) {
//     let low = 0;
//     let high = arr.length-1;

//     while(low<=high)
//     {
//         let mid =Math.floor(low + (high - low)/2);
//         let elem = arr[mid]

//         if(elem == target){
//             return mid;
//         }else if(elem > target)
//     {
//          high = mid-1;
//     }
//     else(elem < target)
//     {
//          low = mid+1;
//     }
//     }
    
//     return -1;
// }

// console.log(findTarget(arr, target));


//function to find the first index of target in a sorted array
// function firstIndexOfTarget (arr, target){
//     let low = 0;
//     let high = arr.length-1;
//     let index = -1;


//     while(low<=high)
//     {
//         let mid =Math.floor(low + (high - low)/2);
        

//         if(arr[mid] == target){
//             index = mid;
//             high = mid - 1;
//           }
//              else if(arr[mid] > target)
//               {
//                 high = mid - 1;

//                  }
//                    else {
//                         low = mid + 1;
//                          }
//              }

// return index;
//             }
//         let arr =[1,3,6,6,11,11,13];
//         let target = 11;
//  console.log("first index of " + target + " is " + firstIndexOfTarget(arr,target));

//lowerbound >  first index of target element .... first index of element greater than or equal to target element
//upperbound >  first index of element thats just greater than the target element


// function lowerbound(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let index = arr.length;

//     while(low<=high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (arr[mid] >= target) {
//             index = mid ;
//             high = mid - 1;
//         }
//         else low = mid + 1;
//     }
//     return index;
// }

// let arr = [1, 3, 6, 6, 6, 11, 11, 12];
// let target = 0;
// console.log("lower bound of  " + target + " is " + lowerbound(arr, target));

/* HW: Implement Upeerbound Function */


/* set in JS */

// set > only unique data in present
// map > contain key value pairs .. key must be different across all pairs ... key can be anything

// let set = new Set ([1, 2, 3, 4, 5]);
// console.log({set});
// set.add(6,7);
// console.log({set});

// // method to check if number is in set or not
// console.log(set.has(4));
// console.log("checking if 200 is in set", set.has(200));

// console.log("size of set", set.size);
// console.log(set);
// console.log(set.delete(4), set);


// //remove duplication from the array
// let array = [2,3,4,1,0,1,2,3,4,5,10];
// // let set1 = new Set(array);
// // let arr1 = [...set1];
// // let arr11 = array.from([set1]);
// // console.log(arr1, [...set1]);


// let set1 = new Set(array);
// let arr1 = [...set1];
// let arr11 = array.from(set1);

// let set2 = new Set([...array]);
// let arr2  = [...set20];

//     console.log({array, arr1, arr11, arr2});





/* map in js*/

// let map = new Map([
//     ["name3", "Sultan"],
//     ["name4", "Sunny"]
// ]);
// map.set("name1", "Su;tan");
// map.set("name2", "Sunny");
// console.log("checking if'name1' IS PRESENT OR NOT?", map.has("name1"));

// console.log("value of 'name2' key:", map.get("name2"));

// console.log("deletig 'name4' ", map.delete("name4"));


// //
// for(let i of map)
// {
//     console.log("keys:"+i[0])
// }






// /* question find the frequency of each element in the arr*/
// let arr3 =[2,3,4,1,0,1,2,3,4,5,10];

// /* question find intersection and union*/
// let arr4 = [1,2,4,5,6], arrr5 = [2,5,6,3,1,3];
// //intersection: 1,2,5,6
// //union: 1,2,3,4,5,6

// //const unionArr = [...new Set([...arr4, ...arr5])];




// function lowerbound (arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   let index = arr.length;

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);

//     if(arr[mid] >= target){
//       index = mid;
//       high = mid - 1;
//     } else low = mid + 1;
//   }

//   return index;
// }

/* H.W: Implement Upperbound Function */

/* SET in JS */
// let set = new Set ([1,2,4,4,5,6]);

// // method to add element in set
// set.add(200);
// set.add(2);
// set.add(3);

// console.log(set);

// // method to check if a number is in set or not
// console.log("checking if 30 is in set?", set.has(30));
// console.log("checking if 200 is in set?", set.has(200));

// console.log("Size of set: " + set.size);

// console.log(set);
// console.log(set.delete(4), set);


// /* Remove duplicates from the array */
// let array = [2,3,4,1,0,1,2,3,4,5,10];
// //o/p: 2,3,4,1,0,5,10

// let set1 = new Set(array);
// let arr1 = [...set1];
// let arr11 = Array.from(set1);

// let set2 = new Set([...array]);
// let arr2 = [...set2];

// console.log({array, arr1, arr11, arr2});


/* MAP in JS */
// let map = new Map([
//   ["name3", ["Sultan", "Sahil"]],
//   ["name4", "Sunny"]
// ]);

// map.set("name1", "Sultan");
// map.set("name2", "Sunny");

// //checking if a key is present or not
// console.log("checking if `name1` is present or not?", map.has("name1"));

// //getting the value of a specific key
// console.log("Value of `name2` key: ", map.get("name2"));

// //deleting a key in map
// console.log("Deleting `name4`: ", map.delete("name44"));

// //
// for(let i of map){
//   console.log("key: " + i[0], ", Value: " + i[1]);
// }

// console.log("Printing keys");
// for(let i of map.keys()){
//   console.log(i);
// }

// map.set("name1", "Sargar");

// const mapArr = [...map];
// console.log("Map converted into Array", {mapArr});



//HW
// let arr3 = [2,3,4,1,0,1,2,3,4,5,10];
// let freq = {};

// for (let num of arr3) {
//   if (freq[num]) {
//     freq[num]++;
//   } else {
//     freq[num] = 1;
//   }
// }

// console.log(freq);



//hw
// let arr4 = [1,2,4,5,6,3];
// let arr5 = [2,5,6,3,1,3];

// let union = [...new Set([...arr4, ...arr5])];
// console.log("Union:", union);



let arr4 = [1,2,4,5,6,3];
let arr5 = [2,5,6,3,1,3];

let intersection = arr4.filter(num => arr5.includes(num));
intersection = [...new Set(intersection)];
console.log("Intersection:", intersection);