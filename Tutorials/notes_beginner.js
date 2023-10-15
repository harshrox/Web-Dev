//document.write("Hello World!")  -> to write on webpage
//console.log("Hello World!")  -> to display in console
/*
a=1;
console.log(a);
*/
//Both let and var are used for variable declaration but let is not accessible outside the block it is declared in.
//Avoid using var because of issue in block scope and functional scope
/* 
Example - 

{
    let name = "Harsh";
}
document.write(name);

The above code will throw an error that name is not defined.

*/

/*
let name = "Harsh";
let name = "ajay";  //Throws error


let name = "Harsh"
name = "ajay";      //Doesn't throw error


var name = "Harsh";
var name = "ajay";   //Doesn't throw error
*/

//let doesn't support re-declaration.
//Const doesn't support re-declaration & re-assignment.


/*
Example--

console.log(x);  // ReferenceError: x is not defined
console.log(y);  // ReferenceError: y is not defined

let x = 10;     // Variable declaration using let
const y = 20;   // Variable declaration using const

x = 30;          // Allowed
// y = 40;       // Error: Cannot reassign a constant variable

if (true) {
  let z = 50;    // z is scoped to this block
  const w = 60;  // w is also scoped to this block
}

// console.log(z);  // ReferenceError: z is not defined
// console.log(w);  // ReferenceError: w is not defined


*/

/*
===	equal value and equal datatype

== equal value

Example--

var x=5;

x==5;  // true

x=="5"  //true

x==="5"  //false

 */

// Conditional statements and loops are same as in C.
/*
For..of loop

const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}

*/

/* Defining a function


function sum(a,b){
    console.log(a+b);
}

sum(2,4);

sum("Hello ","World");






function sum(a,b){
    return a+b;
}

var output =sum(2,4);

document.write(output);

*/



// Any variable created without any keyword(let,var,const) is a global variable.


// Escape sequences
/* document.write("Hello \"Everyone\" , how are you?")  --> output= Hello "Everyone" , how are you?
   document.write("It\'s Harsh")  --> output = It's Harsh
   document.write("This \\ is backslash")   --> output = This \ is backslash
*/

//Arrays-
/*

var car = ["Honda","Lambo","Ferrari"];

var fruits = new Array("Mango","Apple","Guava");

car.push("Ford");

fruits.push(50);

car.pop();

*/

// 2 ways of creating objects
/*
1st way- Literal Object Way

var car = {
  car_manufacturer :"Audi",
  car_model = "97",
  price : 50000,

  allwheeldrive : function()
  {
    return("This car comes with four wheel drive");
  }
}

document.write("<h1>"+car.car_manufacturer+"</h1>");
document.write("<h1>"+car.allwheeldrive()+"</h1>");

car.car_color = "Black"; // can add properties

car.newfun = function()  // can add methods
{
  return("New function added");
}

delete car.car_model;   // can delete properties

*/

/*
2nd way- Object Constructor Way    (for creating multiple templates of same kind)

function cars(car_manufacturer, car_model, price)
{

  this.car_manufacturer = car_manufacturer;
  this.car_model = car_model;
  this.price = price;

  this.allwheeldrive = function()
  {

  document .write("<h2>"+"This car comes with four wheel drive"+"</h2>");
  }

}
var c1 = new cars("Audi","Q7", 50000);

c1.allwheeldrive();

*/


//Multiple output
/*
let a=1;
let b=2;
let c=3;

console.table([a,b,c]);
*/