//Hoy voy a subir un poco de código básico sobre objetos

//Creo el objeto y el constructor de la persona para usarlo como dueño
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  
  var rand = new Person('Rand Aynd', 27, 'F');
  
//Creo el objeto y el constructor de auto con el dueño
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
  //A la propiedad owner le asigno el objeto rand que cree antes
  var car1 = new Car('Dodge', 'Polara', 1983, rand);
  
//Así después puedo acceder al nombre del dueño 
 console.log(car1.owner);  //Así muestra el objeto Rand con sus propiedades
 console.log(`${car1.owner.name} Lo correcto sería dentro del objeto Owner, que en este caso es Rand entrar a su propiedad .name y conocer su nombre`);
 
 //Agregando una propiedad al objeto
 car1.color = "amarillo"; //Creo la propiedad color en car1
    console.log(`El color del auto es  ${car1.color}`);
    