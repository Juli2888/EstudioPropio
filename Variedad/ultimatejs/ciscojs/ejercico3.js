/*
let bl = Boolean("");
let bl1 = true ;
let nu = Number(1);
let nuu= 1;
let bit = BigInt (11);
let bitt = 11n;
let str = String ("Hola");
let strr = "hola";
let u1 = undefined;
let pro= null;




console.log(typeof bl , bl);
console.log(typeof nu , nu);
console.log(typeof bit , bit);
console.log(typeof str , str);
console.log(typeof u1 , u1);
console.log(typeof pro , pro);




let stri = "1234";
let num = Number(stri);
let biti =BigInt(num) ;
let bol = Boolean(biti);

console.log (`${stri} y [${typeof stri}]`)
console.log (`${num} y [${typeof num}]`)
console.log (`${biti} y [${typeof biti}]`)
console.log (`${bol} y [${typeof bol}]`)



let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);




console.log ( `${bl}  [${typeof bl} ]`);
console.log ( `${nu} [${typeof nu} ]`);
console.log ( `${bit} [${typeof bit} ]`);
console.log ( `${str} [${typeof str} ]`);
console.log ( `${u1} [${typeof u1} ]`);
console.log ( `${pro} [${typeof pro} ]`);



let sumastr= "hola" + "bro";
let sumanum= 1 + 2;
let sumabol= true + false ;
let sumabit = 11n + 2n;

console.log (`${sumastr} a ${typeof sumastr}`);
console.log (`${sumanum} a ${typeof sumanum}`);
console.log (`${sumabol} a ${typeof sumabol}`);
console.log (`${sumabit} a ${typeof sumabit}`);


let sumastrdif= "hola" + 123;
let sumanumdif= 1 + "hola";
let sumaboldif= true + 11n ;
let sumabitdif = 11n + 11;

/*
console.log (`${sumastrdif} e ${typeof sumastrdif}`);
console.log (`${sumanumdif} e ${typeof sumanumdif}`);
console.log (`${sumaboldif} e ${typeof sumaboldif}`);
console.log (`${sumabitdif} e ${typeof sumabitdif}`);

const str1 = 42 + +"1" ;

console.log (str1);

let testObj = {
    nr: 600,
    str: "text"
    };
console.log(testObj, typeof  testObj);  //  ->  object

console.log(testObj.nr); // -> 600
console.log(testObj.str); // -> text

let  name1  =  "Calvin";
let  surname1  =  "Hart";
let  age1  =  66;
let  email1  =  "CalvinMHart@teleworm.us";
   
let  name2  =  "Mateus";
let  surname2  =  "Pinto";
let  age2  =  21;
let  email2  =  "MateusPinto@dayrep.com";

let  user1  =  {
    name:  "Calvin",
    surname:  "Hart",
    age:  66,
    email:  "CalvinMHart@teleworm.us"
};

let  user2  =  {
    name:  "Mateus",
    surname:  "Pinto",
    age:  21,
    email:  "MateusPinto@dayrep.com"
};

console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus
   
console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67
   
console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557

console.log(user2.phone);  //  ->  904-399-7557
delete  user2.phone;
console.log(user2.phone);  //  ->  undefined


let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri
   
days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday
   
let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined


let  animals  =  [];
console.log(animals[0]);  //  ->  undefined
   
animals[0]  =  "dog";
animals[2]  =  "cat";
   
console.log(animals[0]);  //  ->  dog
console.log(animals[1]);  //  ->  undefined
console.log(animals[2]);  //  ->  cat

let  values  =  ["Test",  7,  12.3,  false];

let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James
   
let  femaleNames  =  names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia
*/

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";
   
console.log(typeof days); // -> object
console.log(typeof day); // -> string
   
console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false


