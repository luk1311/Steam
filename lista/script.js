const btn = document.getElementById("btn");
const input = document.getElementById("input");

const container = document.querySelector("#lista");

function pulsar() {
    if (input.value === "") {
        alert("El campo de texto está vacío. Por favor, escribe algo.");
        return;
    }
    else {
        //VARIABLES
        const titulo = document.querySelector("#titulo");
        const newparrafo = document.createElement("p");
        newparrafo.textContent = input.value;

        //HEREDAR ELEMENTO
        container.appendChild(newparrafo);

        //EDITAR ELEMENTO
        titulo.textContent = "Listado de elementos";
        newparrafo.textContent = input.value;
    }

}

btn.addEventListener("click", pulsar);