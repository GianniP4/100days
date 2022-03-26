//Practicando un poco con vectores o arrays
//Variable que devuelve si todos los num son menores que 100 o no
function numeros(vector){
        return vector.every(condicion);
};

//Condición para evaluar el array
var condicion = (currentValue) => currentValue < 100;

//Creo el array
var vector = [];

//Ingreso por le usuario de la cantidad de elementos del array
var n = parseInt(prompt(`Ingrese la cantidad de elementos que tendra del vector =`));

//Asignando los valores a los elementos del array
for(var i=0; i<n ; i++){
    vector[i] = parseInt(prompt(`Ingrese un número =`));
};

//Muestra si todos los números son menores que 100 o no
if(numeros(vector)==true){
    if(n=1){
        alert(`El número ingresado es menor que 100`)
    }else{
         alert(`Todos los números son menores que 100`)
    }
}else{
    if(n=1){
        alert(`El número ingresado es mayor que 100`)
    }else{
        alert(`Algunos números son mayores que 100`)
    }
};