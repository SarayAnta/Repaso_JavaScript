//Crea una función presentarPersona que reciba un objeto persona (como en el día 3) y devuelva un string presentando a la persona.
//Bonus: si tiene más de 2 hobbies, que los liste todos, separados por comas.

const persona = {
    nombre: "Saray",
    edad: 30,
    hobbies: ["leer", "jugar a rugby"]
}
function presentarPersona(obj) {
    let hobbiesTexto;
    if (obj.hobbies.length === 1) {
        hobbiesTexto = obj.hobbies[0];
    } else if (obj.hobbies.length === 2) {
        hobbiesTexto = obj.hobbies.join(" y ");
    } else {
        const todos = obj.hobbies.slice(0, -1).join(", ");
        const ultimo = obj.hobbies[obj.hobbies.length -1];
        hobbiesTexto = `${todos} y ${ultimo}`;
    }

    return `Me llamo ${obj.nombre}, tengo ${obj.edad} años y me gusta ${hobbiesTexto}.`;
}

console.log(presentarPersona(persona));