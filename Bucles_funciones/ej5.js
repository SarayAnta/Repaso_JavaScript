//Función tabla multiplicar

function tablaMultiplicar(num) {
    for (let i = 1; i < 11; i++) {
        let result = num * i;
        console.log(`${num} * ${i} = ${result}`);
    }
};

const x = 9;
tablaMultiplicar(x);