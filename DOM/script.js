let boton = document.getElementById("btn");
let parrafo = document.getElementById("parr");
let viejoTexto = parrafo.innerText;
let nuevoTexto = "El contenido ha cambiado";
boton.addEventListener("click", () => {
    if (parrafo.innerText === viejoTexto) {
        parrafo.textContent = nuevoTexto;
    } else {
        parrafo.textContent = viejoTexto;
    }
})

let incr = document.getElementById("incr");
let decr = document.getElementById("decr");
let parrCont = document.getElementById("contador");
let count = 0;
parrCont.textContent = count;

incr.addEventListener("click", () => {
    count++;
    parrCont.textContent = count;
});

decr.addEventListener("click", () => {
    count--;
    parrCont.textContent = count;
})

let añadir = document.getElementById("add");
let texto = document.getElementById("new");
let lista = document.querySelector("ol");

function agregarItem() {
    if(texto.value.trim() !=="") {
        let nuevo = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = texto.value;

        let botonNuevo = document.createElement("button");
        botonNuevo.textContent = "Eliminar"

        botonNuevo.addEventListener("click", () => {
            nuevo.remove();
        })
        nuevo.appendChild(span);
        nuevo.appendChild(botonNuevo);
        lista.appendChild(nuevo);
        
        texto.value = "";
        texto.focus();
    }
}
añadir.addEventListener("click", agregarItem);
texto.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        agregarItem();
    }
})