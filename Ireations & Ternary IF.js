'use strixt';

//Iteration == loops

//FOR loop runs while a condition is met
//i for iteration = convetional way just

for(let i = 0; i < 3; i++) {
    console.log(`i = ${i}`);
}


//for loop(initialisation;condition;iterator){statement}
for(let i = 0; i <=10; i++) {
    console.log(i);
}


//WHILE loop work with BOOLEANs primarily, run untill a condition is no longer true

let  condition = true;
let increment = 0;

while(condition === true) {
    console.log(`increment = ${increment}`);
    increment ++;

    if(increment === 3) {
        condition = false;
    }
}

//DO-WHILE is like a while loop but will ALWAYS run atleast once

let z = false;
do{
    console.log("Run forest run");
} while(z === true);

//SWITCH CASES will run a break or return. Can be much more effective than large if-else-if statement


let num =3;
switch(num) {
    case 0:
        console.log("Number is zero");
        break;
    case 1:
        console.log("We are number one");
        break;
    case 3:
        console.log("We're at 3");
        break;
    case 4:
        console.log("We made it to 4");
        break;
    default:
        console.warn("Not here");
}

let strictA = true;
let strictB = 1;
console.log(strictA == strictB);
console.log(strictA === strictB);

console.log(strictA != strictB);
console.log(strictA !== strictB);


let xage = 49;

if(xage >= 18 && xage <= 65) {
    console.log("You're an adult.");
} else if(xage <18) {
    console.log("You're a minor.");
} else {
    console.log("You're old.");
}

xage >= 50 ? console.log("Age is over 49.") : console.log("Age is less than 50.");


