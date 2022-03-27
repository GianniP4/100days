//Practicando un poco con vectores o arrays
//Variable que devuelve si todos los num son menores que 100 o no
function numeros(vector){
        return vector.every(condicion);
};

//Función para encontrar un elemento en el array
function encontrar(vector,buscado){
        return vector.includes(buscado);
};

//Condición para evaluar el array
var condicion = (currentValue) => currentValue <= 100;

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
    if(n==1){
        alert(`El número ingresado es menor que 100`);
    }else{
         alert(`Todos los números son menores que 100`);    
    }
}else{
    if(n==1){
        alert(`El número ingresado es mayor que 100`);
    }else{
        alert(`Algunos números son mayores que 100`);
    }
};

//Buscando un elemento dentro del array
var buscado;
var busqueda = confirm(`Desea buscar un elemento dentro del vector?`);

if(busqueda==true){ 
    buscado = parseInt(prompt(`Ingrese el número que desea buscar en el vector = `));
    if(encontrar(vector,buscado)==true){
        alert(`El elemento ${buscado} si se encuentra en el vector.`);
    }else{
        alert(`El elemento buscado no se encuentra dentro del vector.`);
    }
};