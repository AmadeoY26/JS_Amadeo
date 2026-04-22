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

/*----------Clase 3 - 21/Abril/2026---------------*/

//Vector: Lista ordenada de elementos, como numeros o componentes;
//Cada elemento del vector es un componente y su posicion es importante.
//Los vectores se pueden recorrer, modificar y otros usos.

//A un vector tambien se le conoce como un 'Arreglo'


//'.forEach()': Recorre cada elemento del arreglo y ejecuta una misma funcion para cada uno de ellos
numeros.forEach((numero) => {console.log(numero);});



//map(): Recorre cada elemento del vector pero genera un nuevo arreglo con resultados
//que ejecute una funcion para cada elemento.
const numerosCuadrados = numeros.map((numero) => {return numero*numero});
console.log("Numeros cuadrados: " + numerosCuadrados);


//'.splice(desdequeindice, cuantosElementoEliminar)': Elimina los elementos
//apartir de la posicion 'x' (incluye a x) hasta un numero 'y' (cuenta desde x) de elementos



//Objeto: Construir una cosa en digital, con sus atributos y propiedades.
const persona = {
    nombre: "Daniel",
    edad: 25,
    profesion: "Programador"
};
console.log("Propiedad de nombre del objeto 'Persona': " + persona.nombre); //Imprimir su atributo exacto

//Agregar un nuevo atributo al objeto: objeto.nuevoAtributo = valor;
persona.color = "Wero";
console.log(persona);
//Eliminar atributo de un objeto: delete objeto.atributo;
delete persona.color;
console.log(persona);
//Modificar: objeto.atributo = nuevoValor;
persona.edad = 22;
console.log(persona);



//CSS Framewok
//Ayuda a agilizar el proceso de programacion, es reutilizable

//Que es: Coleccion de herramientas, reglas y componentes qe facilitan la vida como programador

//Que incluyen: Diseños, tablas, formularios, Sistemas, Estilos, etc.

//Que usar: El mas usados pero mas viejo es 'Boostrap', Semantic UI, Media CSS, Foundation Network
//, talwindcss, BULMA CSS.

//Como funcionan: Tienes que copear codigo de inicializacion (o otros) html de cada framework
//Es un codigo HTML con un link que ejecuta el framework desde el instante 0;
//Puedes pegar tambien otros diferentes al de inicializacion, segun te convenga.
//Al hacer esto y crear objetos html se aplicaran automaticamente los estilos;
//Cabe destacar que hay varios sub codigos que puedes copear y pegar de la pagina
//para lograr distintas estructuras y objetos, por lo que la de inicializacion puede ser complementada
//con los codigos mencionados.
//Practicamente es un CopyPaste inteligente;
//El uso avanzado es cuando implementas palabras clave para resumir grandes bloques de CSS