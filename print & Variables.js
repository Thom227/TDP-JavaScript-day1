'use strict'; //Always use 'use strixt'; for some reason

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

let myObj = {str: "just keep logging you're nearly there", id:48576 }
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