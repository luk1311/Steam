

function calcular() { 
    const parrafo = document.getElementById("resultado");
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultado = parseFloat(num1) + parseFloat(num2);
    parrafo.innerText = "El resultado es: " + resultado;
    
    if (isNaN(resultado)) {
        alert("Por favor, introduce un numero.");
    }   
}