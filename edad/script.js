const fechaInput = document.getElementById("fecha");
const resultado = document.getElementById("resultado");


function calcular() {
    //variables
    const nacimiento = new Date(fechaInput.value);
    const hoy = new Date();

    // Operaciones
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    const dia = hoy.getDate() - nacimiento.getUTCDate();

    console.log(mes, hoy.getDate() <= nacimiento.getDate(), hoy.getDate(), nacimiento.getUTCDate());

    // Validaciónes
    if (isNaN(nacimiento)) {
        alert("Por favor, ingresa una fecha válida.");
        return;
    } 

    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
    } 

    if (edad < 0) {
        resultado.innerText = "¡Aún no has nacido!";
        return;
    }
   
    // Felicitar en el día del cumpleaños
    if (mes === 0 && hoy.getDate() === nacimiento.getUTCDate()) {
        resultado.innerText = "¡Feliz cumpleaños! Hoy cumples " + edad + " años.";
        return;
    } else {
        resultado.innerText = "Tienes " + edad + " años.";
    }
   
}