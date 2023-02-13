/* 

Data Types: 

String => string
Number => number
Boolean => boolean
Undefined => undefined

Object:
    Null => object
    Literal Object => object
    Array => object

Symbol => symbol
 
function => function


Variables Definition: (var, let const)

var variableName = value;

*/
/* String */
var nombre = "Luis";
var apellido = 'Rodriguez';
var username = 'lrodriguez12';
var nombreCompleto = `Luis Rodriguez`;

var body = `Bienvenido, ${nombreCompleto} Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, autem eius doloremque dolores magni explicabo eum expedita voluptates, molestias saepe modi id ipsa architecto atque labore. Quia magnam architecto laborum.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, autem eius doloremque dolores magni explicabo eum expedita voluptates, molestias saepe modi id ipsa architecto atque labore. Quia magnam architecto laborum.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, autem eius doloremque dolores magni explicabo eum expedita voluptates, molestias saepe modi id ipsa architecto atque labore. Quia magnam architecto laborum.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, autem eius doloremque dolores magni explicabo eum expedita voluptates, molestias saepe modi id ipsa architecto atque labore. Quia magnam architecto laborum.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, autem eius doloremque dolores magni explicabo eum expedita voluptates, molestias saepe modi id ipsa architecto atque labore. Quia magnam architecto laborum.`;

var nombreCompleto2 = nombre + " " + apellido;

/* Number */
var edad = 30; // int => number
var temperature = -4; // int => number
var grade = -10.58; // float => number
var amount = 10.50; // float => number

/* Boolean */
var active = true; // boolean
var open = false; // boolean

/* Undefined */
var nombre; // undefined;

/* Null */
var users = null; // null => object


/* Literal Object */

var persona = {
    nombre: 'John',
    apellido: 'Doe',
    saludo() {
        console.log("Hola")
    },
    saludo2: function () {
        console.log('Hola 2');
    }
}


persona["nombre"] = 'Jane';
persona['nombre']

persona.apellido = 'Doe';
persona.apellido

persona.saludo()
persona.saludo2()


/* Array */
var nombres = ["Hugo", "Paco", "Luis"];
var notas = [10, 15, 28, 1, 5]
var ejemplo = [true, "Hola", { name: 'Luis' }, [1, 2], undefined, false, { notas: [1, 2] }]

console.log(ejemplo[3][1]);


let cube = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(cube[1][1])

//let a = 5;

/* const PI = [];

PI[0] = 1;
PI[1] = 3; */

// PI = {} // Error

//console.log(PI);

const person = {
    name: 'Luis'
}

person.lastname = 'Rodriguez';

// person = {} // error

console.log(person);
