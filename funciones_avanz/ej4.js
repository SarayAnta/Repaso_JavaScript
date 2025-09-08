/*🟢 Ejercicio 4 – Función que modifica arrays
Crea una función incrementarEdades que reciba un array de personas y devuelva un nuevo array donde la edad de cada persona se haya incrementado en 1 año.
Bonus: no modificar el array original. */

const personas = [
    {
        nombre: "Fulano",
        edad: 28,
    },
    {
        nombre: "Mengana",
        edad: 45
    },
    {
        nombre: "Titulfia",
        edad: 73
    },
]

function incrementarEdades(obj) {
    masEdad = [];
    for (let i = 0; i < obj.length; i++) {
        masEdad.push({
            nombre: obj[i].nombre,
            edad: obj[i].edad + 1
        });
    }
    return masEdad
}

const nuevas = incrementarEdades(personas);
console.log(nuevas);
console.log(personas);

//Con map

function incrementarConMap(obj) {
    return obj.map(p => ({
        nombre: p.nombre,
        edad: p.edad +1
    }))
}

const nuevasMap = incrementarConMap(personas);
console.log(nuevas);
console.log(personas);