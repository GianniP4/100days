//Hoy voy a realizar una suma en una función, usando prompt,el operador suma y casteo de String a Entero.

//Pido que el usuario ingrese dos variables y luego las casteo a tipo entero para poder sumarlas, sino concatenaría strings
var num1 = parseInt(prompt("Ingrese el primer número con el que operará = "));
var num2 = parseInt(prompt("Ingrese el segundo número con el que operará = "));

//función que suma tres números
function suma(num1,num2){

    console.log("Ingresó los números = " + num1 + " y " + num2);
    
    var res_Sum = num1 + num2;

    console.log("El resultado de la suma es = " + res_Sum);

    return 0;
};

suma(num1,num2);
