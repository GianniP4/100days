//funcion constructora del objeto CLima
function Dias(dia,clima,tempe) {
    this.dia = dia;
    this.clima = clima;
    this.tempe = tempe;
};

//array de los dias de las semanas usando objetos
var semana = [  dia1 = new Dias(),
                dia2 = new Dias(),
                dia3 = new Dias(),
                dia4 = new Dias(),
                dia5 = new Dias()
            ];

for( var i = 0; i < 6; i++){
    semana[i].dia = prompt(`Ingrese el día :`);
    semana[i].clima = prompt(`Ingrese el clima :`);
    semana[i].tempe = prompt(`Ingrese la temperatura :`);
};

alert(semana[0].dia);
alert(semana[0].clima);
alert(`${semana[0].tempe} grados`);
