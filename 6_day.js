//Hoy voy a subir un poco de código básico sobre objetos

//Ejemplos de Objetos creados mediante inicializadores de objetos
var food = {};
var food = {sabor: "Salada",
                 costo: 500,
                     platos: {} };

console.log("Costo anterior : " + food.costo);
food = {costo: 550};
console.log("Costo actual : " + food.costo);

//Como sería con el Shorthand property names (ES2015)
var comida = {};
var comida = sabor = "Salada",
            costo = 500,
            platos = {}; 
sabor = {sabor: "Amargo"};

//Objetos creados mediante un constructor
//Función constructora
    function auto(marca, modelo , anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    };

    var miauto = new auto('BMW', 'm4', 1998);

    console.log("Mi auto es marca " + miauto.marca)