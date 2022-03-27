//Practicanod algo de funciones

//Declaraciones de funciones

//Función que no retorna nada sino que solo muetra un mensaje
function hola(){
    alert(`Hola!`);
};
//Función que no retorna nada sino que solo muetra un mensaje con la suma
function suma(a,b){
    alert(`La suma es igual a ${a+b}.`)
};
//Función que si retorna el valor de la suma el cual s epuede utilizar
function sumaRet(a,b){
   var resultado = a + b;
    return resultado;
};

//Es una expresiónde función, 
var exprefun = function(a,b){ return a * b;}; 

//Llamados a funciones y algunas explicaciones
hola();

var a = parseInt(prompt(`Ingrese un número = `));
var b = parseInt(prompt(`Ingrese otro número = `));

suma(a,b);

alert(`La suma de ${a} y ${b} es igual a ${sumaRet(a,b)}, y esto elevado al cuadrado es igual a = ${sumaRet(a,b)**2}.`);
alert(`La multiplicación de ${a} y ${b} es igual a ${exprefun(a,b)}.`);