let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
function saludo() {
    alert("Hola " + nombre.value + " " + apellido.value);
}

saludo();