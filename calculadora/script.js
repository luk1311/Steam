

function sumar() { 
    //VARIABLES
    const parrafo = document.getElementById("resultado");
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultado = parseFloat(num1) + parseFloat(num2);
    const newparrafo = document.createElement("p");
   

    //HEREDAR ELEMENTO
    const historial = document.querySelector("#historial");
    historial.appendChild(newparrafo);
    
    //EDITAR ELEMENTO
     newparrafo.textContent = resultado;

    //CONDIONAL
    if (isNaN(resultado)) {
        alert("Por favor, introduce un numero.");
    }   
}

function restar() { 
    //VARIABLES
    const parrafo = document.getElementById("resultado");
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultado = parseFloat(num1) - parseFloat(num2);
    const newparrafo = document.createElement("p");
   

    //HEREDAR ELEMENTO
    const historial = document.querySelector("#historial");
    historial.appendChild(newparrafo);
    
    //EDITAR ELEMENTO
     newparrafo.textContent = resultado;

    //CONDICIONAL
    if (isNaN(resultado)) {
        alert("Por favor, introduce un numero.");
    }   
}

function multiplicar() { 
    //VARIABLES
    const parrafo = document.getElementById("resultado");
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultado = parseFloat(num1) * parseFloat(num2);
    const newparrafo = document.createElement("p");
   

    //HEREDAR ELEMENTO
    const historial = document.querySelector("#historial");
    historial.appendChild(newparrafo);
    
    //EDITAR ELEMENTO
     newparrafo.textContent = resultado;

    //CONDICIONAL
    if (isNaN(resultado)) {
        alert("Por favor, introduce un numero.");
    }   
}   