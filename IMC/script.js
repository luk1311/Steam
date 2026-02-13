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

        if (imc <= 16) {
            resultado.innerText = " desnutrición severa, IMC: "+ imc.toFixed(1);
        } else if (imc <= 18.5) {
            resultado.innerText = " desnutrición moderada, IMC: "+ imc.toFixed(1);
        } else if (imc <= 22) {
            resultado.innerText = " bajo peso, IMC: "+ imc.toFixed(1);
        } else if (imc <= 24.5) {
            resultado.innerText = " peso ideal, IMC: "+ imc.toFixed(1);
        } else if (imc <= 35) {
            resultado.innerText = " obesidad tipo 1, IMC: "+ imc.toFixed(1);
        } else if (imc <= 40) {
            resultado.innerText = " obesidad tipo 2, IMC: "+ imc.toFixed(1);
        } else {
            resultado.innerText = " obesidad tipo 3, IMC: "+ imc.toFixed(1);
        }
}
