//Arrays básicos y recorrerlos
let comidas = ["katsu curry", "padthai", "NoPollo al limón", "moebondigas", "Lasaña"];

console.log(comidas[0]);
console.log(comidas[comidas.length - 1]);
comidas.push("volandeiras");
comidas.unshift("poke");
comidas.splice(1,1);
 //Recorrer con for

for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}

//Recorrer con forEach

comidas.forEach(function (comida) {
    console.log(comida)
});