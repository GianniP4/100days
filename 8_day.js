//Ejercicio: ingresar la nota/data de 3 alumnos y mostrar todos sus datos en pantalla con el promedio de notas y la más alta y baja (sin usar objetos)

//Función que calcula el promedio de notas y la más alta/baja
function promedio(nota1,nota2,nota3) {
   var prom = (nota1+nota2+nota3)/3;
    alert(`El promedio de las notas es ${prom}`);
        var minNot = Math.min(nota1,nota2,nota3);
            alert(`La nota más baja es ${minNot}`);
                var maxNot = Math.max(nota1,nota2,nota3);
                    alert(`La nota más alta es ${maxNot}`);
};

//Variables donde se asigna el alumno
var alum1 = prompt(`Ingrese el nombre y apellido del alumno :`);
    var alum2 = prompt(`Ingrese el nombre y apellido del alumno :`);
        var alum3 = prompt(`Ingrese el nombre y apellido del alumno :`);

//Variables donde se asgina la nota de cada alumno
var nota1 = Number(prompt(`Ingrese la nota del alumno ${alum1} =`));
    var nota2 = Number(prompt(`Ingrese la nota del alumno ${alum2} =`));
        var nota3 =Number( prompt(`Ingrese la nota del alumno ${alum3} =`));

//Llamando a la función promedio
promedio(nota1,nota2,nota3);