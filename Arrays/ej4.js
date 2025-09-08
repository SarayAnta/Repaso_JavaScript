//Array de objetos

let peliculas = [
    {
        nombre: "Mulán",
        genero: "animación",
        año: 1997
    },
    {
        nombre: "Shrek",
        genero: "animación",
        año: 2004
    },
    {
        nombre: "Dando la nota",
        genero: "comedia americana",
        año: 2012
    }
]

for (let i = 0; i < peliculas.length; i++) {
    console.log(`La película ${peliculas[i].nombre} corresponde al género ${peliculas[i].genero} y es del año ${peliculas[i].año}.`)
}