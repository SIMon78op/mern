import { add } from "./calculator.js";
import subtract from "./calculator.js";
console.log(add(2,3))

import printNumber from "./print.js"
console.log(printNumber(String, x))
//npm = default package manager for nodejs => handle the packages 
//npx = (node package execute) command line tool bundled with npm => execute package  
// node module= actual source of dependency packages
//package.json => script file => it hold essential metadata like project name , version and author => manage dependency and defining custom script

axios
.get("https://jsonplaceholder.typicode.com/todos/1")
.then((result) => {
    console.log(result)
})