//Lo que hice fue trabajar con lo desarrollado ayer, pero cambiandomuchas cosas. Mejorando la limpieza y agregando nuevas funcionalidades

//funcion constructora del objeto Alumnos
function Alumnos(nombre,apellido,nota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nota = nota;
};

//array de los Alumnos de las cursoA usando objetos
var cursoA = [  alumn1 = new Alumnos(),
                alumn2 = new Alumnos(),
                alumn3 = new Alumnos(),
                alumn4 = new Alumnos(),
                alumn5 = new Alumnos()
            ];

//Cargando con un bucle for los datos de los alumnos
var i = 0;
while( i < 3 ){
    cursoA[i].nombre = prompt(`Ingrese el nombre del alumno/a :`);
    cursoA[i].apellido = prompt(`Ingrese el apellido del alumno/a :`);
    cursoA[i].nota = Number(prompt(`Ingrese la nota nombre del alumno/a :`));
    i++;
    console.log(i);
};

//Mostrando cada alumno con su nota
z = 0;
while( z < 3){
    alert(`La nota de alumno/a ${cursoA[z].nombre} ${cursoA[z].apellido} es ${cursoA[z].nota} `);
    z++;
};

//Consulto si los datos ingresados son correctos, si no lo son entonces recargo el site
var respuesta = confirm(`Los datos mostrados son los correctos?`);

if(respuesta == false){
    alert(`Ingrese los datos nuevamente`)
    location.reload()
};

//Asignando las variables de notas
var nota1 = cursoA[0].nota;
var nota2 = cursoA[1].nota;
var nota3 = cursoA[2].nota;


//Funciones de nota más alta y más baja
function notaAlta(nota1, nota2, nota3){
    var notaMax = Math.max(nota1, nota2, nota3);
    return notaMax;
};

function notaBaja(nota1, nota2, nota3){
    var notaMin = Math.min(nota1, nota2, nota3);
    return notaMin;
};


//Consulta si quiere saber cual es la nota más alta y al muestra en pantalla
var cualAlta = confirm(`Desea conocer cual es la nota más alta?`);

if(cualAlta == true){
    alert(`La nota más alta es ${notaAlta(nota1, nota2, nota3)}`)
};

//Consulta si quiere saber cual es la nota más baja y al muestra en pantalla
var cualBaja = confirm(`Desea conocer cual es la nota más baja?`);

if(cualBaja == true){
    alert(`La nota más alta es ${notaBaja(nota1, nota2, nota3)}`)
}else{
    alert(`Muchas gracias!`)
};

