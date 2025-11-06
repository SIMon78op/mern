//square pattern
// let n=6;
// for(let i=1; i<=n; i++) {
//     console.log("#" .repeat(n));
// }


// let n2=5;
// for(let i=1;i<=n2;i++) {
//     let star = "";
//     for(let j=1; j<=i; j++) {
//         let star == "*";
//     }
//     console.log(star)
// }


//right angle trianle
// let n1=3;
// for(let i=1; i<=n; i++) {
//     console.log("*".repeat(i));
// }
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

//square and right angl;e
// let n = 9;
// for(let i=1; i<=n; i++) {
//     let star = "";
//     for(let j=1; j<=n; j++) {
//         star += "*";
//     }
//     console.log(star)
// }


//inverted right angle Triangle
let n = 8;
for(let i=n; i>=1; i--) {
    let row = "";
    for(let j=1; j<=i; j++) {
        row +="*";
    }
    console.log(row)

}