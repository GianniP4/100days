//Hoy me interesa crear  funciones desmotrando los tipos de datos primitivos que existen en JS.

//separador
function separador(){
    console.log("----------------------------------------------------------------------------")
};

//numeros
function numberTypes() {
    console.log("Este es un entero en js = " + 25);
    console.log("Este es un flotante en js = " + 2.55);
};

//booleanos
function boolTypes() {
    console.log("Este es un booleano en js = " + true);
    console.log("Este es un booleano en js = " + false);
};

//strings
function strTypes() {
    console.log("Este es un string en js");
};

//otros tipos
function otherTypes() {
    var bgi = 9007199254740992n;
    var nll = null;
    var indef = undefined;
    var symb = Symbol("hello");
    var obj = new Object([1,2,3]);
    console.log("Este es el valor Undefined en js : " + indef);
    console.log("Este es el valor Null en js : " + nll);
    console.log("Existe el Symbol type " );
    console.log("Este es el Object en js = " + Object.values(obj) );
};

//llamando a las funciones
separador();

numberTypes();

separador();

boolTypes();

separador();

strTypes();

separador();

otherTypes();

separador();