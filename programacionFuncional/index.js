//Ejercicio 1: Funciones y Arrow Functions

//Crea una función llamada saludar que tome un nombre como argumento y muestre un mensaje de saludo en la consola. 
//Luego, reescribe la misma función utilizando una arrow function.

function saludo(nombre){
    return `Hola ${nombre}`;
}

let saludo2 = (nombre) => `Hola ${nombre}`;

console.log(saludo("jesus"));
console.log(saludo2("jesus"));

//Ejercicio 2: Parámetros y Valores por Defecto

//Crea una función llamada potencia que calcule la potencia de un número dado a un exponente dado. 
//La función debe tener un valor por defecto de exponente igual a 2.

let potencia = (numero, exponente=2) => numero*exponente;

console.log(potencia(4));

//Ejercicio 3: Funciones de Primera Clase

//Crea una función llamada aplica_fn que tome un número y una función como argumentos y 
//aplique la función al número. Prueba la función con una función que devuelva el cuadrado del número.

const cuadrado = (numero) => numero*numero;

let aplica_fn = (numero,funcionAplicar) => funcionAplicar(numero);

console.log(aplica_fn(2,cuadrado));

//Ejercicio 4: Métodos de Programación Funcional

//Dado el siguiente array de números [1, 2, 3, 4, 5, 6, 7, 8, 9], realiza las siguientes operaciones:

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Utiliza filter para crear un nuevo array con los números pares.

let filtradoPar = numeros.filter(numero => numero % 2 == 0);
console.log(filtradoPar);

//Utiliza map para crear un nuevo array con los cuadrados de los números.

let cuadradoNum = numeros.map(numero => numero*2);
console.log(cuadradoNum);

//Utiliza reduce para calcular la suma de todos los números.
console.log(numeros.reduce((total,numero) => total += numero));
//Utiliza every para verificar si todos los números son mayores que 0.
console.log(numeros.every(numero => numero > 0));
//Utiliza some para verificar si algún número es mayor que 10.
console.log(numeros.some(numero => numero > 10));

//Ejercicio 5: Copia y Referencia

//Dado el siguiente objeto:

const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    ciudad: "Ciudad"
  }
};
//Crea una copia independiente del objeto persona utilizando spread ({...}).

//Modifica la edad en la copia y verifica si la edad en el objeto original ha cambiado.
//Modifica la calle en la copia y verifica si la dirección en el objeto original ha cambiado.