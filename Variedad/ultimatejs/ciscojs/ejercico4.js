/*Pregunta 1: Cree un objeto que describa un billete de tren y guárdelo en la variable ticket. El objeto debe tener tres campos:

estación de partida (nombre clavede, indique el nombre de la estación más cercana a su zona como valor);
estación final (nombre de la clavea, indique cualquier otra estación dentro de 100 km como valor);
el precio del billete (nombre claveprecio, indique como valor la cantidad que desea pagar por este boleto).
El objeto debe crearse mediante llaves, en las que se listarán inmediatamente todos los campos creados. A continuación, se mostrarán los valores de todos los campos del ticket en la consola.
*/
/*Pregunta 2: Declare un objeto vacío y guárdelo en una variable de persona. Usando la notación de punto, agregue elnombreyapellidocampos al objeto ingresando sus datos como valores. Intente mostrar los campos individuales en la consola.*/



let ticket ={ 
    from :"bogota",
    to : "ricaurte",
    price :1000,

 };

 console.log(`ticket from ${ticket.from}`);
 console.log(`ticket to ${ticket.to}`);
 console.log(`ticket price ${ticket.price}`);

 let person = {};

 person.nombre="Julian";
 person.apellido="Montenegro";

 console.log(`Nombre ${person.nombre}`);
 console.log(`Apellido ${person.apellido}`);