// Funciones avanzadas
// Crea una función filtrarPares que reciba un array de números y devuelva un nuevo array solo con los números pares.
// Bonus: que devuelva también la cantidad de pares encontrados.

let arrayEntero = [1, 2, 3, 54, 79, 86, 44, 35, 24, 90, 153, 998];
let arrayNuevo = [];
let cantidad = 0;

for (let i = 0; i < arrayEntero.length; i ++) {
    if (arrayEntero[i] % 2 == 0) {
        arrayNuevo.push(arrayEntero[i]);
        cantidad ++
    }
}
console.log("El número de pares encontrados es de " + cantidad);

for(let i = 0; i < arrayNuevo.length; i++) {
    console.log(arrayNuevo[i]);
}