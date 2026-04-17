//Creacion de una variable, importante indicar 'let' para decirle al programa que es una variable, tambien se puede usar 'var'
let mascota = "Pepa";
console.log(mascota);

//Variable tipo entrada del usuario, necesario especificar 'prompt'
let nombre = prompt("¿Cual es tu nombre: ?");
console.log("Tu nombre es: " + nombre);

//Operadores magicos: Matematicos y de Comparacion
//Comparacion: <, >, === (igualacion, devuelve true o false), <=, >=
let a = 10;
let b = 5;
let suma = a+b;
console.log("La suma de a y b es: " + suma);
//Nota del operador de suma '+', cuando se interactua entre cadenas, se concatenan.

console.log(typeof 42);
console.log(typeof 'Hola');
console.log(typeof -666);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof FALSE);
console.log(typeof 10.10);