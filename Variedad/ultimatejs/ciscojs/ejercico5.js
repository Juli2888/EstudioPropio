/**
 * Pregunta 3: Estamos creando nuestra pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista de ellos. Almacenaremos tres datos sobre cada libro: título, autor y número de páginas:

Hablando JavaScript , Axel Rauschmayer, 460;
Programación de aplicaciones JavaScript , Eric Elliott, 254;
Comprensión de ECMAScript 6 , Nicholas C. Zakas, 352.
Crea una matriz de tres objetos que representen los libros. Cada objeto debe tener las siguientes propiedades: título, autor y páginas.
 * 
 * 
 * 
 */

let libros =[{
    Titulo:"Hablando JavaScript",
    Autor:" Axel Rauschmayer",
    NumPaginas:"460",
},
{
    Titulo:"Programación de aplicaciones JavaScript",
    Autor:" Eric Elliott",
    NumPaginas:"254"

},
{
    Titulo:"Hablando JavaScComprensión de ECMAScript 6ript",
    Autor:"  Nicholas C. Zakas",
    NumPaginas:"352"

},

];
/**
 * Pregunta 4: Agregue un nuevo libro a la colección: Learning JavaScript Design Patterns , de Addy Osmani, 254 páginas. Use el método apropiado para hacer esto, que adjuntará el libro al final de la matriz. Muestre la longitud de la matriz y, a su vez, todos los nombres de los libros en la colección.
 * 
 * Utilice el comando slice para copiar los dos últimos libros a la nueva matriz.
 */

//let newBook = {
//    Titulo: "Learning JavaScript Design Patterns",
//    Autor: "Addy Osmani",
//    NumPaginas: 254
//};
//libros.push(newBook);
//console.log(libros.length);
//console.log(libros[0].Titulo);
//console.log(libros[1].Titulo);
//console.log(libros[2].Titulo);
//console.log(libros[3].Titulo);
//
//let libros2 =libros.slice(-2);
//
//console.log(libros2);


/**
 * Pregunta 6: El primer libro de la colección se perdió en circunstancias inexplicables. Ya ha aceptado la pérdida, por lo que lo elimina de la matriz. ¿Qué método utilizará para este propósito? Muestre la longitud de la matriz y todos los nombres de los libros de la colección uno por uno.
 * 
 * 
 */
//libros.shift();
//console.log(libros.length);
//console.log(libros[0].Titulo);
//console.log(libros[1].Titulo);
//console.log(libros[2].Titulo);
//
///**
// * 
// * Pregunta 7: Muestra la suma de las páginas de todos los libros de la colección.
// * 
// */
//let sum = libros[0].NumPaginas + libros[1].NumPaginas + libros[2].NumPaginas;
//console.log(`pages: ${sum}`);


"use strict";
   
const prefix = "username_";
   
let userName = "Jack";
//const userName = "Adam";
   
let prefixedUserName;
//const prefixedUserName;
   
userName = "John";
prefixedUserName = prefix + userName;
   
console.log(prefixedUserName /*+ prefixedUserName2*/);
//console.log(prefixedUserName2);