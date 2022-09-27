'use strict'

console.log("Hello world!");

const text = "this is a message";

console.log(text);

console.info(text);

console.dir(text);

console.warn(text);

console.error(text);

console.log("%c" + text, "color: black; background-color: white; font-size: 20px; padding: 5px;");

console.log("%c" + text + "%c" + text, "color: red;", "color: yellow;");

let car = "Audi A5";

let myObj = {str: "just keep loggin gyou're nearly there", id:48576 }
console.info("My first was was a " + car + ". The object is: ", myObj);

let myTxt = "This could be useful!";

console.log("this is a %c a message with some CSS."+myTxt,"color: yellow; font-style: italic; background-color: blue;padding: 2px");

let frstName = "Thom"
let scndName = "Benjamins"
console.log("My first name is: " + frstName + " and my second name is: " + scndName);

console.info("My second name is: " + scndName);

car = "BMW";

let country = "The Netherlands"
console.info("I am from: " + country);

let strSign = "Saggitaurus"
console.warn("My starsign is: " + strSign);

let cars = ["BMW", "Mercedes", "Audi"];

//let myCar= {type:"Audi", model="A5"};

let age;
console.info(typeof(age));

let userID = null;
console.log(userID);

//Conventional way = more memory intensitive
let str1 = "5 + 3 = ";
let value = 5 + 3;
let str2 = str1 + value;
console.log(str2);

//String interpolation will reduce memory usage
//You will need the `` instead of ""
let str3 = `5 + 3 = ${5 + 3}`;
console.log(str3)

let aa;
let bb = "12345";
let cc = 12344;
let dd = true;
let ee = {aa:"JavaScript"};

console.log(ee)

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

let a = 1;
let b = 1;

a
++
b
console.log(`a = ${a}\nb = ${b}`);

let c = 1;
let d = 1;

c++; d;

console.log(`c = ${c}\nd = ${d}`);

//Iteration == loops
//FOR loop runs while a condition is met
//i for iteration = convetional way just

for(let i = 0; i < 3; i++) {
    console.log(`i = ${i}`);
}

//WHILE loop work with BOOLEANs, run untill a 
//condition is no longer true
let  condition = true;
let increment = 0;

while(condition === true) {
    console.log(`increment = ${increment}`);
    increment ++;

    if(increment === 3) {
        condition = false;
    }
}

//DO-WHILE is like a while loop but will ALWAYS
//run atleast once

let z = false;
do{
    console.log("Run forest run");
} while(z === true);

//SWITCH CASES will run a break or return
//Can be much more effective than large if-else
//if statements

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

let A = 100;

while(A <=200) {
    console.log(A);
    A ++;
}
