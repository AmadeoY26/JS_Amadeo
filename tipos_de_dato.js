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

//'typeof' define que tipo de dato es el dato a la derecha de el (solo el dato)
console.log(typeof 42);
console.log(typeof 'Hola');
console.log(typeof -666);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof FALSE);
console.log(typeof 10.10);

/* Clase del 16/04/2026 */

//Estructura if else basica
let clima = "hola".toLowerCase(); //'.toLowerCase()' convierte strings en puras minusculas

if (clima === "caliente" || clima === "calientisimo"){ //El operador OR es '||'
    console.log("Ponte algo fresco");
} 
else if (clima === "frio"){
    console.log("Prende el calentador");
} 
else {
    console.log("Buen clima");
}

//Estructura for basica
//La estructura es for (inicializacion ; condicion ; actualizacion){ Codigo }
for (let i = 10 ; i>=0 ; i--){
    console.log(i);
}

//Arreglo (listas), sintaxis: let variable = [elemento1,...,elementox];
let numeros = [10,20,30,40,50,60,70,80,90,100];
for (let i = 0; i < numeros.length ; i++){ //'.length' devuelve el total de elementos de un objeto iterable desde el 1
    console.log(numeros[i]);
}
console.log("Total de elementos del array: " + numeros.length); 

//Desafios de la clase
for (let i = 1 ; i <= 20; i++ ){
    if (i % 2 === 0){
        console.log(i);
    }  else {
        console.log("El numero " + i + " no es divisible entre 2");
    }
}

//Funciones 
//ESTRUCTURA BASICA:
//function nombreFuncion(variables){ Codigo y return;}

//Funcion sin retorno - Impura
function saludar(nombre){
    console.log("Hola " + nombre + "!");
}
saludar("Pablo");

//Funcion con retorno - Pura
function sumar(x,y){
    return x+y;
}
let resultado = sumar(5,10);
console.log("La suma de los numeros fue: " + resultado);

//Funciones flecha, son las funciones lambda de JS
//Funcion flecha
const cuadradoFlecha = (numero) => {return numero*numero;};
console.log("El resultado de la funcion flecha es: " + cuadradoFlecha(5,5));

const cubo = n => n*n*n;
console.log(cubo(2));

//Funciones anonimas
//No tiene un nombre definido y se asigna a una variable, se utiliza en funciones
//que se ejecutan de inmediato

const saludoAnonimo = function() {
    return "Hola anonimo";
};

a = saludoAnonimo();
console.log(a);

//Diferencia entre var, let y const
//var: Tiene un scope global, utilizable en cualquier parte, redeclarable y reasignada
//let: Alcance de bloque, no puede ser redeclarada pero si reasignada
//const: Alcance de bloque, no puede ser redeclarada ni reasignada