let frutas = ['cereza', 'frambuesa', 'melocoton', 'cereza', 'melocoton', 'melocoton', 'frambuesa', 'cereza', 'melocoton'];
let i = 0;
contador_frutas = [0,0,0];

while (i <= (frutas.length-1)){ //Indices totales de la lista.
  
  if (frutas[i] === 'cereza'){
    contador_frutas[0] += 1;
  }
  
  else if (frutas[i] === 'frambuesa'){
    contador_frutas[1] += 1;
  }
  
  else if (frutas[i] === 'melocoton'){
    contador_frutas[2] += 1;
  }
  
  else{
    console.log("Fruta desconocida");
  }
  
  i++;
  
}

verificador_frutas = []; //Para saber en cual fruta estamos

for (let k = 0; k <= contador_frutas.length-1; k++){
  n = k-1;
  //Condicion inicial
  if (k===0){
    verificador_frutas.push(frutas[k]);
  } 
  
  //Sobre pasamos la condicion inicial, verificamos
  else {
    //Si la fruta actual es igual a la fruta anterior
    if (frutas[k] === verificador_frutas[k-n]){
      //No hace nada
    }
    //De lo contrario agregamos
    else {
      verificador_frutas.push(frutas[k]);
    }
  }
  
  console.log("Hay " + contador_frutas[k] + " frutas de la fruta " + verificador_frutas[k]);
}
