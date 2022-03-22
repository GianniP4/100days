//Lo que hice fue trabajar con lo desarrollado ayer, pero cambiando todos los for por bucles While y usando confirm, ifs y la función location.reload()

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
    cursoA[i].nota = prompt(`Ingrese la nota nombre del alumno/a :`);
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

if(respuesta == true){
    alert(`Muchas gracias!`)
}else{
    alert(`Ingrese los datos nuevamente`)
    location.reload()
};
