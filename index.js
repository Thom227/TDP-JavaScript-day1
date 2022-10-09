'use strict';

//Recreate the following flowchart as a loop. -> A = 100, stop looping at 200, until then print A at every iteration

//for1
for(let i = 10; i <= 20; i++) {
    console.log(i);
}

console.log("\n");

//while1
let j = 10

while( j <20) {
    console.log(j);
    j++
};
console.log(j);

console.log("\n");

//A = 100, loop until A < 200, if A % 2 == 0 print - otherwise print *
//for2 with if else if
for(let k = 10; k < 20; k++) {
    if( k % 2 == 0) {
        console.log(k + "-");
    }
    else if( k % 2 !== 0) {
        console.log(k + "*");
    }
};
console.log("\n");

//while2
let l = 10;
while(l <20 ) {
    l++
    if( l % 2 == 0) {
        console.log(l + "-");
    }
    else if( l % 2 !== 0) {
        console.log(l + "*");
    }
};

console.log("\n");

//Create a method that can print out the numbers 1-10 10 times each
for(let m = 1; m <= 3; m++) {
    for(let n = 1; n <= 3; n++) {
        console.log(n);
    }
};

//White a switch case statement which uses the current day as its expression and matches with the relevant case. Criteria: Omit a break statement if it is a weekday, until the last day -> Use a default case to handle an invalid range
switch(Sunday) {
    case 
}

