//Crea un array de objetos peliculas, donde cada objeto tenga:
//título
//año
//director
//puntuación (0-10)
//Haz una función peliculasTop que reciba el array y un número minPunt y devuelva todas las películas cuya puntuación sea mayor o igual a minPunt.

let peliculas = [
    {
        titulo: "Mulán",
        año: 1997,
        director: "Whuan shi on",
        puntuacion: 9
    },
    {
        titulo: "Shrek",
        año: 2002,
        director: "Asno",
        puntuacion: 8.5
    },
    {
        titulo: "Crepúsculo",
        año: 2010,
        director: "Un Tío Moñas",
        puntuacion: 6
    },
    {
        titulo: "Normal People",
        año: 2023,
        director: "Sally Rooney",
        puntuacion: 7
    },
    {
        titulo: "Lilo y Stich Real Action",
        año: 2025,
        director: "Walt Disney muerto",
        puntuacion: 4
    },
]

function peliculasTop(obj, minPunt) {
    let pelisTop = [];
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].puntuacion >= minPunt) {
            pelisTop.push(obj[i])
        }
    }
    console.log("Las películas con puntuación superior a " + minPunt + " son:");
    for (let i = 0; i < pelisTop.length; i++) {
        console.log(pelisTop[i].titulo);
    }
}

peliculasTop(peliculas, 8);