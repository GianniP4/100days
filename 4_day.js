//Hoy voy a subir un poco de código sobre strings

//Función que compara si dos palabras son exactamente iguales
function comparar(pal1,pal2){

    alert("Las palabras ingresadas son : " + pal1 + " y " + pal2)
    
    if(pal1===pal2) {
        alert("Correcto, las dos palabras son exactamente iguales");
    }else
        alert("Incorrecto, las dos palabras son distintas"); 

    return 0;
};

var pal1 = prompt("Ingrese la primer palabra :");
var pal2 = prompt("Ingrese la segunda palabra :");


comparar(pal1,pal2)
