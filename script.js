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

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

console.log(e)

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar

console.log(`The total bill is £${totalMoney} the 
remaining amount of money to be paid is £${totalLeftToPay}`);