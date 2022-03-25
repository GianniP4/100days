//Crear código que calcule  el perímetro y el área de un cuadrado 

var area,
    perimetro;

function cirArea(lado){
    area = lado*4``;
    return area;
};

function cirPer(lado){
    perimetro = lado**2;
    return perimetro;
};

var lado = Number(prompt(`Ingrese algún lado del cuadrado en centímetros = `));

alert(`El área del cuadrado es ${cirArea(lado)}cm y el perímetro ${cirPer(lado)}cm.`);
