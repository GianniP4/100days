//Hoy es mi primer día, ya tengo conocimeintos previos pero vamos a comenzar por lo básico de programación

//Programar una explicación del Scope

var x = "Creo la variable global" ; //Inicio una variable global

//varGlobal es una funcion para mostrarcomo funciona una variable global
function varGlobal() {
    console.log(x)
    x = "Se modifuico porque es global"
    console.log(x)
};

varGlobal();

//Varible local

//varLocal es una funcion para mostrarcomo funciona una variable global
function varLocal() {
    var y = "Creo la variable local"
    console.log(y)
    y = "Modifico dentro de la funcion la variable local"
    console.log(y)
};

varLocal();

// console.log(y);  Dara un ReferenceError, quiero mostrarla pero no existe de manera global ya que fue declarada dentro de una función

//Creando una constante global

const PI = 3.14159 ;

console.log(PI);
//piValue muestra el valor de Pi 
function piValue() {
    console.log("El valor de Pi es = " + PI);
};

piValue();


