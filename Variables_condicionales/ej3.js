//Condicional con array y string

let dia = "Martes";
dia = dia.toLowerCase();
if (["lunes", "martes", "miércoles", "jueves", "viernes"].includes(dia)) {
    console.log("Hoy toca trabajar");
} else {
    console.log("Hoy es finde");
}