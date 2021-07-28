// Concatenar manera 1 usando el operador +
var nombre = 'Luis Daniel';
var apellido = 'Ramirez Guerra';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + 'Perez';
console.log(nombreCompleto2);

// Concatena String y el numero lo conviente a cadena
// En javascript se hacen las operaciones de izquierda a derecha
// Por esa razon el orden de la concatenacion de los siguientes ejemplos

var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4)
console.log(x);

x = 2 + 4 + nombre;
console.log(x);
