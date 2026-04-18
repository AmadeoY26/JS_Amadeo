//Las funciones basicas tienen 'Hosting', asi que la puedo declarar desde el inicio
function libros_leidos(libro){
  libros.push(libro); //Agrego a una variable global que creo despues
  //A la variable se le agregan los libros leidos, el resultado permanece en el codigo.
}

let libros = []; //Variable global, utilizable en las funcion

//Libros por leer
para_leer = ['Caracol', 'Liebre', 'Coraline'];

//Agrego los libros uno por uno.
for (i = 0; i<= para_leer.length ;i++){
  libros_leidos(para_leer[i]);
}

//Imprimo los libros que he leido.
console.log("Los libros que he leido hasta ahora son: " + libros);
