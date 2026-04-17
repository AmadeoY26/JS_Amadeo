let nota = 100;
//Caso de reprobado
if (nota < 60){
    console.log("Reprobado");
}
//Casos de aprobacion         
else {
    if (nota >= 90){
        console.log("Excelente");
    }
    else if (nota >=75 && nota <=89){
        console.log("Bien");
    }
    else if (nota >= 60 && nota <= 74){
        console.log("Suficiente");
    }
}
