'use strict'; //Always use 'use strixt'; for some reason

console.log("Hello world!");

const text = "this is a message";

console.log("%c" + text, "color: black; background-color: white; font-size: 20px; padding: 5px;");

console.log("%c" + text + "%c" + text, "color: red;", "color: yellow;");

//Conventional way = more memory intensitive
let str1 = "5 + 3 = ";
let value = 5 + 3;
let str2 = str1 + value;
console.log(str2);

//String interpolation will reduce memory usage
//You will need the `` instead of ""
let str3 = `5 + 3 = ${5 + 3}`;
console.log(str3)

//Create 4 differen console logging statements using the following information: Frist name, second name, where you are from, your star sign.
console.log("Thom");
console.warn("Benjamins");
console.error("UK");
console.info("Aquarius");
console.dir("Cat")

//Create 2 variable of your favourite car and conslog so the output looks like: My favourite car is <make> and the model is <model>
let car = "Fiat"
let model = "500"
console.log(`My favourite car is ${car} and the model is ${model}`);


//Create a conslog with a message which uses the following CSS properties: Text colour to be orange, set to the fantasy font family, bold, backgroudn colour black, padding around text to be 10px
console.log("%c This sentence is %cedited with the help %c of CSS.", "font-style: Bold;", "color: orange; background-color: black; padding: 10px;", "color: red; font-family: fantasy;");

//Variables

let a;
let b = "12345";
let c = 12345;
let d = true;
let e = {a:"JavaScript"};

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

//Use template literals to dynamically chaange the sentence.
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = (totalMoney - moneyPaidSoFar)
console.log(`The total bill is £${totalMoney}, the remaining amount of money to be paid is £${totalLeftToPay}`);

//More template literals
let a = 6;
let b = 12;

a
++
b
console.log(`a = ${a}\nb = ${b}`);

let c = 6;
let d = 12;

c++; d;

console.log(`c = ${c}\nd = ${d}`);
