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
for( var i = 0; i < 3; i++){
    cursoA[i].nombre = prompt(`Ingrese el nombre del alumno :`);
    cursoA[i].apellido = prompt(`Ingrese el apellido del alumno :`);
    cursoA[i].nota = prompt(`Ingrese la nota nombre del alumno :`);
};

//Mostrando cada alumno con su nota
for( var i = 0; i < 3; i++){
    alert(`La nota de alumno ${cursoA[i].nombre} ${cursoA[i].apellido} es ${cursoA[i].nota} `);
}
