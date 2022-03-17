
//Funcion para definir si un num es par o imparr
function parImp(num1){
    if(num1%2==0){  
        alert("El número "+num1+" es par");   
    }else{       
        alert("El número "+num1+" es impar");     
    }
};

var num1 = parseInt(prompt("Ingrese un número para saber su paridad = "));

parImp(num1);


