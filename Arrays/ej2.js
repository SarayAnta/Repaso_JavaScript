//Array de números y mostrar solo los pares

let numeros = [1, 4, 6, 3, 78, 31, 45, 66];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i])
    }
}