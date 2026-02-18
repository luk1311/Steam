const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

function calcularIMC() {
    const pesoValue = parseFloat(peso.value);
    const alturaValue = parseFloat(altura.value);

    if (isNaN(pesoValue) || isNaN(alturaValue) || alturaValue <= 0) {
        alert("Por favor, ingresa valores válidos para peso y altura.");
        return;
    }

    const imc = pesoValue / (alturaValue * alturaValue);
    const resultado = document.getElementById('resultado');
    
    
    const number = document.getElementById('number');
        if (imc <= 16) {
            resultado.innerText = "Desnutrición severa";
            number.style.color = "red";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 18.5) {
            resultado.innerText = "Desnutrición moderada";
            number.style.color = "orange";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 22) {
            resultado.innerText = "Bajo peso";
            number.style.color = "yellow";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 24.5) {
            resultado.innerText = "Peso normal";
            number.style.color = "green";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 30) {
            resultado.innerText = "Sobrepeso";
            number.style.color = "orange";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 35) {
            resultado.innerText = "Obesidad grado 1";
            number.style.color = "orange";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 40) {
            resultado.innerText = "Obesidad grado II";
            number.style.color = "lightred";
            number.innerText = imc.toFixed(1);
        } else {
            resultado.innerText = "Obesidad grado III";
            number.style.color = "red";
            number.innerText = imc.toFixed(1);
        }
}
