
//Tipo de dato String
var nombre = "Carlos";
console.log('Dato String: ', nombre);

// Number
var numero = 1000;
console.log('Dato Number: ',numero);

//Objeto
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "4641668507"
};

console.log("Dato Object: ", objeto);


// Variable dinamica: se puede cambiar el tipo de dato de una variable
nombre = 10;
console.log('Variable dinamica: ', nombre);


//Conocer el tipo de dato de una variable
console.log('Tipo de nombre: ', typeof nombre);

//Tipo de dato boolen (true, false)
var bandera = true;
console.log('Tipo de valor de bandera', typeof bandera);

// tipo de dato Funcion
function myfuncion(){

}
console.log('Tipo de dato de myFunction', typeof myfuncion);

//tipo de dato symbol
var simbolo = Symbol('mi simbolo');
console.log('Tipo de dato de simbolo: ', typeof simbolo);

//Tipo clase es una funcion
class person {
    constructor(nombre, apellido){
      this.nombre = nombre;
      this.apellido = apellido;
    }
}
console.log('Tipo de dato de clase person: ', typeof person);

//Tipo de dato Undefined
var x;
var x2 = undefined;
console.log('Tipo de dato de x y x2: ', typeof x , ',' ,typeof x2);

//null = ausencia de valor
var y = null;
console.log('Tipo de dato de valor null: ', typeof y)

//Arreglos son de tipo object
var autos = ['BMW', 'Audi', 'Volvo'];
console.log( 'Tipo de datos del array autos: ', typeof autos);

//Cadena vacia
var z = '';
console.log('Tipo de dato de cadena vacia: ', typeof z);


