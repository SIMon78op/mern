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


//lowerBound 

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
//         let target = 0;
//  console.log("first index of " + target + " is " + firstIndexOfTarget(arr,target));


// finding square root of a numberis it square or not
// 


/* SET IN JAVSCRIPT*/

// addition and deletion of set

// let set = new  Set([3,5,1,7,9,2]);
// set.add(20);
// set.add(200);
// set.add(100);
// set.add(0);
// set.delete(3);
// console.log(set);


// //methods or steps to check if the number is present in set or not

// console.log("Checking that if 29 is in set?",set.has(29));
// console.log(set.has(3));
// console.log(set.has(20));
// console.log(set.has(100));
// console.log(set.has(1));
// console.log(set.has(2));
// console.log(set.has(9));

// //method to check the size of the set
// console.log("size of set:", + set.size);

// console.log(set.delete(9), set);



// let array = [2,3,4,1,0,1,2,3,4,5,10];
// //o/p: 2,3,4,1,0,5,10

// let set1 = new Set(array);
// let arr1 = [...set1];
// let arr11 = Array.from(set1);

// let set2 = new Set([...array]);
// let arr2 = [...set2];

// console.log({arr1, arr11, arr2, set2});


// let arr = [1, 2, 3, 2, 4, 1, 5];
// let unique = [...new Set(arr)];
// console.log(unique); // [1, 2, 3, 4, 5]


//checking if key is present or not
// let map = new Map([
//   ["name3", ["Sultan", "Sahil"]],
//   ["name4", "Sunny"]
// ]);

// map.set("name1", "Sultan");
// map.set("name2", "Sunny");

// console.log("checking if `name1` is present or not?", map.has("name1"));


// getting the value of specific key
// let map = new Map([
//   ["name3", ["Sultan", "Sahil"]],
//   ["name4", "Sunny"]
// ]);

// map.set("name1", "Sultan");
// map.set("name2", "Sunny");

// console.log("Value of `name2` key: ", map.get("name2"));


// let map = new Map([
//   ["name3", ["Sultan", "Sahil"]],
//   ["name4", "Sunny"]
// ]);

// map.set("name1", "Sultan");
// map.set("name2", "Sunny");

// console.log("Deleting `name4`: ", map.delete("name44"));

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



//HW UPPERBOUND

function lowerbound(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let index = arr.length;

    while(low<=high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] > target) {
            index = mid ;
            high = mid - 1;
        }
        else low = mid + 1;
    }
    return index;
}

let arr = [1, 3, 6, 6, 6, 11, 11, 12];
let target = 4;
console.log("lower bound of  " + target + " is " + lowerbound(arr, target));
