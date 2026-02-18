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
    
    resultado.innerText = `Tu IMC es: ${imc.toFixed(2)}`;
    const number = document.getElementById('number');
        if (imc <= 16) {
            number.style.color = "red";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 18.5) {
            number.style.color = "orange";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 22) {
            number.style.color = "yellow";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 24.5) {
            number.style.color = "green";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 35) {
            number.style.color = "orange";
            number.innerText = imc.toFixed(1);
        } else if (imc <= 40) {
            number.style.color = "lightred";
            number.innerText = imc.toFixed(1);
        } else {
            number.style.color = "red";
            number.innerText = imc.toFixed(1);
        }
}
