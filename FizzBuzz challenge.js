'use strict';

'use strict';

//switch loop - doestn work yet
// let x = 100;

// switch(x) {
//     case x%2 == 0:
//         console.log("-");
//     case x%2!== 0:
//         console.log("*");
//     case x == 200:
//         console.log("Finished");
//         break;



//second loop - doesnt work yet

// let x = 100

// while(x%2 == 0) {
//     console.log("-");
// } x++ 
// if(x%2 !== 0) {
//     console.log("*");
// } else if(x == 200) {
//     console.log("Finished")
// }

// let number = 100;

// while(number <=200) {
//     if(number%2 == 0) {
//         console.log("-");
//     } else {
//         console.log("*");
//     }
// }
// number ++

//FizzBuzz challenge. Multiple of 3 = Fizz
// multiple of 5 = buzz

console.log("hello")



let x = 1;

while(x < 101) {
    if(x % 3 == 0 && x % 5 == 0) {
        console.log(" FizzBuzz");
    } else if(x % 3 == 0) {
        console.log(" Fizz");
    } else if(x % 5 == 0) {
        console.log(" Buzz");
    } else {
        console.log(x)
    }
    
    x++;
}

let y = 1;




