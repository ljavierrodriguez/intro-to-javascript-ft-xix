/* 
Condicionales: 


if(condition){
    sentencias
}


if (condition){
    sentencias
} else {
    sentencias
}

if (condition) {
    sentencias
} else if (condition){
    sentencias
} else if (condition) {
    sentencias
} else {
    sentencias
}

condicion: valor1 operador valor2

Operadores de Comparacion:

=== es exacto a => valor y tipo de dato
== es igual a => valor
!== es diferente a => valor y tipo de dato
!= es distinto de => valor
>= es igual o mayor que
<= es menor o igual que
> es mayor que 
< es menor que

Operadores Logicos: (and, or, not) => (&&, ||, !)

true && true => true
true && false => false
false && false => false

true || true => true
true || false => true
false || false => false

!true && !true => false
!true && !false => false
!false && !false => true

!true || !true => false
!true || !false => true
!false || !false => true

Switch Case:


switch(valor){
    case valor: sentencias;
        break;

    case n: sentencias;
        break;

    default: sentencias;
        break;
}


Operador Ternario: (?)

*/
if(5 == '5'){
    console.log("Verdadero");
}

if(5 > 5){
    console.log("Verdadero");
} else {
    console.log("Falso");
}

if(1 > 2){
    console.log("Verdadero"); 
} else if ( 1 < 3){
    console.log("Verdadero");
} else if ( 1 == 5){
    console.log("Verdadero");
} else {
    console.log("Falso");
}

if(1 > 2 && 1 < 3 && 1 < 5) { // true
    // entro
} else {

}

if(1 > 2 || 1 > 3 || 1 < 5){
    // entro
}

let age = 16;
if(!(age>=18)){
    console.log("Vuelve cuando seas mayor")
}

let a = 5;
let b = 4;
let c = 8;

if(a > b && a > c){
    console.log("A");
} else if (b > c){
    console.log("B");
} else {
    console.log("C");
}

switch(true){
    case a > b && a > c:
        console.log("A");
        break;
    case b > c:
        console.log("B");
        break;
    default:
        console.log("C");
        break;
}

let opcion = 1;

switch(opcion){
    case 1: console.log('Pagar tarjetas');
        break;
    case 2: console.log('Retirar Fondos');
        break;
    default: console.log('Option no valida');
        break;
}

let activo = a > b ? true : false;

// El mayor de tres numeros usando el operador ternario
let mayor = a > b && a > c ? "A" : b > c ? "B" : "C";
console.log("El mayor es : ", mayor);